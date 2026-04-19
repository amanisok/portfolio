import posts from './posts.json'

export type Post = {
  slug: string
  title: string
  summary: string
  publishedAt: string
  content: string
}

export function getBlogPosts(): Post[] {
  return (posts as Post[])
    .slice()
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getBlogPost(slug: string): Post | undefined {
  return (posts as Post[]).find((p) => p.slug === slug)
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
