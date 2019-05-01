import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { JssProvider, ThemeProvider } from 'react-jss';
import { RouterProvider } from 'react-router5';
import createRouter from 'router5';
import './App.css';
import { client } from './client';
import { Header } from './components/Header';
import { routes } from './routes';
import { theme } from './styles/theme';

const jss = createJss();
jss.setup(preset());

const router = createRouter(routes);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <JssProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router}>
              <Header />
              <div className="App" />
            </RouterProvider>
          </ThemeProvider>
        </JssProvider>
      </ApolloProvider>
    );
  }
}

export default App;
