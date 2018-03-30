import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';

function createApolloClient({ ssrMode }) {
  return new ApolloClient({
    ssrMode,
    link: createHttpLink({
      uri: 'http://localhost:3000/graphql-alpha',
      credentials: 'same-origin',
      headers: {
        "meteor-login-token": 'UVlG_13CGxxAp1FA6NdHF6Z31BHb3t4UNfBA0I2Iuvx'
      },
      fetch,
    }),
    cache: ssrMode
      ? new InMemoryCache()
      : new InMemoryCache().restore(window.__APOLLO_STATE__),
  });
}

export default createApolloClient;
