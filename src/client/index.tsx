import ApolloClient, { Operation } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql, loader } from 'graphql.macro';
// For now this must be a separate file.
import { Resolvers } from '../generated/resolvers';

const typeDefs = loader('../schema/local.schema.graphql');

const token = localStorage.getItem('token');

const cache = new InMemoryCache();

const query = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;

export interface AppContext {
  cache: InMemoryCache;
}

const resolvers: Resolvers = {
  Query: {
    isLoggedIn: (_whatever, _otherWhatever, { cache }) => {
      // Get around the fact that `readQuery` may return null by cheating.
      const { isLoggedIn } = (cache.readQuery({ query }) || { isLoggedIn: false });
      return isLoggedIn;
    }
  }
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
