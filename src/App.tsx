import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { JssProvider, ThemeProvider } from 'react-jss';
import './App.css';
import { client } from './client';
import { Header } from './components/Header';
import { theme } from './styles/theme';

const jss = createJss()
jss.setup(preset());

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <JssProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Header />
            <div className="App" />
          </ThemeProvider>
        </JssProvider>
      </ApolloProvider>
    );
  }
}

export default App;
