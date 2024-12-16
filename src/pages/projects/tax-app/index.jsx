import { ProjectArticlesBase } from '@/components/ProjectArticlesBase'
import { getAllArticlesOfProject } from '@/lib/getAllArticlesOfProject'


export default function ProjectArticlesIndex({ articles }) {
  return (
   <ProjectArticlesBase articles={ articles } projectPath="tax-app" projectName="Tax Application" description="All news and updates about the Tax Application I made." />
  )
}

export async function getStaticProps() {
  return {
      props: {
        articles: (await getAllArticlesOfProject("tax-app")).map(({ component, ...meta }) => meta),
      },
  }
}
