import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import { Container } from 'react-bootstrap';
import Currencies from './Currencies';

const Main = props => {
    return (  
        <Container className="justify-content-center text-center" style={{margin: "auto"}}>
            <h1>Currency Manager</h1>
            <Currencies data={props.data} />
        </Container>
    );
}

const getCurrencies = gql`
  {
    allGastos {
        id
        name
        valor
        type
    }
  }   
`;
 
export default graphql(getCurrencies)(Main);