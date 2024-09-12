import Nav from "@/components/nav/Nav"
import { useRouter } from "next/router"

interface BlogPost {
  title: string
  content: string
}

interface BlogPostProps {
  post: BlogPost
}

const BlogPost = ({ post }: BlogPostProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Nav />
      <article className="p-5">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </>
  )
}

export default BlogPost

const posts: { [key: string]: BlogPost } = {
  "first-post": {
    title: "First Blog Post",
    content: "Content for the first post."
  },
  "second-post": {
    title: "Second Blog Post",
    content: "Content for the second post."
  }
}

export async function getStaticPaths() {
  const paths = Object.keys(posts).map((slug) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  return { props: { post: post || null } }
}
