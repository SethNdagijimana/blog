import Link from "next/link"

const Nav = () => {
  return (
    <>
      <header className="flex justify-between border border-b-[#ddd] p-5">
        <div className="font-bold text-2xl">My Blog</div>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  )
}

export default Nav
