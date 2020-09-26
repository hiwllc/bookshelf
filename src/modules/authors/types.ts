import { ID } from '../../types'
import { Book } from '../books/types'

export interface Author {
  id: ID
  name: string
  books?: Book[]
}
