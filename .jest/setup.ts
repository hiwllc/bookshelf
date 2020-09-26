import { createTestClient } from 'apollo-server-testing'
import { server } from '../src/server'

export const { query, mutate } = createTestClient(server)
