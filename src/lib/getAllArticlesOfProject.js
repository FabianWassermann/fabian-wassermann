import glob from 'fast-glob'
import * as path from 'path'

export async function importProjectArticle(projectName, articleFilename) {
  let { meta, default: component } = await import(
    `../pages/projects/${projectName}/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticlesOfProject(projectName) {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), `src/pages/projects/${projectName}`),
  })

  let articles = await Promise.all(
    articleFilenames.map((articleFilename) =>
      importProjectArticle(projectName, articleFilename)
    )
  )

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
