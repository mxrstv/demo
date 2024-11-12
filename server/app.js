import Fastify from 'fastify'
import client from './db.js'

const fastify = Fastify({
  logger: true
})
await client.connect();

fastify.get('/partners', async (request, reply) => {
  const res = await client.query('SELECT * FROM PARTNERS;');
  reply.send(res.rows);
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
})
