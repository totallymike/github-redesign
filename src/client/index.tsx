import ApolloClient, { Operation } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { loader } from 'graphql.macro';
import { resolvers } from './resolvers';

const typeDefs = loader('../schema/local.schema.graphql');

const token = localStorage.getItem('token');

const cache = new InMemoryCache();


export interface AppContext {
  cache: InMemoryCache;
}
// @ts-ignore
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache,
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        ...operation.getContext().headers,
        Authorization: `bearer ${token}`,
      },
    });
  },
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    token,
    isLoggedIn: !!token,
  }
});

export { client };
