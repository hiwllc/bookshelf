export function globalID(node: any, source: any) {
  return Buffer.from(`${node}:${source.constructor.name}`, 'utf-8').toString(
    'base64'
  )
}

export function fromGlobalID(node: string) {
  return Buffer.from(node, 'base64').toString('utf-8').split(':')
}
