import { DataSources as GraphQLDatasources } from 'apollo-server-core/dist/graphqlOptions'
import { DataSource as AuthorDataSource } from '../modules/authors'

export interface DataSources {
  Author: typeof AuthorDataSource
}

export function dataSources() {
  return {
    Author: AuthorDataSource,
  } as GraphQLDatasources<DataSources>
}
