import { ID } from './types'

interface ObjectConstructor {
  constructor: {
    name: string
  }
}

export function globalID<SourceType extends ObjectConstructor>(
  node: ID,
  source: SourceType
) {
  return Buffer.from(`${node}:${source.constructor.name}`, 'utf-8').toString(
    'base64'
  )
}

export function fromGlobalID(node: string) {
  const [id, type] = Buffer.from(node, 'base64').toString('utf-8').split(':')

  return {
    id,
    type,
  }
}
