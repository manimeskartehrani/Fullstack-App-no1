import { defineConfig } from "drizzle-kit"


export default defineConfig({
    schema: "./src/lib/server/db/schemas/schema.ts",
    out: "./src/lib/server/db/migrations/drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL as string
    },
    verbose: true,
    strict: true
}) 