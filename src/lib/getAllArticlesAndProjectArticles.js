import glob from 'fast-glob'
import * as path from 'path'

import { getAllArticles } from './getAllArticles'
import { importProjectArticle } from './getAllArticlesOfProject'

export async function getAllArticlesAndProjectArticles(locale = 'en') {
  let articleFilenames = await glob(['*.mdx', '**/index.mdx'], {
    cwd: path.join(process.cwd(), `src/content/projects/`),
  })

  let articles = await Promise.all(
    articleFilenames.map((articleFilename) => {
      const articleName = articleFilename.split('/')[0]
      const articleFilenameWithoutName = articleFilename.replace(
        `${articleName}/`,
        ''
      )
      return importProjectArticle(articleName, articleFilenameWithoutName, locale)
    })
  )

  const allArticles = [...(await getAllArticles(locale)), ...articles]

  return allArticles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
