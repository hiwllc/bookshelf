import { gql, IResolvers } from 'apollo-server'
import { fromGlobalID } from '../node'

import {
  schema as AuthorTypes,
  resolvers as AuthorResolvers,
} from '../modules/authors'
import {
  schema as BookTypes,
  resolvers as BookResolvers,
} from '../modules/books'

const types = gql`
  interface Node {
    id: ID!
  }

  type Query {
    node(id: ID!): Node
  }

  type Mutation {
    _root: String
  }
`

export const typeDefs = [types, AuthorTypes, BookTypes]

export const resolvers: IResolvers = {
  Node: {
    __resolveType(type: Record<string, unknown>) {
      // this needs to resolve the TypeName
      return type.constructor.name
    },
  },

  Query: {
    node: (_source, { id }, { dataSources }) => {
      const [node, typename] = fromGlobalID(id)
      return dataSources[typename].load(node)
    },

    ...AuthorResolvers.Query,
    ...BookResolvers.Query,
  },

  Mutation: {
    ...AuthorResolvers.Mutation,
    ...BookResolvers.Mutation,
  },

  Author: {
    ...AuthorResolvers.Author,
  },

  Book: {
    ...BookResolvers.Book,
  },
}
