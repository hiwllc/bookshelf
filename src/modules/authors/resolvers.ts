import { Resolvers } from '../../types'
import { Author } from './types'

export const resolvers: Resolvers = {
  Query: {
    author: (_source, { id }: Author, { dataSources }) => {
      return dataSources.Author.load(id)
    },
    authors: (_source, _args, { dataSources }) => {
      return dataSources.Author.loader()
    },
  },

  Author: {
    books: (author: Author, _args, { dataSources }) => {
      return dataSources.Book.loader({ author: author.id })
    },
  },
}
