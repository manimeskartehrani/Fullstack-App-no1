
import { bigint, integer, pgSchema, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

// export const users = pgTable('users', {
//     id: serial('id').primaryKey(),
//     fullName: text('full_name'),
//     phone: varchar('phone', { length: 256 }),
// });
const users = pgSchema('auth').table('users', {
    id: uuid('id').primaryKey()
})

export const profiles = pgTable('profiles', {
    id: serial('id').primaryKey().unique(),
    user_id: uuid('user_id').references(() => users.id),
    email: text('email'),
    description: text('description'),
    pokemon_ids: integer('pokemon_ids').array()
},

);