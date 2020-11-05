import { gql } from "apollo-boost";

export const DELETE_MUTATION = gql`
  mutation DeleteMutation($id: Int!) {
    deleteGasto(id: $id)
  }
`;
