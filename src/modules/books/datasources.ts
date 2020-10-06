import { fromGlobalID, ID, ArgumentsQuery } from '../../resolve-patterns'
import { books } from './data'
import { Book, CreateBook } from './types'

interface LoaderQuery extends ArgumentsQuery {
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
    const { id } = fromGlobalID(query.author)

    return books
      .filter((book) => book.author === id)
      .map((book) => new Book(book))
  }

  return books.map((book) => new Book(book))
}

export function create(book: CreateBook) {
  const id = Number(books[books.length - 1].id) + 1
  return new Book({ ...book, id: id.toString() })
}
