require('dotenv').config()
import express from 'express'
import router from './src/routes'

const server = express()

server.use(express.json())
server.use(router)

const port = process.env.PORT || 8000
server.listen(port, () => {
  console.debug(`
    App running at:
    - Local: http://localhost:${port}
  `)
})
