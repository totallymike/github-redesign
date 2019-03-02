import React, { Component } from 'react';
import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.svg';
import { client } from './client';
import './App.css';
import { JssProvider, ThemeProvider } from 'react-jss';
import { theme } from './styles/theme';
import { Header } from './components/Header';

const jss = createJss()
jss.setup(preset());

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <JssProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Header />
            <div className="App">
            </div>
          </ThemeProvider>
        </JssProvider>
      </ApolloProvider>
    );
  }
}

export default App;
