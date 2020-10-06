import { gql } from 'apollo-server'

export const schema = gql`
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
    # after pega todos depois de after
    # first pega os primeiros X da lista
    # before pega todos antes
    # last pega os ultimes X da lista
    books(after: String, first: Int, before: String, last: Int): BookConnection
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
