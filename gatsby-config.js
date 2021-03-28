require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
   siteMetadata: {
      title: `CrypVis`,
      description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
      author: `@gatsbyjs`,
   },
   plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-styled-components`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/open-source.png`, // This path is relative to the root of the site.
         },
      },
      `gatsby-plugin-gatsby-cloud`,
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
      {
         resolve: 'gatsby-plugin-firebase',
         options: {
            credentials: {
               apiKey: process.env.GATSBY_API_KEY,
               authDomain: process.env.GATSBY_AUTH_DOMAIN,
               projectId: process.env.GATSBY_PROJECT_ID,
               storageBucket: process.env.GATSBY_STORAGE_BUCKET,
               messagingSenderId: process.env.GATBY_MESSAGING_SENDER_I,
               appId: process.env.GATSBY_APP_ID,
            }
         }
      },
   ],
}
