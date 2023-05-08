import Head from 'next/head'
import { Container } from '@/components/Container'

export default function Impress() {
  return (
    <>
      <Head>
        <title>Impress - Fabian Wassermann</title>
        <meta name="description" content="Impress of Fabian Wassermann." />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Impress
          </h1>
          <p className="mt-12 text-base text-zinc-600 dark:text-zinc-400">
            <strong>Fabian Wassermann</strong>
            <br />
            Pattendorf 72
            <br />
            9813 Möllbrücke
            <br />
            Austria
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <strong>Contact details</strong>
            <br />
            Tel: +43 67762140252
            <br />
            Email: fabian.wassermann04@gmail.com
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <strong>VAT (UID)</strong>
            <br />
            coming soon
          </p>
        </header>
      </Container>
    </>
  )
}
