// import { drizzle } from 'drizzle-orm/postgres-js';
// import postgres from 'postgres';
// import { env } from '$env/dynamic/private';

// if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

// const client = postgres(env.DATABASE_URL);
// export const db = drizzle(client);


import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'


const connectionString = process.env.DATABASE_URL as string

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString)
export const db = drizzle(client);
