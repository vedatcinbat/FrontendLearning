"use client";

import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const { postId } = params;

  return (
    <div>
      <h1>Blog Post #{postId}</h1>
      <p>This is the content of blog post {postId}.</p>
    </div>
  );
}
