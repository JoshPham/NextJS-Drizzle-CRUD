"use client";

import { createPostAction, editPostAction } from "@/lib/posts/actions";
import { Post } from "@/lib/schema/postSchema";

export const CreatePostForm = () => {
    return (
        <form action={createPostAction} className="flex gap-2"
        >
        <input name="title" className="text-black" required />
        <button type="submit">Post</button>
        </form>
    );
}

export const EditPostForm = ({
    postID,
    setPostID
}: {
    postID: number;
    setPostID: (id: number | null) => void;
}) => {  
    return (
        <form action={(
            async (formData) => {
                await editPostAction(postID, formData);
                setPostID(null);
            }
        )}
        className="flex gap-2"
        >
            <input name="title" className="text-black" required />
            <div className="flex gap-5">
                <button onClick={() => setPostID(null)}>Cancel</button>
                <button type="submit">Confirm Edit</button>
            </div>
        </form>
    );
}