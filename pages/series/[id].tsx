import { useState, useEffect, useRef } from "react";
import { initializeApollo } from "@apollo/index";
import { GetStaticPaths, GetStaticProps } from "next";
import {
	GetSeriesDocument,
	GetSeriesQuery,
	GetSeriesQueryResult,
	usePremiumUserLazyQuery,
} from "@graphgen";
import { useAuth } from "@contexts/AuthContext";
import { useRouter, NextRouter } from "next/router";
import { gqlInvalidToken } from "@apollo/apolloReactiveVar";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "@styles/MoviePage";
import { Container, Grid, Divider } from "@material-ui/core";
import DetectOtherLogin from "@components/modals/detectOtherLogin";
import MovieInfo from "@components/movies/MovieInfo";
import Iframe from "@components/movies/Iframe";
import Episodes from "@components/movies/Episodes";

const client = initializeApollo();

const useStyles = makeStyles(styles);
interface PageProps {
	data: GetSeriesQuery;
}

export default function SeriesPage(props: PageProps) {
	const [checkPremium, { data, loading: checkPremiumLoading }] = usePremiumUserLazyQuery({
		fetchPolicy: "network-only",
		ssr: false,
	});
	const classes = useStyles();
	const router: NextRouter = useRouter();
	const [currentServer, setCurrentServer] = useState<string | null>(null);
	const prevPath = useRef(router.query.id);
	const [loading, setLoading] = useState<boolean>(true);
	const { id } = router.query;
	const serverResult = props.data;
	const seriesData = serverResult?.getMovie;
	const premiumUser: boolean = data?.premiumCheck?.premiumUser || null;
	const unmountingPremium = useRef(false);

	const [currentSeason, setCurrentSeason] = useState<number>(1);
	const [currentEpisode, setCurrentEpisode] = useState<number>(1);
	const seasons = seriesData?.tv_series[0].season;
	const servers = seasons?.[currentSeason - 1].episodes[currentEpisode - 1];

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
			return setCurrentServer(servers.vipServer1);
		} else if (!router.isFallback && !premiumUser) {
			return setCurrentServer(servers.freeServer1);
		} else {
			return;
		}
	}, [router.isFallback, premiumUser, servers?.vipServer1, servers?.freeServer1]);

	const handleSelect = (season: number, id: number) => {
		setCurrentSeason(season);
		setCurrentEpisode(id);
	};

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
							freeServer1={servers.freeServer1}
							freeServer2={servers.freeServer2}
							vipServer1={servers.vipServer1}
							vipServer2={servers.vipServer2}
							changeServer={changeServer}
							premiumUser={premiumUser}
						/>
						<Divider />
						<MovieInfo
							name={seriesData.name}
							date={seriesData.date}
							body={seriesData.body}
							genres={seriesData.genres}
						/>
						<Divider />
					</Grid>
					<Grid item sm={4} xs={12}>
						<Episodes
							seasons={seasons}
							currentSeason={currentSeason}
							currentEpisode={currentEpisode}
							handleSelect={handleSelect}
						/>
					</Grid>
				</Grid>
			)}

			<DetectOtherLogin/>
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

	const { data }: GetSeriesQueryResult = await client.query({
		query: GetSeriesDocument,
		variables: { uuid: id },
	});

	return {
		props: { data },
	};
};
