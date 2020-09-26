import { ID } from '../../types'
import { Book } from '../books/types'
import { globalID } from '../../node'

export class Author {
  id: ID
  name: string
  books?: Book[]

  constructor(author: Author) {
    this.id = globalID(author.id, this)
    this.name = author.name
  }
}
