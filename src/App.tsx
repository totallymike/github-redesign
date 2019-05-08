import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { JssProvider, ThemeProvider } from 'react-jss';
import { RouterProvider } from 'react-router5';
import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import loggerPlugin from 'router5-plugin-logger';
import './App.css';
import { client } from './client';
import { routes } from './routes';
import { theme } from './styles/theme';
import { Main } from './components/Main';

const jss = createJss();
jss.setup(preset());

const router = createRouter(routes, { defaultRoute: 'home' });
router.usePlugin(browserPlugin());
router.usePlugin(loggerPlugin);

router.start();

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <JssProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router}>
              <Main />
            </RouterProvider>
          </ThemeProvider>
        </JssProvider>
      </ApolloProvider>
    );
  }
}

export default App;
