require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://shop-darkly.now.sh',
    title: 'Ship Faster with Confidence! Get your LaunchDarkly swag here!',
    social: {
      twitter: 'launchdarkly',
    },
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dark Store',
        short_name: 'Dark Store',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'static/android-chrome-512x512.png',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'shoplaunchdarkly',
        accessToken: '40396041283b1c78647c92daff6f30cd',
        verbose: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://shop-darkly.now.sh',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', disallow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-157607575-1',
        respectDNT: false,
      },
    },
  ],
}
