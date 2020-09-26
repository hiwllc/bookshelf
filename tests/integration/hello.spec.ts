import { query } from '../../.jest/setup'
import { HelloData } from '../../src/schema/root'

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
