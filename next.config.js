/** @type {import('next').NextConfig} */
module.exports = {
   swcMinify: true,
   images: {
      domains: [
         'cdn.themovieseries.net',
         'm.media-amazon.com',
         'plyr.eiga.sbs',
         'tn.eiga.sbs',
      ],
   },
   env: {
      API_URL: process.env.API_URL,
      MEILISEARCH_ENDPOINT: process.env.MEILISEARCH_ENDPOINT,
      MEILISEARCH_API_KEY: process.env.MEILI_API_KEY,
   },
}
