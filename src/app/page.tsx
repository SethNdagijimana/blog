"use client"

import { FormField } from "@/components/FormField"
import Nav from "@/components/nav/Nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [posts, setPosts] = useState([
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
  ])

  const [newPost, setNewPost] = useState({
    title: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const slug = newPost.title.toLowerCase().replace(/ /g, "-")

    setPosts([
      ...posts,
      {
        slug,
        title: newPost.title,
        description: newPost.description
      }
    ])

    setNewPost({
      title: "",
      description: ""
    })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNewPost({
      ...newPost,
      [name]: value
    })
  }

  return (
    <>
      <Nav />

      <section className="p-[50px] bg-[#f5f5f5] text-center">
        <h1>Welcome to My Blog</h1>
        <p>Your source for the latest updates</p>
      </section>

      <section className="grid grid-cols-2 gap-5 p-5 ">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-[#ddd] p-5 rounded-xl"
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link href={`/posts/${post.slug}`}>Read More</Link>
          </article>
        ))}
      </section>

      <div className="p-5 w-[500px] ">
        <form className="bg-[#ddd] p-2" onSubmit={handleSubmit}>
          <div>
            <FormField
              type="text"
              label="Blog Title"
              placeholder="Enter the blog title"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-2">
            <FormField
              type="text"
              isTextArea
              label="Write a Blog"
              placeholder="Type something..."
              name="description"
              value={newPost.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-1">
            <Button
              type="submit"
              disabled={!newPost.title || !newPost.description}
            >
              POST
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
