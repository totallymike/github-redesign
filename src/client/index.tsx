import ApolloClient, { Operation } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql, loader } from 'graphql.macro';

const typeDefs = loader('../schema/local.schema.graphql');

const token = localStorage.getItem('token');

const cache = new InMemoryCache();

const resolvers = {
  Query: {
    isLoggedIn: (_whatever: any, _otherWhatever: any, { cache }: any) => {
      const { isLoggedIn } = cache.readQuery({ query: gql`query IsLoggedIn { isLoggedIn @client }`});
      return isLoggedIn;
    }
  }
}
// @ts-ignore
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
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
    isLoggedIn: !!token,
  }
});

export { client };
