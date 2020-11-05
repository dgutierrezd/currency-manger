const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const path = require("path");
const cors = require("cors");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const models = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

const app = express();
app.use(cors());
server.applyMiddleware({ app });

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || '8080';

app.listen(port, () => {
  console.log("App is running on port " + port);
});

/* app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
); */
