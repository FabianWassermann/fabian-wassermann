import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { useTranslation } from 'react-i18next'

function Article({ article, projectPath }) {
  const { t } = useTranslation('common')
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/projects/${projectPath}/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>{t('home.article.readCta')}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export function ProjectArticlesBase({ articles, projectName, description, projectPath }) {
  return (
    <>
      <Head>
        <title>{ projectName } - Fabian Wassermann</title>
        <meta
          name="description"
          content={ description }
        />
      </Head>
      <SimpleLayout
        title={ projectName }
        intro={ description }
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} projectPath={projectPath} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}