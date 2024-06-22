
import "dotenv/config"
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

async function pushMigration() {
    const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });
    const migrateDB = drizzle(migrationClient)
    await migrate(migrateDB, {
        migrationsFolder: "./src/lib/server/db/migrations/drizzle"


    })
    await migrationClient.end()
}

pushMigration()