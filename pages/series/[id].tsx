import { initializeApollo } from '@apollo/index';
import { GetStaticPaths, GetStaticProps } from 'next';

const client = initializeApollo();

export default function SeriesPage() {
   return <div></div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [],
      fallback: true,
   };
};
