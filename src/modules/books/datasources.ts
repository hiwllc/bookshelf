import { ID } from '../../types'
import { books } from './data'

export function load(bid: ID) {
  return books.find((book) => book.id === bid)
}

export function loader() {
  return books
}
