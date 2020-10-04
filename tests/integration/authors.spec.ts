import { query, mutate } from '../../.jest/setup'

test('should fetch books from author', async () => {
  const { data } = await query({
    query: `
      query {
        authors {
          edges {
            node {
              name
              books {
                edges {
                  node {
                    title
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  expect(data?.authors?.edges).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        node: {
          name: 'Douglas Adam',
          books: {
            edges: [{ node: { title: 'O Guia do Mochileiro da Galáxia' } }],
          },
        },
      }),
    ])
  )
})

test('should create new author', async () => {
  const { data } = await mutate({
    mutation: `
      mutation createAuthor($input: createAuthorInput!) {
        createAuthor(input: $input) {
          author {
            name
          }
        }
      }
    `,
    variables: {
      input: {
        name: 'Isaac Asimov',
      },
    },
  })

  expect(data?.createAuthor?.author?.name).toBe('Isaac Asimov')
})
