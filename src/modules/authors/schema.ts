import { gql } from 'apollo-server'

export const schema = gql`
  type Author implements Node {
    id: ID!
    name: String
    books: BookConnection
  }

  type AuthorEdge {
    node: Author
  }

  type AuthorConnection {
    edges: [AuthorEdge]
  }

  extend type Query {
    authors: AuthorConnection
  }

  input createAuthorInput {
    name: String
    clientMutationId: String
  }

  type AuthorPayload {
    author: Author
    clientMutationId: String
  }

  extend type Mutation {
    createAuthor(input: createAuthorInput!): AuthorPayload
  }
`
