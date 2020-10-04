import { query } from '../../.jest/setup'

test('should get author on node field', async () => {
  const { data } = await query({
    query: `
      query {
        node(id: "MjpBdXRob3I=") {
            ... on Author {
            name
          }
        }
      }
    `,
  })

  expect(data?.node.name).toBe('Douglas Adam')
})

test('should get book on node field', async () => {
  const { data } = await query({
    query: `
      query {
        node(id: "MjpCb29r") {
            ... on Book {
            title
          }
        }
      }
    `,
  })

  expect(data?.node.title).toBe('O Guia do Mochileiro da Galáxia')
})
