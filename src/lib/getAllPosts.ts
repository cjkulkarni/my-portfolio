import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '@/types/post'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    }
  })
}
