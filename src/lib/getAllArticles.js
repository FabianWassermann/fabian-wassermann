import glob from 'fast-glob'
import * as path from 'path'

async function importArticleFromContent(articleDir, locale) {
  // Try locale-specific first, then fallback to default index.mdx
  try {
    let mod = await import(`@/content/articles/${articleDir}/index.${locale}.mdx`)
    return { mod, slug: articleDir }
  } catch (e) {
    let mod = await import(`@/content/articles/${articleDir}/index.mdx`)
    return { mod, slug: articleDir }
  }
}

export async function getAllArticles(locale = 'en') {
  const contentRoot = path.join(process.cwd(), 'src/content/articles')

  // Identify article directories that contain any index*.mdx
  const articleDirs = await glob(['*/index*.mdx'], { cwd: contentRoot })
  const uniqueDirs = Array.from(
    new Set(articleDirs.map((p) => p.split('/')[0]))
  )

  const articles = await Promise.all(
    uniqueDirs.map(async (dir) => {
      const { mod, slug } = await importArticleFromContent(dir, locale)
      const { meta, default: component } = mod
      return { slug, ...meta, component }
    })
  )

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
