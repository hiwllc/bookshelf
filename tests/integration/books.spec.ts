import { query } from '../../.jest/setup'

test('should get book', async () => {
  const { data } = await query({
    query: `
      query {
        book(id: "2") {
          title
        }
      }
    `,
  })

  expect(data?.book?.title).toBe('O Guia do Mochileiro da Galáxia')
})

test('should fetch author from book', async () => {
  const { data } = await query({
    query: `
      query {
        books {
          title
          author {
            name
          }
        }
      }
    `,
  })

  expect(data?.books).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        title: 'O Guia do Mochileiro da Galáxia',
        author: { name: 'Douglas Adam' },
      }),
    ])
  )
})
