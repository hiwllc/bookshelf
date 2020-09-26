import { Context, Resolvers } from '../../types'
import { Book } from '../books/types'
import { Author } from './types'

export interface AuthorResolvers extends Resolvers {
  Author: {
    books: (source: Author, args: any, context: Context) => Book[]
  }
}

export const resolvers: AuthorResolvers = {
  Query: {
    author: (_source, { id }: Author, { dataSources }) => {
      return dataSources.Author.load(id)
    },
    authors: (_source, _args, { dataSources }) => {
      return dataSources.Author.loader()
    },
  },

  Author: {
    books: ({ id }, _args, { dataSources }) => {
      return dataSources.Book.loader({ author: id })
    },
  },
}
