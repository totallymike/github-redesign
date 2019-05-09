import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { loader } from 'graphql.macro';
import { resolvers } from './resolvers';

const typeDefs = loader('../schema/local.schema.graphql');

const token = localStorage.getItem('token');

const cache = new InMemoryCache();

export interface AppContext {
  cache: InMemoryCache;
}

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  // Return headers to context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    authLink,
    new HttpLink({
      uri: 'https://api.github.com/graphql',
    })
  ]),
  resolvers,
  typeDefs,
});

cache.writeData({
  data: {
    token,
    isLoggedIn: !!token,
  }
});

export { client };

