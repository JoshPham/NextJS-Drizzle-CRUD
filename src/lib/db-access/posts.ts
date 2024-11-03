import { db } from "@/lib/db";
import { Post, posts } from "@/lib/schema/postSchema";
import { eq } from "drizzle-orm";

export const getPosts = async () : Promise<Post[]> => {
    try {
        const result = await db.select().from(posts);
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const createPost = async (title: string) => {
    try {
        const result = await db.insert(posts).values({ title });
        return result;
    } catch (error) {
        return error;
    }
}

export const deletePost = async (id: number) => {
    try {
        const result = await db.delete(posts).where(eq(posts.id, id));
        return result;
    } catch (error) {
        return error;
    }
}

export const editPost = async (id: number, title: string) => {
    try {
        const result = await db.update(posts).set({ title }).where(eq(posts.id, id));
        return result;
    } catch (error) {
        return error;
    }
}