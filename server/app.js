import Fastify from 'fastify'
import client from './db.js'

await client.connect();
const res = await client.query('SELECT * FROM PARTNERS;');

console.log(res.rows)
await client.end()

const fastify = Fastify({
  logger: true
})

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
})
