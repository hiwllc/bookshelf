import { query } from '../../.jest/setup'

test('should return null', async () => {
  const { data } = await query({
    query: `
      query {
        author(id: "10101") {
          name
        }
      }
    `,
  })

  expect(data?.author).toBeNull()
})

test('should get author', async () => {
  const { data } = await query({
    query: `
      query {
        author(id: "2") {
          name
        }
      }
    `,
  })

  expect(data?.author?.name).toBe('Douglas Adam')
})

test('should fetch books from author', async () => {
  const { data } = await query({
    query: `
      query {
        authors {
          name
          books {
            title
          }
        }
      }
    `,
  })

  expect(data?.authors).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: 'Douglas Adam',
        books: [{ title: 'O Guia do Mochileiro da Galáxia' }],
      }),
    ])
  )
})
