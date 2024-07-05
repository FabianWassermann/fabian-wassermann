import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoHundepensionBergparadies from '@/images/logos/hundepensionbergparadies.jpeg'
import logoLabradorVomSalzkofelblick from '@/images/logos/labrador-vom-salzkofelblick.png'
import logoAatsiRebalancing from '@/images/logos/aatsi-rebalancing.png'
import logoTRElektrotechnik from '@/images/logos/tr-elektrotechnik.png'
import imageHundepensionBergparadies from '@/images/projects/hundepension.png'
import imageSunnySoul from '@/images/projects/sunnysoul.png'
import imageAatsiRebalancing from '@/images/projects/aatsi-rebalancing.png'
import imageTRElektrotechnik from '@/images/projects/tr-elektrotechnik.png'
import React, { useState } from 'react'

const projects = [
  {
    name: 'TR Elektrotechnik',
    description:
      'Professional website for an electrical engineer doing solar, infrared heating, electrical installations and smart home.',
    link: {
      href: 'https://www.tr-elektrotechnik.at/',
      label: 'tr-elektrotechnik.at',
    },
    logo: logoTRElektrotechnik,
    tags: ['Webflow', 'JS'],
    isImageShown: false,
    image: imageTRElektrotechnik,
  },
  {
    name: 'Hundepension Bergparadies',
    description:
      'I created a website for a dog hotel nearby. This is one of my first websites I´ve ever made.',
    link: {
      href: 'https://www.hundepensionbergparadies.at/',
      label: 'hundepensionbergparadies.at',
    },
    logo: logoHundepensionBergparadies,
    tags: ['HTML5', 'CSS3', 'JS'],
    isImageShown: false,
    image: imageHundepensionBergparadies,
  },
  {
    name: 'Labrador vom Salzkofelblick',
    description:
      'This website is for a dog breeder. They´ve got the sweetest dogs I know.',
    link: {
      href: 'https://www.labrador-vom-salzkofelblick.at/',
      label: 'labrador-vom-salzkofelblick.at',
    },
    logo: logoLabradorVomSalzkofelblick,
    tags: ['VueJs', 'TailwindCSS', 'HTML5'],
    isImageShown: false,
    image: imageSunnySoul,
    additionalImageClasses: '!w-3/4 !h-auto',
  },
  {
    name: 'AATSI Crypto Indexing',
    description: 'This website is a demo page for showcasing purposes.',
    link: { href: 'https://www.aatsi.org/', label: 'www.aatsi.org' },
    logo: logoAatsiRebalancing,
    tags: ['VueJs', 'TailwindCSS', 'HTML5'],
    isImageShown: false,
    image: imageAatsiRebalancing,
    additionalImageClasses: '!w-[90%] !h-auto !rounded-lg',
  },
]

const applicationProjects = [
  {
    name: 'Billing Software',
    description:
      'A software for manage customers and generate offers, delivery notes and invoices.',
    link: {
      href: '/projects/billing-software',
      label: '/projects/billing-software',
    },
    tags: ['ExpressJs', 'VueJs', 'Prisma ORM', 'MongoDB'],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function EyeOpenIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      ></path>
    </svg>
  )
}

function EyeCloseIcon(props) {
  return (
    <svg fill="none" aria-hidden="true" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      ></path>
    </svg>
  )
}

function Tag({ tagName }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xxs font-medium text-zinc-700 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-0">
      {tagName}
    </span>
  )
}

export default function Projects() {
  const [, updateState] = React.useState()
  const forceUpdate = React.useCallback(() => updateState({}), [])

  return (
    <>
      <Head>
        <title>Projects - Fabian Wassermann</title>
        <meta
          name="description"
          content="Things I’ve made during my freelance career."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made during my freelance career."
        intro="I’ve worked on some little projects over the years but these are the bigger projects that I’m most proud of."
      >
        <div>
          <h2 className="mb-8 text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            Website Projects
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <Card as="li" key={project.name}>
                <div className="flex w-full items-start justify-between">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      src={project.logo}
                      alt=""
                      className="aspect-square h-8 w-8 rounded-full object-cover"
                      unoptimized
                    />
                  </div>
                  <button
                    onClick={() => {
                      const oldSate = project.isImageShown
                      projects.forEach((p) => {
                        p.isImageShown = false
                      })
                      project.isImageShown = !oldSate
                      forceUpdate()
                    }}
                    className={`${
                      project.isImageShown ? '!flex' : 'flex sm:hidden'
                    } z-40 h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-500 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-800/5 hover:bg-zinc-50 hover:text-zinc-600 group-hover:flex dark:border dark:border-zinc-600/50 dark:bg-zinc-700 dark:ring-0 dark:hover:bg-zinc-600 dark:hover:text-zinc-400`}
                  >
                    {project.isImageShown ? (
                      <EyeCloseIcon stroke="currentColor" className="h-6 w-6" />
                    ) : (
                      <EyeOpenIcon stroke="currentColor" className="h-6 w-6" />
                    )}
                  </button>
                </div>
                <h2 className="mt-6 mb-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <div className="z-10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag tagName={tag} key={tag}></Tag>
                  ))}
                </div>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
                <div
                  className={`${
                    project.isImageShown ? 'z-30 opacity-100' : 'z-10 opacity-0'
                  } absolute -inset-y-6 -inset-x-4 flex items-center justify-center bg-zinc-50 transition-opacity dark:bg-zinc-800 sm:-inset-x-6 sm:rounded-2xl`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      className={`mx-auto h-full w-auto object-contain ${project.additionalImageClasses}`}
                      unoptimized
                    />
                  ) : null}
                  {/* {
                  project.video ?
                    <video autoPlay muted className="w-3/4">
                      <source src={project.video} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video> :
                    null
                } */}
                </div>
              </Card>
            ))}
          </ul>
        </div>
        <div className="mt-24">
          <h2 className="mb-8 text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            Application Projects
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {applicationProjects.map((project) => (
              <Card as="li" key={project.name}>
                <div className="flex w-full items-start justify-between">
                  <div>
                    <h2 className="mb-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      <Card.Link href={project.link.href}>
                        {project.name}
                      </Card.Link>
                    </h2>
                    <div className="relative z-10 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag tagName={tag} key={tag}></Tag>
                      ))}
                    </div>
                  </div>
                  {project.image ? (
                    <button
                      onClick={() => {
                        const oldSate = project.isImageShown
                        projects.forEach((p) => {
                          p.isImageShown = false
                        })
                        project.isImageShown = !oldSate
                        forceUpdate()
                      }}
                      className={`${
                        project.isImageShown ? '!flex' : 'flex sm:hidden'
                      } z-40 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-zinc-500 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-800/5 hover:bg-zinc-50 hover:text-zinc-600 group-hover:flex dark:border dark:border-zinc-600/50 dark:bg-zinc-700 dark:ring-0 dark:hover:bg-zinc-600 dark:hover:text-zinc-400`}
                    >
                      {project.isImageShown ? (
                        <EyeCloseIcon
                          stroke="currentColor"
                          className="h-6 w-6"
                        />
                      ) : (
                        <EyeOpenIcon
                          stroke="currentColor"
                          className="h-6 w-6"
                        />
                      )}
                    </button>
                  ) : null}
                </div>

                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
                <div
                  className={`${
                    project.isImageShown ? 'z-30 opacity-100' : 'z-10 opacity-0'
                  } absolute -inset-y-6 -inset-x-4 flex items-center justify-center bg-zinc-50 transition-opacity dark:bg-zinc-800 sm:-inset-x-6 sm:rounded-2xl`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      className={`mx-auto h-full w-auto ${project.additionalImageClasses}`}
                      unoptimized
                    />
                  ) : null}
                  {/* {
                  project.video ?
                    <video autoPlay muted className="w-3/4">
                      <source src={project.video} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video> :
                    null
                } */}
                </div>
              </Card>
            ))}
          </ul>
        </div>
      </SimpleLayout>
    </>
  )
}
