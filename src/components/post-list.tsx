"use client";

import { deletePostAction } from "@/lib/posts/actions";
import { Post } from "@/lib/schema/postSchema";

export const PostList = ({
    posts,
    setPostID
}: {
    posts: Post[];
    setPostID: (id: number) => void;
}) => {

    return (
        <table className="w-[50%]">
            <thead>
            <tr className="text-left">
                <th>ID</th>
                <th>Title</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {posts.map((post: Post) => (
                <tr key={post.id} className="">
                <td>{post.id}</td>
                <td>
                    {post.title} 
                </td>
                <td className="flex gap-5">
                    <button onClick={() => setPostID(post.id)}>
                        Edit
                    </button>
                    <form action={async () => {
                        await deletePostAction(post.id);
                    }}>
                    <button>
                        X
                    </button>
                    </form>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}