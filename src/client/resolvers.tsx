import { Resolvers } from 'apollo-client';
import { gql } from 'graphql.macro';

const query = gql`
  query IsLoggedIn {
    isLoggedIn @client
    token @client
  }
`;

export const resolvers: Resolvers = {
  Query: {
    isLoggedIn: (_whatever, _otherWhatever, { cache }) => {
      // Get around the fact that `readQuery` may return null by cheating.
      const { isLoggedIn } = (cache.readQuery({ query }) || { isLoggedIn: false });
      return isLoggedIn;
    }
  },
  Mutation: {
    login: (_, { token }, { cache }) => {
      localStorage.setItem('token', token);
      cache.writeQuery({ query , data: { token, isLoggedIn: true } });
      return token;
    }
  }
}