/** @type {import('next').NextConfig} */
module.exports = {
   images: {
      domains: ['cdn.themovieseries.net', 'm.media-amazon.com'],
   },
   env: {
      API_URL: process.env.API_URL,
      MEILISEARCH_ENDPOINT: process.env.MEILISEARCH_ENDPOINT,
   },
}
