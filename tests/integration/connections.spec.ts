import { query } from '../../.jest/setup'

test('should fetch first book', async () => {
  const { data } = await query({
    query: `
      query {
        books(first: 1) {
          edges {
            node {
              title
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
          title: 'Against Empathy',
        },
      }),
    ])
  )
})

test('should fetch last book', async () => {
  const { data } = await query({
    query: `
      query {
        books(last: 1) {
          edges {
            node {
              title
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
          title: 'O Labirinto do Fauno',
        },
      }),
    ])
  )
})
