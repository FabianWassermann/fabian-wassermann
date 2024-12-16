import { ProjectArticlesBase } from '@/components/ProjectArticlesBase'
import { getAllArticlesOfProject } from '@/lib/getAllArticlesOfProject'


export default function ProjectArticlesIndex({ articles }) {
  return (
   <ProjectArticlesBase articles={ articles } projectPath="billing-software" projectName="Billing Software" description="All news and updates to the Billing Software I made for one of my clients." />
  )
}

export async function getStaticProps() {
  return {
      props: {
        articles: (await getAllArticlesOfProject("billing-software")).map(({ component, ...meta }) => meta),
      },
  }
}
