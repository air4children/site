import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Entry blog posts</p>
      <Link to="/">&larr; back to home</Link>

      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
