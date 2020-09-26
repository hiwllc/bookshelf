import { gql } from 'apollo-server'

export const schema = gql`
  type Book implements Node {
    id: ID!
    title: String
    author: Author
  }

  extend type Query {
    book(id: ID!): Book
    books: [Book]
  }
`
