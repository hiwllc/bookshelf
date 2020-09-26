import { DataSources } from './schema/datasources'
export type ID = string | undefined

export type Context = {
  dataSources: DataSources
}

export type ResolverFn = (source: any, args: any, context: Context) => any

type ResolverMap = {
  [field: string]: ResolverFn
}

export interface Resolvers<
  QueryType = ResolverMap,
  MutationType = ResolverMap,
  ResolverType = ResolverMap
> {
  Query?: QueryType
  Mutation?: MutationType
  Author?: ResolverType
  Book?: ResolverType
}
