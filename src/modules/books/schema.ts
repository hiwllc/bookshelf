import { gql } from 'apollo-server'

export const schema = gql`
  enum ORDER {
    DESC
    ASC
  }

  type Book implements Node {
    id: ID!
    title: String
    author: AuthorEdge
  }

  type BookEdge {
    cursor: String
    node: Book
  }

  type BookConnection {
    edges: [BookEdge]
  }

  extend type Query {
    books(
      after: String
      first: Int
      before: String
      last: Int
      order: ORDER
    ): BookConnection
  }

  input createBookInput {
    title: String!
    author: ID!
    clientMutationId: String
  }

  type BookPaylod {
    book: Book
    clientMutationId: String
  }

  extend type Mutation {
    createBook(input: createBookInput!): BookPaylod
  }
`
