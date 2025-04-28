import { BLOG_POSTS } from "@/data/blog-posts";
import ClientPage from "@/components/blog/ClientPage";

/**
 * This function is required for static site generation with output: 'export'
 * It generates all possible paths for the dynamic route at build time
 */
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

/**
 * Server component for blog post pages
 */
export default function BlogPostPage({ params }: { params: { id: string } }) {
  // Get the blog post data based on the ID parameter
  const post = BLOG_POSTS.find(p => p.id.toString() === params.id) || null;
  
  // Render the client component with the post data
  return <ClientPage post={post} />;
} 