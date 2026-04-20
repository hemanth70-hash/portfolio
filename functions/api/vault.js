
import { Client } from 'pg';

export async function onRequestGet() {
  const client = new Client({ connectionString: 'POSTGRES_URL' });
  await client.connect();
  const res = await client.query('SELECT * FROM ideas');
  await client.end();
  return new Response(JSON.stringify(res.rows));
}
