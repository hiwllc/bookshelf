import { Book } from '../books/types'
import { ID, globalID } from '../../resolve-patterns'

export class Author {
  id: ID
  name: string
  books?: Book[]

  constructor(author: Author) {
    this.id = globalID(author.id, this)
    this.name = author.name
  }
}

export interface CreateAuthor extends Omit<Author, 'id'> {
  clientMutationId?: string
}
