import pg from 'pg';
import 'dotenv/config'

const user = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.PORT;
const database = process.env.DATABASE;

const { Client } = pg;

export default new Client({
  user, password, host, port, database
})