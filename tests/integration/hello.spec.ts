import { createTestClient } from 'apollo-server-testing'
import { server } from '../../src/server'
import { HelloData } from '../../src/schema/root'

const { query } = createTestClient(server)

test('should get hello world', async () => {
  const { data } = (await query({
    query: `
      query {
        hello
      }
    `,
  })) as HelloData

  expect(data.hello).toBe('Hello World!')
})
