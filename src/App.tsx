import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.svg';
import { client } from './client';
import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
