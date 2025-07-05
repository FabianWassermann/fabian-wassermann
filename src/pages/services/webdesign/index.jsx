import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'
import { IframeRenderer } from '@/components/IframeRenderer'
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

import imageExampleHero from '@/images/workflow/heroImageExample.jpg'

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
  })

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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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

function RoundIcon(props) {
  const { isActive, ...otherProps } = props

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path
        d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"
        className={
          isActive
            ? 'fill-teal-400/30 stroke-teal-400 dark:fill-teal-400/30 dark:stroke-teal-500'
            : 'fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
        }
      />
    </svg>
  )
}

function SquareIcon(props) {
  const { isActive, ...otherProps } = props

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        className={
          isActive
            ? 'fill-teal-400/30 stroke-teal-400 dark:fill-teal-400/30 dark:stroke-teal-500'
            : 'fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
        }
      />
    </svg>
  )
}

function CircleIcon(props) {
  const { isActive, ...otherProps } = props

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        className={
          isActive
            ? 'fill-teal-400/30 stroke-teal-400 dark:fill-teal-400/30 dark:stroke-teal-500'
            : 'fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
        }
      />
    </svg>
  )
}

function RadiusPicker({ radius, onChange }) {
  const [selectedRadius, setSelectedRadius] = useState(radius || 'circle')

  const radiusOptions = [
    {
      id: 'square',
      name: 'square',
      icon: (
        <SquareIcon className="size-6" isActive={selectedRadius === 'square'} />
      ),
    },
    {
      id: 'round',
      name: 'round',
      icon: (
        <RoundIcon className="size-6" isActive={selectedRadius === 'round'} />
      ),
    },
    {
      id: 'circle',
      name: 'circle',
      icon: (
        <CircleIcon className="size-6" isActive={selectedRadius === 'circle'} />
      ),
    },
  ]

  const handleChange = (event) => {
    const newValue = event.target.value
    setSelectedRadius(newValue)

    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <fieldset aria-label="Radius">
      <div className="flex items-center justify-between">
        <div className="text-sm/6 font-medium text-zinc-800 dark:text-zinc-100">
          Radius
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-3">
        {radiusOptions.map((option) => (
          <label
            key={option.id}
            aria-label={option.name}
            className="group relative flex items-center justify-center rounded-md bg-white/50 p-2 ring-1 ring-zinc-100 hover:ring-teal-500 has-[:checked]:ring-teal-500 dark:bg-zinc-900/50 dark:ring-zinc-700/40 dark:hover:ring-teal-400 dark:has-[:checked]:ring-teal-400"
          >
            <input
              value={option.id}
              checked={selectedRadius === option.id}
              onChange={handleChange}
              name="option-radius"
              type="radio"
              className="absolute inset-0 appearance-none focus:outline focus:outline-0 disabled:cursor-not-allowed"
            />
            {!option.icon && (
              <span className="text-sm font-medium uppercase text-zinc-800 group-has-[:checked]:text-teal-500 dark:text-zinc-100 dark:group-has-[:checked]:text-teal-400">
                {option.name}
              </span>
            )}
            {option.icon}
            <div className="pointer-events-none absolute inset-0 rounded-md shadow outline outline-black/5 group-hover:outline-teal-400/30 group-has-[:checked]:outline-teal-400/30 dark:outline-white/5 dark:group-hover:outline-teal-400/30 dark:group-has-[:checked]:outline-teal-400/30" />
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function FontFamilyPicker({ fontFamily, onChange }) {
  const [selectedFontFamily, setSelectedFontFamily] = useState(
    fontFamily || 'Arial'
  )

  const fontFamilyOptions = [
    {
      id: 'Arial',
      name: 'Arial',
    },
    {
      id: 'Times New Roman',
      name: 'Times New Roman',
    },
    {
      id: 'Courier New',
      name: 'Courier New',
    },
  ]

  const handleChange = (event) => {
    const newValue = event.target.value
    setSelectedFontFamily(newValue)

    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <fieldset aria-label="Font">
      <div className="flex items-center justify-between">
        <div className="text-sm/6 font-medium text-zinc-800 dark:text-zinc-100">
          Font
        </div>
      </div>
      <div className="mt-2 flex gap-3">
        {fontFamilyOptions.map((option) => (
          <label
            key={option.id}
            aria-label={option.name}
            className="group relative flex items-center justify-center rounded-md bg-white/50 p-2 ring-1 ring-zinc-100 hover:ring-teal-500 has-[:checked]:ring-teal-500 dark:bg-zinc-900/50 dark:ring-zinc-700/40 dark:hover:ring-teal-400 dark:has-[:checked]:ring-teal-400"
          >
            <input
              value={option.id}
              checked={selectedFontFamily === option.id}
              onChange={handleChange}
              name="option-font"
              type="radio"
              className="absolute inset-0 appearance-none focus:outline focus:outline-0 disabled:cursor-not-allowed"
            />
            {!option.icon && (
              <span className="whitespace-nowrap text-xs font-medium text-zinc-600 group-has-[:checked]:text-teal-500 dark:text-zinc-400 dark:group-has-[:checked]:text-teal-400">
                {option.name}
              </span>
            )}
            {option.icon}
            <div className="pointer-events-none absolute inset-0 rounded-md shadow outline outline-black/5 group-hover:outline-teal-400/30 group-has-[:checked]:outline-teal-400/30 dark:outline-white/5 dark:group-hover:outline-teal-400/30 dark:group-has-[:checked]:outline-teal-400/30" />
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function DesignStep() {
  const [color, setColor] = useState('#ffae00')
  const [radius, setRadius] = useState('circle')
  const [fontFamily, setFontFamily] = useState('Arial')

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
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-8">
        <div className="lg:pr-4">
          <div className="inline-flex items-center gap-2">
            <DesignIcon className="size-6" />
            <h2 className="text-pretty text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              Design That Feels Right
            </h2>
          </div>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            During the design phase, I shape the look and feel of your website.
            Based on what we uncovered in the discovery step, I plan the layout,
            structure the content, and bring your brand to life with colors,
            typography, and visuals that connect with your audience.
          </p>
        </div>
        <div className="flex items-start gap-4 lg:row-span-2">
          <div className="flex grow flex-col gap-3">
            <RadiusPicker radius={radius} onChange={setRadius} />
            <FontFamilyPicker
              fontFamily={fontFamily}
              onChange={setFontFamily}
            />
          </div>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
        <ExampleHeroSection
          className="lg:col-span-2"
          colorHex={color}
          radius={radius}
          fontFamily={fontFamily}
        />
      </section>
    </div>
  )
}

function ExampleHeroSection(props) {
  const navigation = [
    { name: 'Rings', href: '#' },
    { name: 'Necklaces', href: '#' },
    { name: 'Earrings', href: '#' },
    { name: 'Bracelets', href: '#' },
    { name: 'Sale', href: '#' },
  ]

  const { fontFamily, radius, colorHex, ...restProps } = props

  return (
    <div {...restProps}>
      <div className="w-full overflow-hidden rounded-xl">
        <IframeRenderer
          style={{ width: '100%', height: '550px' }}
          colorHex={colorHex}
          radius={radius}
          fontFamily={fontFamily}
        >
          <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
              <div className="mx-auto max-w-7xl">
                <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                  <nav
                    aria-label="Global"
                    className="flex items-center justify-between lg:justify-start"
                  >
                    <a className="-m-1.5 cursor-pointer p-1.5">
                      <span className="sr-only">Your Company</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-8"
                      >
                        <path
                          d="M6 3h12l4 6-10 13L2 9Z"
                          className="dark:fill-primary-100 dark:stroke-primary-400 fill-primary-100/10 stroke-primary-500"
                        />
                        <path
                          d="M11 3 8 9l4 13 4-13-3-6"
                          className="dark:stroke-primary-400 stroke-primary-500"
                        />
                        <path
                          d="M2 9h20"
                          className="dark:stroke-primary-400 stroke-primary-500"
                        />
                      </svg>
                    </a>
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                    >
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                    <div className="hidden lg:ml-8 lg:flex lg:gap-x-12">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          className="cursor-pointer text-base/6 font-semibold text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
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

                  <div className="relative px-6 py-12 sm:py-24 lg:px-8 lg:py-24 lg:pr-0">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                      <div className="hidden sm:mb-10 sm:flex">
                        <div className="relative rounded-full px-3 py-1 text-base/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                          The Big Summer Sale.{' '}
                          <a className="text-primary-600 cursor-pointer whitespace-nowrap font-semibold">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            Shop now <span aria-hidden="true">&rarr;</span>
                          </a>
                        </div>
                      </div>
                      <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        The Art of Fine Jewelry
                      </h1>
                      <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        Unrivaled craftsmanship, rare gemstones, and timeless
                        design come together in collections that exude
                        sophistication and prestige.
                      </p>
                      <div className="mt-10 flex items-center gap-x-6">
                        <a className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 cursor-pointer rounded-md px-4 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                          Shop now
                        </a>
                        <a className="cursor-pointer text-base/6 font-semibold text-gray-900">
                          Explore Collections <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Image
                  alt=""
                  src={imageExampleHero}
                  className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
                />
              </div>
            </div>
          </div>
        </IframeRenderer>
      </div>
    </div>
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
              <li key={entry.text} className="flex gap-x-3 ">
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
