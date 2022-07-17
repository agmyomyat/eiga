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
      DINGER_MERCHANT_REDIRECT_URL: process.env.DINGER_MERCHANT_REDIRECT_URL,
      GOOGLE_PROVIDER_CLIENT_ID: process.env.GOOGLE_PROVIDER_CLIENT_ID,
   },
}
