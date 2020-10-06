import { Resolvers } from '../../types'
import { Author, CreateAuthor } from './types'
import {
  resolveConnectionFromArray,
  mutateAndGetPayload,
} from '../../resolve-patterns'

export const resolvers: Resolvers = {
  Query: {
    authors: (_source, args, { dataSources }) => {
      return resolveConnectionFromArray(dataSources.Author.loader, args)
    },
  },

  Author: {
    books: (author: Author, _args, { dataSources }) => {
      return resolveConnectionFromArray(dataSources.Book.loader, {
        author: author.id,
      })
    },
  },

  Mutation: {
    createAuthor: (_source, args: { input: CreateAuthor }, { dataSources }) => {
      return mutateAndGetPayload(dataSources.Author.create, args.input)
    },
  },
}
