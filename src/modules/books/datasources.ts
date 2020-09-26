import { fromGlobalID } from '../../node'
import { ID } from '../../types'
import { books } from './data'
import { Book } from './types'

interface LoaderQuery {
  author?: ID
}

export function load(bid: ID) {
  const book = books.find((book) => book.id === bid)

  if (!book) {
    return null
  }

  return new Book(book)
}

export function loader(query?: LoaderQuery) {
  // this query is called in author.books
  if (query?.author) {
    const [id] = fromGlobalID(query.author)
    return books
      .filter((book) => book.author === id)
      .map((book) => new Book(book))
  }

  return books.map((book) => new Book(book))
}
