import { ProjectArticlesBase } from '@/components/ProjectArticlesBase'
import { getAllArticlesOfProject } from '@/lib/getAllArticlesOfProject'
import { useTranslation } from 'react-i18next'

export default function ProjectArticlesIndex({ articles }) {
  const { t } = useTranslation('common')
  
  return (
   <ProjectArticlesBase 
     articles={articles} 
     projectPath="tax-app" 
     projectName={t('projects.projectPages.taxApp.name')} 
     description={t('projects.projectPages.taxApp.description')} 
   />
  )
}

export async function getStaticProps({ locale }) {
  return {
      props: {
        articles: (await getAllArticlesOfProject("tax-app", locale)).map(({ component, ...meta }) => meta),
      },
  }
}
