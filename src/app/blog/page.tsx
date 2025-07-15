

import Link from 'next/link'
import { getAllPosts } from '@/lib/getAllPosts'
import { Post } from '@/types/post'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post:Post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-blue-700 hover:underline">{post.title}</h2>
            </Link>
            <p className="text-gray-600 text-sm">{post.excerpt}</p>
            <p className="text-gray-400 text-xs mt-1">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
