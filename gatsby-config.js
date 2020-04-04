require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.dockercreate.com/',
    title: `Docker Create`,
    description: `Create your Dockerfile .`,
    author: `@brpadilha and @fernandoors`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-antd",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400,400i,500,700`,
          `source sans pro\:300,400,400i,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Docker Create - Using best practices in your docker projects`,
        short_name: `Docker Create`,
        start_url: `https://www.dockercreate.com/`,
        background_color: `#3099EA`,
        theme_color: `#3099EA`,
        display: `minimal-ui`,
        url: "https://www.dockercreate.com/",
        image: "/images/docker-create-icon.png",
        icon: `src/images/docker-create-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5085086136982290`
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.API_KEY ,
          authDomain: process.env.AUTH_DOMAIN ,
          databaseURL: process.env.DATABASE_URL ,
          projectId: process.env.PROJECT_ID ,
          storageBucket: process.env.STORAGE_BUCKET ,
          messagingSenderId: process.env.MESSAGING_SENDER_ID ,
          appId: process.env.APP_ID,
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-advanced-sitemap`,
  ],
}
