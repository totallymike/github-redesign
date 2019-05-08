import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'graphql.macro';
import { Header } from './Header';
import { LoggedOut } from './LoggedOut';

export const ROOT_QUERY = gql`
  query RootQuery {
    isLoggedIn @client
  }
`;

interface MainData {
  isLoggedIn: boolean;
}

export const Main: React.FunctionComponent = () => {
  return (
    <Query<MainData> query={ROOT_QUERY}>
      {({ loading, error, data }) => {
        if (loading || error || data === undefined) {
          return <p>Not ready!</p>;
        }

        if (!data.isLoggedIn) {
          return <LoggedOut />;
        }

        return (
          <React.Fragment>
            <Header />
            <div className="App" />
          </React.Fragment>
        );
      }}
    </Query>
  )
}