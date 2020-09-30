import { query, mutate } from '../../.jest/setup'

test('should return null', async () => {
  const { data } = await query({
    query: `
      query {
        book(id: "10101") {
          title
        }
      }
    `,
  })

  expect(data?.book).toBeNull()
})

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

test('should create new book', async () => {
  const { data } = await mutate({
    mutation: `
      mutation createBook($input: BookInput!) {
        createBook(input: $input) {
          title
          author {
            name
          }
        }
      }
    `,
    variables: {
      input: {
        title: 'O Cavaleiro dos sete reinos',
        author: '5',
      },
    },
  })

  expect(data?.createBook?.title).toBe('O Cavaleiro dos sete reinos')
  expect(data?.createBook?.author?.name).toBe('Geroge R. R. Martin')
})
