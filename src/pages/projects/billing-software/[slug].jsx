import fs from 'fs'
import path from 'path'
import dynamic from 'next/dynamic'

// We render the MDX module selected at build-time via a dynamic import path
export default function ArticlePage({ slug, locale }) {
  const selectedLocale = locale || 'en'
  const previousPathname = '/projects/billing-software'
  
  const MDXComponent = dynamic(() =>
    import(
      /* webpackInclude: /index(\.[a-z]{2})?\.mdx$/ */
      `@/content/projects/billing-software/${slug}/index.${selectedLocale}.mdx`
    ).catch(() =>
      import(
        /* webpackInclude: /index(\.[a-z]{2})?\.mdx$/ */
        `@/content/projects/billing-software/${slug}/index.mdx`
      )
    )
  )
  return <MDXComponent previousPathname={previousPathname} />
}

// Keep filesystem checks only for generating paths at build time if needed

export async function getStaticProps({ params, locale }) {
  const { slug } = params
  return { props: { slug, locale: locale || 'en' } }
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), 'src/content/projects/billing-software')
  const paths = []

  if (fs.existsSync(contentDir)) {
    const slugs = fs
      .readdirSync(contentDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)

    for (const slug of slugs) {
      const dir = path.join(contentDir, slug)
      const hasAny = fs
        .readdirSync(dir)
        .some((f) => f.startsWith('index') && f.endsWith('.mdx'))
      if (hasAny) {
        // Generate paths for both locales explicitly to ensure localized routes exist
        paths.push({ params: { slug }, locale: 'en' })
        paths.push({ params: { slug }, locale: 'de' })
      }
    }
  }

  return {
    paths,
    fallback: false,
  }
}



