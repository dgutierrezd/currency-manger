import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "http://localhost:4023/graphql"
});

export default client;