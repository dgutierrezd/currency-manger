const { gql } = require('apollo-server-express');

module.exports = gql`
    type Gasto {
        id: Int!
        name: String!
        valor: Int!
        date: String!
        type: String!
    }

    type Query {
        allGastos: [Gasto]
        getGasto(id: Int!): Gasto
        getEgresses: [Gasto]
        getEntries: [Gasto]
    }

    type Mutation {
        createGasto(
            name: String!, 
            valor: Int!,
            date: String!,
            type: String!
        ): Gasto
        updateGasto(
            id: Int!,
            name: String!,
            valor: Int!
            date: String!,
            type: String!
        ): [Int!]!
        deleteGasto(
            id: Int!
        ): Int
    }
`;