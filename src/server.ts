import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './schema/root'
import { dataSources } from './schema/datasources'

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  // enable graphql playgroun in production
  introspection: true,
  playground: true,
})
