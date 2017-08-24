import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import AppWithNavigationState from './navigation';
import apolloClient from './apolloClient';
import store from './store';

class App extends Component {

  render() {
    return (
      <ApolloProvider client={apolloClient} store={store}>
        <AppWithNavigationState />
      </ApolloProvider>
    );
  }
}

export default App;
