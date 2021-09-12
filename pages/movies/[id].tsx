import { useRef, useState, useEffect } from "react";
import {
	GetMovieDocument,
	usePremiumUserLazyQuery,
	GetMovieQuery,
	useGetRelatedMoviesQuery,
	Movies as typeMovies,
	Genres,
	GetMovieQueryResult,
} from "@graphgen";
import { NextRouter, useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "@styles/MoviePage";
import { Grid, Container, Divider } from "@material-ui/core";
import { initializeApollo } from "@apollo/index";
import { GetStaticPaths, GetStaticProps } from "next";
import { useAuth } from "@contexts/AuthContext";
import { gqlInvalidToken } from "@apollo/apolloReactiveVar";
import Iframe from "@components/movies/Iframe";
import RelatedMovies from "@components/movies/RelatedMovies";
import DetectOtherLogin from "@components/modals/detectOtherLogin";
import MovieInfo from "@components/movies/MovieInfo";

const useStyles = makeStyles(styles);
const client = initializeApollo();
export interface PageProps {
	data: GetMovieQuery;
}

export default function MoviePage(props: PageProps) {

	const [checkPremium, { data, loading: checkPremiumLoading }] = usePremiumUserLazyQuery({
		fetchPolicy: "network-only",
		ssr: false,
	});
	const { data: relatedMoviesData, loading: relatedMoviesLoading } = useGetRelatedMoviesQuery();
	const router: NextRouter = useRouter();
	const classes = useStyles();
	const [currentServer, setCurrentServer] = useState<string | null>(null);
	const prevPath = useRef(router.query.id);
	const [loading, setLoading] = useState<boolean>(true);
	const { id } = router.query;
	const serverResult = props.data;
	const movieData = serverResult?.getMovie;
	const premiumUser: boolean = data?.premiumCheck?.premiumUser || null;
	const unmountingPremium = useRef(false);

	function changeServer(server: string) {
		setCurrentServer(server);
		setLoading(server !== currentServer);
	}

	function iframeLoad(prop: boolean) {
		setLoading(prop);
	}

	

	useEffect(() => {
		if (router.query.id !== prevPath.current) {
			prevPath.current = router.query.id;
			unmountingPremium.current = false;
		}
		console.log("ref", unmountingPremium.current);

		if (!unmountingPremium.current) {
			checkPremium({
				variables: { token: "" }, // token will be auto filled in Apollo middleware
			});
		}
		return () => {
			unmountingPremium.current = true;
			console.log("premiumcheck unmount");
		};
	}, [checkPremium, router.query.id]);

	useEffect(() => {
		console.log("user", premiumUser);
		console.log("fallback", router.isFallback);
		if (!router.isFallback && premiumUser) {
			return setCurrentServer(movieData.vipServer1);
		} else if (!router.isFallback && !premiumUser) {
			return setCurrentServer(movieData.freeServer1);
		} else {
			return;
		}
	}, [router.isFallback, premiumUser, movieData?.vipServer1, movieData?.freeServer1]);

	return (
		<Container className={classes.root}>
			{(router.isFallback || !data || checkPremiumLoading) && <h2>loading</h2>}
			{!router.isFallback && data && !checkPremiumLoading && (
				<Grid container spacing={2}>
					<Grid item sm={8} xs={12}>
						<Iframe
							currentServer={currentServer}
							loading={loading}
							setLoading={iframeLoad}
							id={id}
							freeServer1={movieData.freeServer1}
							freeServer2={movieData.freeServer2}
							vipServer1={movieData.vipServer1}
							vipServer2={movieData.vipServer2}
							changeServer={changeServer}
							premiumUser={premiumUser}
						/>
						<Divider />
						<MovieInfo
							name={movieData.name}
							date={movieData.date}
							body={movieData.body}
							genres={movieData.genres}
						/>
						<Divider />
					</Grid>
					<Grid item sm={4} xs={12}>
						<RelatedMovies data={relatedMoviesData} loading={relatedMoviesLoading} />
					</Grid>
				</Grid>
			)}

			<DetectOtherLogin />
		</Container>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params;

	const { data }: GetMovieQueryResult = await client.query({
		query: GetMovieDocument,
		variables: { uuid: id },
	});

	return {
		props: {
			data,
		},
	};
};
