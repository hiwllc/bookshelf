import { DataSources as GraphQLDatasources } from 'apollo-server-core/dist/graphqlOptions'
import { DataSource as AuthorDataSource } from '../modules/authors'
import { DataSource as BookDataSource } from '../modules/books'

export interface DataSources {
  Author: typeof AuthorDataSource
  Book: typeof BookDataSource
}

export function dataSources() {
  return {
    Author: AuthorDataSource,
    Book: BookDataSource,
  } as GraphQLDatasources<DataSources>
}
