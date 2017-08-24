import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'http://url-from-your-api/graphql',
});
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    const token = 'token';
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  },
}]);

const client = new ApolloClient({
  networkInterface,
});

export default client;

export const apolloReducer = client.reducer();
