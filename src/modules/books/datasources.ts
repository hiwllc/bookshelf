import { fromGlobalID, ID, ArgumentsQuery } from '../../resolve-patterns'
import { books } from './data'
import { Book, CreateBook } from './types'

interface LoaderQuery extends ArgumentsQuery {
  author?: ID
  order?: 'ASC' | 'DESC'
}

export function load(bid: ID) {
  const book = books.find((book) => book.id === bid)

  if (!book) {
    return null
  }

  return new Book(book)
}

function filterByAuthor(list: Book[], author?: string) {
  if (!author) {
    return list
  }

  const { id } = fromGlobalID(author)

  return list.filter(({ author }) => author === id)
}

function sortBooks(list: Book[], order?: 'ASC' | 'DESC') {
  if (!order) {
    return list
  }

  if (order === 'ASC') {
    return list.sort((a, b) => a.title.localeCompare(b.title))
  }

  return list.sort((a, b) => b.title.localeCompare(a.title))
}

function mapToBook(list: Book[]) {
  return list.map((item) => new Book(item))
}

export function loader(query?: LoaderQuery) {
  return mapToBook(
    sortBooks(filterByAuthor(books, query?.author), query?.order)
  )
}

export function create(book: CreateBook) {
  const id = Number(books[books.length - 1].id) + 1
  return new Book({ ...book, id: id.toString() })
}
