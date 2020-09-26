import { gql, IResolvers } from 'apollo-server'
import {
  schema as AuthorTypes,
  resolvers as AuthorResolvers,
} from '../modules/authors'
import {
  schema as BookTypes,
  resolvers as BookResolvers,
} from '../modules/books'

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

export const typeDefs = [types, AuthorTypes, BookTypes]

export const resolvers: IResolvers = {
  Query: {
    hello: () => `Hello World!`,

    ...AuthorResolvers.Query,
    ...BookResolvers.Query,
  },

  Author: {
    ...AuthorResolvers.Author,
  },
}
