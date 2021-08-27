import { useEffect, useState } from 'react';
import { useGetMovieLazyQuery } from '../../graphgen/graphql';
import { NextRouter, useRouter } from 'next/router';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
export default function MoviePage() {
   const [getMovie, { data }] = useGetMovieLazyQuery({
      fetchPolicy: 'network-only',
   });
   const [iframe, setIframe] = useState(true)
   const router: NextRouter = useRouter();
   const { id } = router.query;
   console.log(id);
   useEffect(() => {
      if (id && !data) {
         getMovie({
            variables: { uuid: id as string },
         });
         console.log('data');
      }
   }, [data, getMovie, id]);

   return (
      <div>
         {router.isFallback || (!data && <h2>loading</h2>)}
         {data && 
         <Container maxWidth='md'>
         <LoadingIframe open={iframe}/>
            <iframe onLoad={()=>setIframe(false)} width="720" height="360" frameBorder="0" src={data.getMovie.server1}
         scrolling="no" allowFullScreen></iframe>
         </Container>
}
      </div>
   );
}

export async function getStaticPaths() {
   return {
      paths: [],
      fallback: true,
   };
}

export async function getStaticProps() {
   // const { id } = params;

   // await apolloClient.query({
   //    query: GET_MOVIE,
   //    variables: { id },
   // });

   return {
      props: {
         greeting: 'hello',
      },
   };
}



interface ILoading {
	open: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
     
    backdrop: {
       zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export const LoadingIframe:React.FC<ILoading>=({open})=>{
	const classes = useStyles();
	 return (
    <div>
       {open&&
     <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop> 
}
    </div>
  );
}