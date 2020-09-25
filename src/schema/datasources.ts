import { DataSources as GraphQLDatasources } from 'apollo-server-core/dist/graphqlOptions'

export interface DataSources {}

export function dataSources() {
  return {} as GraphQLDatasources<DataSources>
}
