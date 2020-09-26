import dotenv from 'dotenv'
import { server } from './server'

dotenv.config()

server.listen(process.env.PORT)
