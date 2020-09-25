import { gql } from 'apollo-server'

export interface HelloData {
  data: {
    hello: string
  }
}

export const typeDefs = gql`
  type Query {
    hello: String
  }
`

export const resolvers = {
  Query: {
    hello: () => `Hello World!`,
  },
}
