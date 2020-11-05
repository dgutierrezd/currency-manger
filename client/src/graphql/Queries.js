import { gql } from "apollo-boost";

export const GET_CURRENCIES = gql`
  {
    allGastos {
      id
      name
      valor
      date
      type
    }
  }
`;

export const GET_CURRENCY = gql`
  query getGasto($id: Int){
    getGasto(id: $id) {
      name
      valor
      date
      type
    }
  }
`;
