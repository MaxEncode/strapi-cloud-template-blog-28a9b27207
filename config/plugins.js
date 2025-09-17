module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true, // only for dev
      // other options...
      subscriptions: false,
      maxLimit: -1,
      apolloServer: {},
      v4CompatibilityMode: process.env.STRAPI_GRAPHQL_V4_COMPATIBILITY_MODE ?? false,
    },
  },
});
