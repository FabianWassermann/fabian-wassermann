import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import React, { useState } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.webp'
import image2 from '@/images/photos/image-2.webp'
import image3 from '@/images/photos/image-3.webp'
import image4 from '@/images/photos/image-4.webp'
import image5 from '@/images/photos/image-5.webp'
import image6 from '@/images/photos/image-6.webp'
import logoHs2n from '@/images/logos/hs2n.webp'
import logoFeratel from '@/images/logos/feratel.jpg'
import logoNeedNect from '@/images/logos/neednect.png'
import logoConsens from '@/images/logos/consens.webp'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { useEffect, useRef } from 'react'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  const [isContactActive, setIsContactActive] = useState(false)

  useEffect(() => {
    const updateIsContactActive = () => {
      setIsContactActive(window.location.hash.includes('contact'))
      console.log(window.location.hash.includes('contact'))
    }

    updateIsContactActive()

    window.addEventListener('hashchange', updateIsContactActive)
    return () => window.removeEventListener('hashchange', updateIsContactActive)
  }, [])

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        await fetch(
          'https://1vezik7285.execute-api.eu-central-1.amazonaws.com/dev',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: data.get('email'),
              message: data.get('message'),
            }),
          }
        )
        e.target.reset()
      }}
      id="contact"
      className={clsx(
        'rounded-2xl bg-white/50 p-6 ring-1 ring-zinc-100 dark:bg-zinc-900/50 dark:ring-zinc-700/40',
        isContactActive ? 'ring-2 !ring-teal-500 dark:!ring-teal-500' : ''
      )}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">You want to contact me?</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Feel free to send me an email at all time. If you want you can start a
        conversation by sending me a message.
      </p>
      <div className="mb-4 mt-6">
        <input
          type="text"
          name="message"
          placeholder="Message"
          aria-label="Message"
          required
          className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
      </div>
      <div className="flex">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Send
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Feratel Media Technologies',
      title: 'IT Interfaces Support ',
      logo: logoFeratel,
      start: 'Feb 2025',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'NeedNect - Solutions',
      title: 'Fullstack Developer',
      logo: logoNeedNect,
      start: 'May 2022',
      end: 'Jan. 2025',
    },
    {
      company: 'hs2n Informationstechnologie GmbH',
      title: 'C# Software Engineer',
      logo: logoHs2n,
      start: 'Jul. 2020',
      end: 'Jul. 2021',
    },
    {
      company: 'Consens Zeiterfassung GmbH',
      title: 'Trainee',
      logo: logoConsens,
      start: 'Jul. 2019',
      end: 'Aug. 2019',
    },
  ]

  return (
    <div className="rounded-2xl bg-white/50 p-6 ring-1 ring-zinc-100 dark:bg-zinc-900/50 dark:ring-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href="" variant="secondary" className="group mt-6 w-full" download>
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      // let offset = document.getElementById("photos").getBoundingClientRect().top;
      // document.getElementById("photos").style.transform = `translateX(${0 - window.scrollY}px)`;
      if (!document.getElementById('photos')) return
      document
        .getElementById('photos')
        .animate([{ transform: `translateX(${0 - window.scrollY / 2}px)` }], {
          delay: 100,
          duration: 500,
          iterations: 1,
          easing: 'cubic-bezier(.17,.67,.96,.59)',
          fill: 'forwards',
        })
    })
  })

  return (
    <div className="relative mx-auto mt-16 max-w-[90rem] overflow-hidden py-3 before:absolute before:left-0 before:top-0 before:z-10 before:hidden before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-50 before:to-[rgba(0,0,0,0)] after:absolute after:right-0 after:top-0 after:z-10 after:hidden after:h-full after:w-10 after:bg-gradient-to-r after:from-[rgba(0,0,0,0)] after:to-zinc-50 before:dark:from-[rgba(0,0,0,1)] after:dark:to-[rgba(0,0,0,1)] sm:mt-20 before:sm:block after:sm:block">
      <div
        id="photos"
        className="-my-4 flex w-fit justify-center gap-5 overflow-hidden py-4 sm:gap-8"
      >
        {[image1, image2, image3, image4, image5, image6].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

// I’m the founder and CEO of AATSI, where we develop crypto technologies that automate the asset trading for people to save time and make profits.

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Fabian Wassermann - Software developer, freelancer, and amateur
          mountaineer
        </title>
        <meta
          name="description"
          content="I’m Fabian, a software developer and entrepreneur based in Austria. I´m a freelancer doing everything from simple websites to bigger webapplications."
        />
        <meta name="keywords" content="Fabian, Wassermann" />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer, freelancer, and amateur mountaineer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Fabian, a software developer, specialized in full-stack
            development, based in Austria. I´m a freelancer doing everything
            from simple websites to bigger webapplications.
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            /> */}
            <SocialLink
              href="https://www.instagram.com/f4bianw/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/FabianWassermann"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/fabian-wassermann-4b0064216/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
