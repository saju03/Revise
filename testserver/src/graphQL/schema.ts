import { buildSchema, GraphQLSchema } from 'graphql';

export const schema: GraphQLSchema = buildSchema(`#graphql
    

    type User {
    name:String!
    id:Int

    
    }


    type Query {
    getUser(id:Int):User
    }


    input userInput{
        name:String
        id:Int
    }

type Mutation {
    createUser(input:userInput):User
}

    `);
