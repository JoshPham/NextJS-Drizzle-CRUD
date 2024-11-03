import { pgTable, integer, text } from "drizzle-orm/pg-core"
import { z } from "zod";

export const posts = pgTable('posts', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),  
    title: text(),
});
export const postSchema = z.object({
    id: z.number().optional(),
    title: z.string(),
})
export type PostInsert = typeof posts.$inferInsert;
export type Post = typeof posts.$inferSelect;