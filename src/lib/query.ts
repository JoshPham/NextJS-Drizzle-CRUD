import { db } from "@/lib/db";
import { posts } from "@/lib/schema/postSchema";

export const query = async () => {
  try {
        const result = await db.select().from(posts);
        return result;
    } catch (error) {
        return error;
    }
}