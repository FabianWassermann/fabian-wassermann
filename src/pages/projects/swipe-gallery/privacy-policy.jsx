import Head from 'next/head'

import { Prose } from '@/components/Prose'
import { SimpleLayout } from '@/components/SimpleLayout'
import PrivacyPolicyContent from '@/content/projects/swipe-gallery/privacy-policy/index.md'

export default function SwipeGalleryPrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Swipe Gallery Privacy Policy - Fabian Wassermann</title>
        <meta name="description" content="Privacy policy for Swipe Gallery." />
      </Head>
      <SimpleLayout title="Privacy Policy for Swipe Gallery">
        <Prose>
          <PrivacyPolicyContent />
        </Prose>
      </SimpleLayout>
    </>
  )
}
