import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './schema/root'

export const server = new ApolloServer({
  typeDefs,
  resolvers,
})
