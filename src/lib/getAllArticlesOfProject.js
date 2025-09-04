import glob from 'fast-glob'
import * as path from 'path'

export async function importProjectArticle(projectName, articleFilename, locale) {
  // Try locale-specific first, then fallback to default index.mdx
  try {
    let { meta, default: component } = await import(
      `@/content/projects/${projectName}/${articleFilename.replace(/\.mdx$/, `.${locale}.mdx`)}`
    )
    return {
      slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
      ...meta,
      component,
    }
    
  } catch (e) {
    // Fallback to default index.mdx if locale-specific file doesn't exist
    let { meta, default: component } = await import(
      `@/content/projects/${projectName}/${articleFilename}`
    )
    return {
      slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
      ...meta,
      component,
    }
  }
}

export async function getAllArticlesOfProject(projectName, locale = 'en') {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), `src/content/projects/${projectName}`),
  })

  let articles = await Promise.all(
    articleFilenames.map((articleFilename) =>
      importProjectArticle(projectName, articleFilename, locale)
    )
  )

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
