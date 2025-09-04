import { ProjectArticlesBase } from '@/components/ProjectArticlesBase'
import { getAllArticlesOfProject } from '@/lib/getAllArticlesOfProject'
import { useTranslation } from 'react-i18next'

export default function ProjectArticlesIndex({ articles }) {
  const { t } = useTranslation('common')
  
  return (
   <ProjectArticlesBase 
     articles={articles} 
     projectPath="billing-software" 
     projectName={t('projects.projectPages.billingSoftware.name')} 
     description={t('projects.projectPages.billingSoftware.description')} 
   />
  )
}

export async function getStaticProps({ locale }) {
  return {
      props: {
        articles: (await getAllArticlesOfProject("billing-software", locale)).map(({ component, ...meta }) => meta),
      },
  }
}
