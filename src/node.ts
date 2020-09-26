export function globalID(node: any, source: string) {
  const id = Buffer.from(`${node.id}:${source}`, 'utf-8').toString('base64')

  return { ...node, id }
}

export function fromGlobalID(node: string) {
  return Buffer.from(node, 'base64').toString('utf-8').split(':')
}
