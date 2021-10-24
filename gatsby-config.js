// gatsby-config.js

module.exports = {
  flags: {
    // https://stackoverflow.com/a/65980746/6600216
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://3.135.241.225/graphql`, // This should be extracted to an environment variable
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
