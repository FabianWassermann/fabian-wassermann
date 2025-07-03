import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'
import React, { useState, useEffect, Component } from 'react'
import Link from 'next/link'
import { ImgComparisonSlider } from '@img-comparison-slider/react'
import { HexColorPicker } from 'react-colorful'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import webflowWhite from '@/images/logos/webflow-white.png'
import webflowBlack from '@/images/logos/webflow-black.png'
import shopifyWhite from '@/images/logos/shopify_white.png'
import shopifyBlack from '@/images/logos/shopify_black.png'
import figma from '@/images/logos/figma.png'

import meeting from '@/images/workflow/meeting.jpg'
import planning from '@/images/workflow/planning.jpg'
import wireframe from '@/images/workflow/wireframe.jpg'

export default function WebdesignService() {
  return (
    <>
      <Head>
        <title>Webdesign - Fabian Wassermann</title>
        <meta name="description" content="Webdesign and Development." />
      </Head>

      <SimpleLayout
        icon={<GlobeIcon className="-ml-2 h-16 w-16" />}
        title="Webdesign and Development"
        intro=" From responsive design to interactive features, I create visually
              appealing and functional websites tailored to your needs. Elevate
              your online presence with a user-friendly and engaging website."
      >
        <div className="mb-16">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            What I use
          </h2>
          {/* <p className="relative z-10 mt-2 max-w-[80%] text-sm text-zinc-600 dark:text-zinc-400">
            I design in Figma, build in Webflow or Shopify, and enhance with
            custom code when your site needs more power and flexibility.
          </p> */}
          <WhatIUse />
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            Workflow
          </h2>

          <WorkFlow />
        </div>

        <CTASection />
      </SimpleLayout>
    </>
  )
}

function GlobeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path d="M2 12h20" className="stroke-zinc-400 dark:stroke-zinc-500" />
    </svg>
  )
}

function CTASection() {
  let router = useRouter()

  return (
    <div className="mt-28 lg:flex lg:items-center lg:justify-between">
      <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
        Let&apos;s talk
        <br />
        About your website
      </h2>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
        <Button
          className="h-16 w-52 !rounded-full"
          onClick={() => router.replace('/#contact')}
        >
          Contact me
        </Button>
      </div>
    </div>
  )
}

function WhatIUse() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-none">
      {/* <h3 className="text-lg/8 font-semibold text-zinc-900 dark:text-zinc-100">
        Builders and CMS
      </h3> */}
      <div className="mx-auto mt-3 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
        <Image
          alt="Webflow"
          src={webflowWhite}
          width={158}
          height={48}
          className="col-span-2 hidden max-h-12 w-full object-contain object-left dark:block lg:col-span-1"
        />
        <Image
          alt="Webflow"
          src={webflowBlack}
          width={158}
          height={48}
          className="col-span-2 block max-h-12 w-full object-contain object-left dark:hidden lg:col-span-1"
        />

        <Image
          alt="Shopify"
          src={shopifyWhite}
          width={158}
          height={48}
          className="col-span-2 hidden max-h-12 w-full object-contain object-left dark:block lg:col-span-1"
        />
        <Image
          alt="Shopify"
          src={shopifyBlack}
          width={158}
          height={48}
          className="col-span-2 block max-h-12 w-full object-contain object-left dark:hidden lg:col-span-1"
        />

        <Image
          alt="Figma"
          src={figma}
          width={158}
          height={48}
          className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
        />
      </div>
      <p className="relative z-10 mt-2 max-w-[80%] text-sm text-zinc-600 dark:text-zinc-400">
        I also integrate custom code to bring extra functionality and
        performance when needed.
      </p>
    </div>
  )
}

function WorkFlow() {
  const [currentHash, setCurrentHash] = useState(null)

  useEffect(() => {
    setCurrentHash(window.location.hash || steps[0].href)

    function onHashChange() {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', onHashChange)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  const steps = [
    {
      id: '01',
      name: 'Discover',
      href: '#workflow-discover',
      content: <DiscoverStep />,
    },
    {
      id: '02',
      name: 'Design',
      href: '#workflow-design',
      content: <DesignStep />,
    },
    { id: '03', name: 'Build', href: '#workflow-build' },
    { id: '04', name: 'Launch & Support', href: '#workflow-launch' },
  ]

  if (currentHash === null) {
    return null // or a loader/spinner if you want
  }

  const currentIndex = steps.findIndex((s) => s.href === currentHash)
  const stepsWithStatus = steps.map((step, idx) => {
    if (idx < currentIndex) return { ...step, status: 'complete' }
    if (idx === currentIndex) return { ...step, status: 'current' }
    return { ...step, status: 'upcoming' }
  })

  return (
    <div>
      <nav aria-label="Progress">
        <ol
          role="list"
          className="divide-y divide-zinc-100 rounded-md bg-white/50 ring-1 ring-zinc-200 group-hover:ring-teal-500 dark:divide-zinc-600/40 dark:bg-zinc-900/50 dark:ring-zinc-600/40 dark:group-hover:ring-teal-400 md:flex md:divide-y-0"
        >
          {stepsWithStatus.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex md:flex-1">
              {step.status === 'complete' ? (
                <a href={step.href} className="group flex w-full items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal-600 group-hover:bg-teal-700 dark:bg-teal-600 dark:group-hover:bg-teal-500">
                      <svg
                        data-slot="icon"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="size-6 text-zinc-100"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 whitespace-nowrap text-sm font-medium text-zinc-800 dark:text-zinc-100">
                      {step.name}
                    </span>
                  </span>
                </a>
              ) : step.status === 'current' ? (
                <a
                  href={step.href}
                  aria-current="step"
                  className="flex items-center px-6 py-4 text-sm font-medium"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-teal-600 dark:border-teal-600">
                    <span className="text-teal-600 dark:text-teal-600">
                      {step.id}
                    </span>
                  </span>
                  <span className="ml-4 whitespace-nowrap text-sm font-medium text-teal-600 dark:text-teal-600">
                    {step.name}
                  </span>
                </a>
              ) : (
                <a href={step.href} className="group flex items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-200 group-hover:border-zinc-400 dark:border-zinc-600/40 dark:group-hover:border-zinc-600">
                      <span className="text-zinc-600 dark:text-zinc-400">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 whitespace-nowrap text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {step.name}
                    </span>
                  </span>
                </a>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 hidden h-full w-5 md:block"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 22 80"
                      preserveAspectRatio="none"
                      className="size-full text-zinc-200 dark:text-zinc-600/40"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        stroke="currentcolor"
                        vectorEffect="non-scaling-stroke"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
      <div className="mt-4">{stepsWithStatus[currentIndex].content}</div>
    </div>
  )
}

function CheckCircleIcon(props) {
  return (
    <svg
      data-slot="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      ></path>
    </svg>
  )
}

function SpeakIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path
        d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function DesignIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path
        d="m14.622 17.897-10.68-2.913"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function DesignStep() {
  const [color, setColor] = useState('#aabbcc')

  return (
    // <ImgComparisonSlider>
    //   <img
    //     slot="first"
    //     src="https://miro.medium.com/v2/resize:fit:1400/1*VXCxYzjtYlUlLUy7LTamfQ.png"
    //   />
    //   <img
    //     slot="second"
    //     src="https://blog.gofullpage.com/wp-content/uploads/2021/08/john-saunders-figma.png?w=1200"
    //   />
    // </ImgComparisonSlider>
    <div>
      <section className="grid grid-cols-1 overflow-hidden lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
        <div className="lg:pr-4">
          <div className="inline-flex items-center gap-2">
            <DesignIcon className="size-6" />
            <h2 className="text-pretty text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Design That Feels Right
            </h2>
          </div>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Before designing anything, it&apos;s crucial to understand your
            business, goals, and audience. This step sets the direction for
            everything that follows — ensuring the final website isn’t just
            beautiful, but effective and aligned with your needs.
          </p>
          <ExampleHeroSection />
        </div>
        <div className="lg:row-span-2">
          <HexColorPicker color={color} onChange={setColor} />
          {/* <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 lg:mx-0 lg:mt-10 lg:grid-cols-2 lg:gap-3 xl:gap-4">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src={meeting}
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-16">
              <Image
                alt=""
                src={planning}
                className="block size-full object-cover"
              />
            </div>
            <div className="hidden lg:block"></div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-16">
              <Image
                alt=""
                src={wireframe}
                className="block size-full object-cover"
              />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

function ExampleHeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
    { name: 'Log in', href: '#' },
  ]

  return (
    <iframe>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="mx-auto max-w-7xl">
            <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
              <nav
                aria-label="Global"
                className="flex items-center justify-between lg:justify-start"
              >
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
                <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="hidden sm:mb-10 sm:flex">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                      <a
                        href="#"
                        className="whitespace-nowrap font-semibold text-indigo-600"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Read more <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Data to enrich your business
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
              className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
            />
          </div>
        </div>
      </div>
    </iframe>
  )
}

function DiscoverStep() {
  const list = [
    {
      title: 'Business Goals',
      text: 'What should the website achieve? (e.g. sell products, get leads, showcase work)',
    },
    {
      title: 'Target Audience',
      text: 'Who is the site for? Understanding their needs helps shape the design and content.',
    },
    {
      title: 'Content & Pages',
      text: 'What kind of pages do you need (e.g. Home, About, Services), and what should they say?',
    },
    {
      title: 'Brand Style or Inspiration',
      text: 'Do you have a logo, brand colors, or websites you love? This guides the visual direction.',
    },
  ]

  return (
    <div>
      <section className="grid grid-cols-1 overflow-hidden lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
        <div className="lg:pr-4">
          <div className="inline-flex items-center gap-2">
            <SpeakIcon className="size-6" />
            <h2 className="text-pretty text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Discover Your Goals and Vision
            </h2>
          </div>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Before designing anything, it&apos;s crucial to understand your
            business, goals, and audience. This step sets the direction for
            everything that follows — ensuring the final website isn’t just
            beautiful, but effective and aligned with your needs.
          </p>
          <ul
            role="list"
            className="mt-8 max-w-sm space-y-8 text-sm text-zinc-600 dark:text-zinc-400"
          >
            {list.map((entry, entryIdx) => (
              <li className="flex gap-x-3 ">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-teal-600"
                />
                <span>
                  <strong className="font-semibold text-zinc-800 dark:text-zinc-100">
                    {entry.title}.
                  </strong>{' '}
                  {entry.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3 lg:relative lg:row-span-2 lg:mt-0">
          <div className="absolute top-0 hidden h-10 w-full bg-gradient-to-b from-white to-transparent dark:from-zinc-900 lg:block"></div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 lg:mx-0 lg:mt-10 lg:grid-cols-2 lg:gap-3 xl:gap-4">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src={meeting}
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-16">
              <Image
                alt=""
                src={planning}
                className="block size-full object-cover"
              />
            </div>
            <div className="hidden lg:block"></div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-16">
              <Image
                alt=""
                src={wireframe}
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
