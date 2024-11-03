import { pgTable, integer, text } from "drizzle-orm/pg-core"

export const posts = pgTable('posts', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),  
    title: text(),
});