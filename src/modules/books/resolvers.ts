import { Resolvers } from '../../types'
import { Book } from './types'

export const resolvers: Resolvers = {
  Query: {
    book: (_source, { id }: Book, { dataSources }) => {
      return dataSources.Book.load(id)
    },
    books: (_source, _args, { dataSources }) => {
      return dataSources.Book.loader()
    },
  },

  Book: {
    author: (book: Book, _args, { dataSources }) => {
      return dataSources.Author.load(book?.author)
    },
  },
}
