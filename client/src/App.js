import React from 'react';
import Main from './components/Main';

import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/ApolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
