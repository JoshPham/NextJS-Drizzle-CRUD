"use server";

import { createPost, deletePost, editPost, getPosts } from "@/lib/db-access/posts";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { postSchema } from "@/lib/schema/postSchema";

export async function createPostAction(formData: FormData) {
    const data = postSchema.safeParse(Object.fromEntries(formData.entries()))
    console.log("dasdafsdta", Object.fromEntries(formData.entries()));

    if (!data.success) {
      throw new Error("Invalid data");
    }

    await createPost(data.data.title);

    revalidatePath("/");
}

export async function deletePostAction(id: number) {
    await deletePost(id);

    revalidatePath("/");
}

export async function editPostAction(postID: number, formData: FormData) {
    const data = postSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!data.success) {
      throw new Error("Invalid data");
    }

    await editPost(postID, data.data.title);

    revalidatePath("/");
}