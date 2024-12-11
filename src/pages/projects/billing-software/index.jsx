import { ProjectArticlesBase } from '@/components/ProjectArticlesBase'
import { getAllArticlesOfProject } from '@/lib/getAllArticlesOfProject'
import * as path from 'path'


export default function ProjectArticlesIndex({ articles }) {
  return (
   <ProjectArticlesBase articles={ articles } projectName="Billing Software" description="All news and updates to the Billing Software I made for one of my clients." />
  )
}

export async function getStaticProps() {
  const pathArr = path.resolve(__filename).split('/');
  const projectFolderName = pathArr[pathArr.length - 1].split('.')[0];

  return {
      props: {
        articles: (await getAllArticlesOfProject(projectFolderName)).map(({ component, ...meta }) => meta),
      },
  }
}
