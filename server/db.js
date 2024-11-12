import pg from 'pg'

const { Client } = pg;
export default new Client({
  user: 'postgres',
  password: '219219',
  host: 'localhost',
  port: '5432',
  database: 'postgres'
})