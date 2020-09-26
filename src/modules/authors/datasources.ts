import { ID } from '../../types'
import { authors } from './data'
import { Author } from './types'

export function load(aid: ID) {
  const author = authors.find((author) => author.id === aid)

  if (!author) {
    return null
  }

  return new Author(author)
}

export function loader() {
  return authors.map((author) => new Author(author))
}
