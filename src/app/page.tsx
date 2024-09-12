import Nav from "@/components/nav/Nav"
import Link from "next/link"

export default function Home() {
  const posts = [
    {
      slug: "first-post",
      title: "First Blog Post",
      description: "This is the first blog post."
    },
    {
      slug: "second-post",
      title: "Second Blog Post",
      description: "This is the second blog post."
    }
  ]
  return (
    <>
      <Nav />

      <section className="p-[50px] bg-[#f5f5f5] text-center">
        <h1>Welcome to My Blog</h1>
        <p>Your source for the latest updates</p>
      </section>
      <section className="grid grid-cols-2 gap-5 p-5">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-[#ddd] p-5 rounded-xl"
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </article>
        ))}
      </section>
    </>
  )
}
