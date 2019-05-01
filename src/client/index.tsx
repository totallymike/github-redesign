import ApolloClient, { Operation } from 'apollo-boost';

const token = localStorage.getItem('token');

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
});

export { client };
