import Fastify from 'fastify'
import client from './db.js'

const fastify = Fastify({
  logger: true
});

await client.connect();

fastify.get('/partners', async (request, reply) => {
  const partners = await client.query('SELECT T1.id, T2.type, T1.name, T1.ceo, T1.phone, T1.rating, SUM(T3.production_quantity) as total_quantity FROM PARTNERS T1 JOIN organization_types T2 on T1.organization_type_id = T2.id JOIN sales T3 on T3.partner_id = T1.id group by T1.id, T2.type, T1.name, T1.ceo, T1.phone, T1.rating;');
  await reply.send(partners.rows);
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
})
