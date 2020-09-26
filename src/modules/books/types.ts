import { ID } from '../../types'

export interface Book {
  id: ID
  title: string
  author?: ID
}
