const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Croke`,
    description: `Security, Electronics and Crazy projects`,
    author: `Jorge Cuadrado Saez (@Coke727)`,
    keywords: ['security', 'open source', 'development'],
    siteUrl: 'https://www.croke.es',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-136097849-1',
        head: true,
        anonymize: true,
        respectDNT: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-resolve-src',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/publications`,
        name: `publications`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `static`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout/layout.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/translations`,
        name: `translations`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gatsby-config.js`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
  ],
};
//'gatsby-remark-code-titles',
//`gatsby-remark-copy-linked-files`,
//`gatsby-remark-smartypants`,
