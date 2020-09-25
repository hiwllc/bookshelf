import { gql } from 'apollo-server'
import {
  schema as AuthorTypes,
  resolvers as AuthorResolvers,
} from '../modules/authors'

export interface HelloData {
  data: {
    hello: string
  }
}

const types = gql`
  type Query {
    hello: String
  }
`

export const typeDefs = [types, AuthorTypes]

export const resolvers = {
  Query: {
    hello: () => `Hello World!`,

    ...AuthorResolvers.Query,
  },
}
