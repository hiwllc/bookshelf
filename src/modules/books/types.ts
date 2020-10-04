import { ID, globalID } from '../../resolve-patterns'

export class Book {
  id: ID
  title: string
  author: ID

  constructor(book: Book) {
    this.id = globalID(book.id, this)
    this.title = book.title
    this.author = book.author
  }
}

export interface CreateBook extends Omit<Book, 'id'> {
  clientMutationId?: string
}
