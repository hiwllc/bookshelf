import { Resolvers } from '../../types'
import { Book, CreateBook } from './types'
import {
  resolveNodeFromArray,
  resolveConnectionFromArray,
  mutateAndGetPayload,
} from '../../resolve-patterns'

export const resolvers: Resolvers = {
  Query: {
    books: (_source, args, { dataSources }) => {
      return resolveConnectionFromArray(dataSources.Book.loader, args)
    },
  },

  Book: {
    author: (book: Book, _args, { dataSources }) => {
      return resolveNodeFromArray(dataSources.Author.load, book.author)
    },
  },

  Mutation: {
    createBook: (_source, args: { input: CreateBook }, { dataSources }) => {
      return mutateAndGetPayload(dataSources.Book.create, args.input)
    },
  },
}
