const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.commontown.com/",
    title: "CommonTown",
    author: `@gibsernkoh`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-167863139-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/manifest/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "~components": path.resolve(__dirname, 'src/components'),
          "~layout": path.resolve(__dirname, 'src/layout'),
          "~images": path.resolve(__dirname, 'src/images'),
          "~content": path.resolve(__dirname, 'src/content'),
          "~styled": path.resolve(__dirname, 'src/styled.js'),
        },
      }
    }
  ],
};
