import { gql } from 'apollo-server'

export const schema = gql`
  type Author implements Node {
    id: ID!
    name: String
    books: BookConnection
  }

  type AuthorEdge {
    cursor: String
    node: Author
  }

  type AuthorConnection {
    edges: [AuthorEdge]
  }

  extend type Query {
    authors(
      after: String
      first: Int
      before: String
      last: Int
    ): AuthorConnection
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
