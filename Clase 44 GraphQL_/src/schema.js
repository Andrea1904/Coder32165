import { createSchema } from "graphql-yoga";

export const schema =createSchema ({

  typeDefs: /* GraphQL*/ `
    type Query {
    id: ID!
    titulo: String,
    cuerpo:String
   } `,
   resolvers:{
    Query:{
      titulo: ()=> "Hola Coders"
    }
   }
})