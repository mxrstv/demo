import Fastify from 'fastify'
import client from './db.js'

const fastify = Fastify({
  logger: true
});

await client.connect();

fastify.get('/partners', async (request, reply) => {
  const partners = await client.query('SELECT T1.id, T1.organization_type, T1.name, T1.ceo, T1.phone, T1.rating, sum(T2.production_quantity) from partners as T1 JOIN sales as T2 on T1.id = T2.partner_id GROUP BY T1.id, T1.organization_type, T1.name, T1.ceo, T1.phone, T1.rating;');
  await reply.send(partners.rows);
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
})
