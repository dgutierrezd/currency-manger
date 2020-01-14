import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './Apollo/client';
import Main from './components/Main';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}
