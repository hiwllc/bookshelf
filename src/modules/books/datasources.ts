import { fromGlobalID } from '../../node'
import { ID } from '../../types'
import { books } from './data'

interface LoaderQuery {
  author?: ID
}

export function load(bid: ID) {
  return books.find((book) => book.id === bid)
}

export function loader(query?: LoaderQuery) {
  // this query is called in author.books
  if (query?.author) {
    const [id] = fromGlobalID(query.author)
    return books.filter((book) => book.author === id)
  }

  return books
}
