const {
  ANALYZE,
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.google.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
const disableBuildAnalysis = ANALYZE !== 'true';

module.exports = {
  plugins: [
    {
      options: {
        background_color: '#FAFAFA',
        display: 'minimal-ui',
        name: 'Delivery Slots',
        short_name: 'Delivery Slots',
        start_url: '/',
        theme_color: '#0dae26',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
      resolve: 'gatsby-plugin-material-ui',
    },
    'gatsby-plugin-react-helmet',
    {
      options: {
        rule: {
          include: /assets/,
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        env: {
          'branch-deploy': {
            host: null,
            policy: [{ disallow: ['/'], userAgent: '*' }],
            sitemap: null,
          },
          'deploy-preview': {
            host: null,
            policy: [{ disallow: ['/'], userAgent: '*' }],
            sitemap: null,
          },
          production: {
            policy: [{ userAgent: '*' }],
          },
        },
        resolveEnv: () => NETLIFY_ENV,
      },
      resolve: 'gatsby-plugin-robots-txt',
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      options: {
        defaultSizes: 'gzip',
        disable: disableBuildAnalysis,
      },
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    },
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    {
      options: {
        headers: {
          '/**/*.html': ['cache-control: public, max-age=0, must-revalidate'],
          '/*.css': ['cache-control: public, max-age=31536000, immutable'],
          '/*.js': ['cache-control: public, max-age=31536000, immutable'],
          '/public/page-data/**/*.json': [
            'cache-control: public, max-age=0, must-revalidate',
          ],
          '/static/*': ['cache-control: public, max-age=31536000, immutable'],
          '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
        },
      },
      resolve: 'gatsby-plugin-netlify',
    },
    'gatsby-plugin-remove-trailing-slashes',
  ],
  siteMetadata: {
    author: '@mlenser',
    description: 'Delivery Slots',
    siteUrl,
    title: 'Delivery Slots',
  },
};
