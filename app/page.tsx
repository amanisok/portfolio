import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import profile from './content/profile.json'

export default function Page() {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <section>
        <div className="mb-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-lime-200">
            <Image
              src={profile.avatar}
              alt={`${profile.name} avatar`}
              fill
              sizes="60px"
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="mb-3 text-2xl font-semibold tracking-tight">
          {profile.name}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {profile.bio.prefix}
          <span className="text-neutral-900 dark:text-neutral-100 font-medium">
            {profile.bio.highlight}
          </span>
          {profile.bio.suffix}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold tracking-tight">
          {profile.fullBio.heading}
        </h2>
        <article className="prose prose-neutral dark:prose-invert text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <MDXRemote source={profile.fullBio.content} />
        </article>
      </section>
    </div>
  );
}
