import { createPostAction, deletePostAction } from "@/lib/posts/actions";
import { getPosts } from "@/lib/db-access/posts";
import { Post } from "@/lib/schema/postSchema";
import { CreatePostForm, EditPostForm } from "@/components/post-form";
import { PostList } from "@/components/post-list";
import Posts from "@/components/post-component";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
