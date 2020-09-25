import { ID } from '../../types'
import { authors } from './data'

export function load(aid: ID) {
  return authors.find((author) => author.id === aid)
}

export function loader() {
  return authors
}
