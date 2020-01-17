import React from 'react';
import { gql } from 'apollo-boost';
import { graphql, Query } from 'react-apollo';

import { Container } from 'react-bootstrap';
import Currencies from './Currencies';

const Main = () => {
    return (  
      <Container className="justify-content-center text-center" style={{margin: "auto"}}>
        <h1>Currency Manager</h1>
        <Currencies />
      </Container>
    );
}
 
export default Main;