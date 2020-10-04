import { query, mutate } from '../../.jest/setup'

test('should fetch author from book', async () => {
  const { data } = await query({
    query: `
      query {
        books {
          edges {
            node {
              title
              author {
                node {
                  name
                }
              }
            }
          }
        }
      }
    `,
  })

  expect(data?.books?.edges).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        node: {
          title: 'O Guia do Mochileiro da Galáxia',
          author: { node: { name: 'Douglas Adam' } },
        },
      }),
    ])
  )
})

test('should create new book', async () => {
  const { data } = await mutate({
    mutation: `
      mutation createBook($input: createBookInput!) {
        createBook(input: $input) {
          book {
            title
            author {
              node {
                name
              }
            }
          }
        }
      }
    `,
    variables: {
      input: {
        title: 'O Cavaleiro dos sete reinos',
        author: 'NTpBdXRob3I=',
      },
    },
  })

  expect(data?.createBook?.book.title).toBe('O Cavaleiro dos sete reinos')
  expect(data?.createBook?.book.author.node.name).toBe('Geroge R. R. Martin')
})
