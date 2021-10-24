require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    // https://stackoverflow.com/a/65980746/6600216
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WP_GRAPHQL_API, // How do I handle you on github?
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
