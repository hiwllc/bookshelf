import { gql } from 'apollo-server'

export const schema = gql`
  type Author implements Node {
    id: ID!
    name: String
    books: [Book]
  }

  extend type Query {
    author(id: ID!): Author
    authors: [Author]
  }

  input AuthorInput {
    name: String
  }

  extend type Mutation {
    createAuthor(input: AuthorInput!): Author
  }
`
