import { ApolloServer } from "@apollo/server"; 
import {startStandaloneServer} from "@apollo/server/standalone"
import { typeDefs } from "./types.js";
import { resolvers } from "./resolvers.js";

const server = new ApolloServer ({
  // typedefs and resolvers
  typeDefs,
  resolvers
})

const url = await startStandaloneServer(server,{listen:3000})

