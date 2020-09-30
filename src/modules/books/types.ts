import { ID } from '../../types'
import { globalID } from '../../node'

export class Book {
  id: ID
  title: string
  author?: ID

  constructor(book: Book) {
    this.id = globalID(book.id, this)
    this.title = book.title
    this.author = book.author
  }
}

export type CreateBook = Omit<Book, 'id'>
