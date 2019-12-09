require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://store.launchdarkly.com',
    title: 'Ship Faster with Confidence! Get your LaunchDarkly swag here!',
    description:
      'Do you like to launch in the dark? All DARK everything? Hitting #trajectory? Have we got the swag store for you!',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/'),
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'shoplaunchdarkly',
        accessToken: '40396041283b1c78647c92daff6f30cd',
        verbose: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'LaunchDarkly Store', // TODO
        short_name: 'LaunchDarkly Store', // TODO
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/android-chrome-512x512.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-132917172-2', // TODO SWAP OUT
        respectDNT: false,
      },
    },
  ],
};
