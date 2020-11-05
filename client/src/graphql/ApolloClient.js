import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: `http://localhost:${process.env.PORT}/graphql`
});

export default client;