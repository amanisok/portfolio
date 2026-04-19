import Link from 'next/link'
import { formatDate, getBlogPosts } from './utils'

export const metadata = {
  title: 'Blog',
  description: 'Writing on AI products, evals, and shipping.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Blog</h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col gap-1"
          >
            <p className="text-neutral-900 dark:text-neutral-100 font-medium tracking-tight">
              {post.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {formatDate(post.publishedAt)} · {post.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
