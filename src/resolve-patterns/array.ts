import { ID } from './types'
import { fromGlobalID } from './node'

function nodeFormatter<NodeType extends Partial<{ id: ID }>>(node: NodeType) {
  return { node, cursor: node.id }
}

export function resolveNodeFromArray<NodeType>(
  resolver: (id: ID) => NodeType,
  nodeid: ID
) {
  const { id } = fromGlobalID(nodeid)

  const node = resolver(id || nodeid)

  return nodeFormatter(node)
}

export type ArgumentsQuery = {
  first?: number
  last?: number
  after?: string
  before?: string
  [key: string]: unknown
}

function getCursorOffset<T extends { id?: string }>(
  list: T[],
  cursor?: string,
  defaultOffset?: number
) {
  if (!cursor) {
    return typeof defaultOffset === 'number' ? defaultOffset : list.length
  }

  return list.findIndex((node) => node.id === cursor)
}

export function resolveConnectionFromArray<
  NodeType,
  QueryType extends ArgumentsQuery
>(resolver: (query?: QueryType) => Array<NodeType>, query?: QueryType) {
  const nodes = resolver(query)

  const afterOffeset = getCursorOffset(nodes, query?.after, 0)
  const beforeOffeset = getCursorOffset(nodes, query?.before)

  const sliceStart = 0
  const sliceEnd = nodes.length

  let startOffset = Math.max(sliceStart - 1, afterOffeset, -1)
  let endOffset = Math.min(sliceEnd, beforeOffeset, nodes.length)

  if (query?.first) {
    endOffset = Math.min(endOffset, startOffset + query.first)
  }

  if (query?.last) {
    startOffset = Math.max(startOffset, endOffset - query.last)
  }

  const edges = nodes.slice(startOffset, endOffset).map(nodeFormatter)

  return { edges }
}

type WithConstructorName = {
  constructor: {
    name: string
  }
}

type WithClientMutationId = {
  clientMutationId?: string
}

export function mutateAndGetPayload<
  Node extends WithConstructorName,
  Input extends WithClientMutationId
>(resolver: (input: Input) => Node, input: Input) {
  const result = resolver(input)

  return {
    [result.constructor.name.toLowerCase()]: result,
    clientMutationId: input.clientMutationId,
  }
}
