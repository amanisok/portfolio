import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { formatDate, getBlogPost, getBlogPosts } from '../utils'

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter mb-2">
        {post.title}
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        {formatDate(post.publishedAt)}
      </p>
      <article className="prose prose-neutral dark:prose-invert">
        <MDXRemote source={post.content} />
      </article>
    </section>
  )
}
