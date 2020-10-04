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

export function resolveConnectionFromArray<NodeType, QueryType>(
  resolver: (query?: QueryType) => Array<NodeType>,
  query?: QueryType
) {
  const nodes = resolver(query)

  return { edges: nodes.map(nodeFormatter) }
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
