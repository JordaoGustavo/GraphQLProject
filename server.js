const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const mongoose = require("mongoose");

// var { buildSchema } = require("graphql");

// const contaTypedef = path.resolve(__dirname, "../src/Conta.graphql");
// const contaQueryTypedef = path.resolve(__dirname, "../src/Query/Conta.graphql");
// const contaMutationTypedef = path.resolve(
//   __dirname,
//   "../src/Mutation/Conta.graphql"
// );

const resolvers = require("./src/Resolvers/resolvers.js");

// const schema = buildSchema([
//   contaTypedef,
//   contaQueryTypedef,
//   contaMutationTypedef
// ]);

mongoose.connect("mongodb://localhost:27017/GraphQLApi", {
  useNewUrlParser: true
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "./src/TypeDefs/schema.graphql"),
  resolvers
});

server.start(() => {
  console.log("Tamo no Ar");
});
