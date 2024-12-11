import { ProjectArticlesBase } from '@/components/ProjectArticlesBase'
import { getAllArticlesOfProject } from '@/lib/getAllArticlesOfProject'
import * as path from 'path'


export default function ProjectArticlesIndex({ articles }) {
  return (
   <ProjectArticlesBase articles={ articles } projectName="Billing Software" description="All news and updates to the Billing Software I made for one of my clients." />
  )
}

export async function getStaticProps() {
  return {
      props: {
        articles: (await getAllArticlesOfProject("billing-software")).map(({ component, ...meta }) => meta),
      },
  }
}
