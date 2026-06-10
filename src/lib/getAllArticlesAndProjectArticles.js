import glob from 'fast-glob'
import * as path from 'path'

import { getAllArticles } from './getAllArticles'
import { importProjectArticle } from './getAllArticlesOfProject'

export async function getAllArticlesAndProjectArticles(locale = 'en') {
  let articleFilenames = await glob(['*/articles/*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/content/projects'),
  })

  let articles = await Promise.all(
    articleFilenames.map((articleFilename) => {
      const projectName = articleFilename.split('/')[0]
      const articleFilenameWithoutProjectPath = articleFilename.replace(
        `${projectName}/articles/`,
        ''
      )
      return importProjectArticle(
        projectName,
        articleFilenameWithoutProjectPath,
        locale
      )
    })
  )

  const allArticles = [...(await getAllArticles(locale)), ...articles]

  return allArticles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
