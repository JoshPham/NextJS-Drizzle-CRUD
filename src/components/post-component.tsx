"use client";

import { CreatePostForm, EditPostForm } from "@/components/post-form";
import { PostList } from "@/components/post-list";
import { Post } from "@/lib/schema/postSchema";
import { useState } from "react";

export default function Posts({
    posts
}: {
    posts: Post[];
}) {
    const [postID, setPostID] = useState<number | null>(null);

    return (
        <>
            {!postID? <CreatePostForm /> : <EditPostForm postID={postID} setPostID={setPostID} />}
            <PostList posts={posts} setPostID={setPostID} />
        </>
    );
}