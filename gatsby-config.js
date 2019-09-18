module.exports = {
  siteMetadata: {
    title: 'AIA Singapore',
    description: 'Frontend Web Skeleton',
    author: '@aia',
    menuLinks: [
      { name: 'our product', link: '/' },
      { name: 'life matters', link: '/' },
      { name: 'about aia', link: '/' },
      { name: 'help & support', link: '/' },
      { name: 'my aia', link: '/' },
    ],
    pathWithBackButton: [
      '/PA100/faqs',
      '/PA100/faqs/',
      '/PA100/terms-of-use',
      '/PA100/terms-of-use/',
      '/product/PA100/funnel#application',
      '/product/PA100/funnel/#application',
    ]
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-routes',
      options: {
        path: `${__dirname}/src/routes/index.js`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'aia-web-skeleton',
        short_name: 'web-skeleton',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    // 'gatsby-plugin-offline',
  ],
};
