import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'
import React, { useState } from 'react'
import Link from 'next/link'

function PricingCard1({ title, description, price, features }) {
  let router = useRouter()

  return (
    <>
      <div className="flex flex-1 grow flex-col justify-between gap-5 rounded-2xl border border-zinc-100 bg-white/50 p-6 dark:border-zinc-700/40 dark:bg-zinc-900/50 lg:rounded-t-2xl lg:rounded-b-none lg:first:mt-10 lg:first:rounded-l-2xl lg:first:rounded-tr-none lg:first:border-r-0 lg:last:mt-10 lg:last:rounded-r-2xl lg:last:rounded-tl-none lg:last:border-l-0">
        <div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-teal-500">
              {title}
            </h3>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </div>
          <div className="mt-5 text-base font-semibold ">
            <span className="text-2xl tracking-tight text-zinc-800 dark:text-zinc-100">
              € {price}
            </span>
            <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
              starting point
            </span>
          </div>
          <ul className="mt-5">
            {features.map((feature) => (
              <PricingFeatureItem feature={feature} key={feature} />
            ))}
          </ul>
        </div>
        <Button className="mt-5" onClick={() => router.replace('/#contact')}>
          Contact me
        </Button>
      </div>
    </>
  )
}

function PricingFeatureItem({ feature }) {
  return (
    <>
      <li className="inline-flex w-full items-center text-sm text-zinc-800 dark:text-zinc-400">
        <div className="relative -ml-1.5 mr-2 flex h-6 w-6 flex-none items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-400 ring-1 ring-zinc-300 dark:bg-zinc-500 dark:ring-zinc-600" />
        </div>
        {feature}
      </li>
    </>
  )
}

const webdevTiers = [
  {
    title: 'Templated Webflow',
    description: 'Webpages are produced using a Webflow template.',
    price: '1500',
    features: [
      'Reflecting brand identity',
      'Responsive and mobile-friendly',
      'Content management',
      'Basic search engine optimization',
      'Contact form possible',
    ],
  },
  {
    title: 'Custom Webflow',
    description: 'Webpages are made using custom Webflow programming.',
    price: '2500',
    features: [
      'All of templated webflow tier',
      'Unique and tailored design',
      'Enhanced scalability and flexibility',
      'Competitive advantage',
      '404 redirecting',
      'Photo sourcing help',
    ],
  },
  {
    title: 'Custom Composition',
    description:
      'All webpages are custom programmed to suit espacially your usecase.',
    price: '3000',
    features: [
      'All of custom webflow tier',
      'Highest possible customization',
      'Custom features and functionality',
      'Seampless integrations',
      'Growth opportunity',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Fabian Wassermann</title>
        <meta name="description" content="Services I provide at a glance." />
      </Head>

      <SimpleLayout
        title="All services I offer at a glance."
        intro="I offer multiple services using multiple technologies. Check them out!"
      >
        <ServicesBento />
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

function CodeIcon(props) {
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
      <path
        d="M10 12.5 8 15l2 2.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="m14 12.5 2 2.5-2 2.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M14 2v4a2 2 0 0 0 2 2h4"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function WrenchIcon(props) {
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
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SEOIcon(props) {
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
      <path
        d="m13 13.5 2-2.5-2-2.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="m21 21-4.3-4.3"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M9 8.5 7 11l2 2.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <circle
        cx="11"
        cy="11"
        r="8"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function AutomationIcon(props) {
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
      <path
        d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M9 13a4.5 4.5 0 0 0 3-4"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M6.003 5.125A3 3 0 0 0 6.401 6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M3.477 10.896a4 4 0 0 1 .585-.396"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M6 18a4 4 0 0 1-1.967-.516"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path d="M12 13h4" className="stroke-zinc-400 dark:stroke-zinc-500" />
      <path
        d="M12 18h6a2 2 0 0 1 2 2v1"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path d="M12 8h8" className="stroke-zinc-400 dark:stroke-zinc-500" />
      <path
        d="M16 8V5a2 2 0 0 1 2-2"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <circle
        cx="16"
        cy="13"
        r=".5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <circle
        cx="18"
        cy="3"
        r=".5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <circle
        cx="20"
        cy="21"
        r=".5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <circle
        cx="20"
        cy="8"
        r=".5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ServicesBento() {
  let router = useRouter()

  return (
    <div className="grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
      <Link
        className="group relative text-left transition-all lg:col-span-3"
        href="/services/webdesign"
      >
        <div className="absolute inset-0 rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] bg-white/50 ring-1 ring-zinc-100 group-hover:ring-teal-500 dark:bg-zinc-900/50 dark:ring-zinc-700/40 dark:group-hover:ring-teal-400 max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
          {/* <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png"
            className="h-80 object-cover object-left"
          /> */}

          <div className="p-8 pt-4">
            {/* <h3 className="text-sm/4 font-semibold">Performance</h3> */}
            <div className="mt-2 flex items-center gap-2">
              <GlobeIcon className="h-6 w-6 flex-none" />
              <p className="text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                Webdesign and Development
              </p>
            </div>
            <p className="text-sm/6 mt-2 max-w-lg text-zinc-600 dark:text-zinc-400">
              From responsive design to interactive features, I create visually
              appealing and functional websites tailored to your needs. Elevate
              your online presence with a user-friendly and engaging website.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-black/5 group-hover:outline-teal-500/30 dark:outline-white/5 dark:group-hover:outline-teal-400/30 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
      </Link>
      <button
        className="group relative text-left lg:col-span-3"
        onClick={() => router.replace('/#contact')}
      >
        <div className="absolute inset-0 rounded-lg lg:rounded-tr-[2rem]" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] bg-white/50 ring-1 ring-zinc-100 group-hover:ring-teal-500 dark:bg-zinc-900/50 dark:ring-zinc-700/40 dark:group-hover:ring-teal-400 lg:rounded-tr-[calc(2rem+1px)]">
          {/* <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
            className="h-80 object-cover object-left lg:object-right"
          /> */}

          <div className="p-8 pt-4">
            {/* <h3 className="text-sm/4 font-semibold text-zinc-900 dark:text-zinc-100">
              Releases
            </h3> */}
            <div className="mt-2 flex items-center gap-2">
              <CodeIcon className="h-6 w-6 flex-none" />
              <p className="text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                Software Development
              </p>
            </div>
            <p className="text-sm/6 mt-2 max-w-lg text-zinc-600 dark:text-zinc-400">
              High-quality software solutions tailored to your unique business
              requirements. From concept to deployment, I ensure the software is
              robust, user-friendly, and built to grow with you.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-black/5 group-hover:outline-teal-500/30 dark:outline-white/5 dark:group-hover:outline-teal-400/30 lg:rounded-tr-[2rem]" />
      </button>
      <button
        className="group relative text-left lg:col-span-2"
        onClick={() => router.replace('/#contact')}
      >
        <div className="absolute inset-0 rounded-lg lg:rounded-bl-[2rem]" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] bg-white/50 ring-1 ring-zinc-100 group-hover:ring-teal-500 dark:bg-zinc-900/50 dark:ring-zinc-700/40 dark:group-hover:ring-teal-400 lg:rounded-bl-[calc(2rem+1px)]">
          {/* <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
            className=" object-cover"
          /> */}

          <div className="p-8 pt-4">
            {/* <h3 className="text-sm/4 font-semibold text-indigo-600">Speed</h3> */}
            <div className="mt-2 flex items-center gap-2">
              <WrenchIcon className="h-6 w-6 flex-none" />
              <p className="text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                Website Maintenance
              </p>
            </div>
            <p className="text-sm/6 mt-2 max-w-lg text-zinc-600 dark:text-zinc-400">
              With my monthly support services, I&apos;ll take care of all your
              web maintainance needs, making it easy for you to focus on what
              you do best.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-black/5 group-hover:outline-teal-500/30 dark:outline-white/5 dark:group-hover:outline-teal-400/30 lg:rounded-bl-[2rem]" />
      </button>
      <button
        className="group relative text-left lg:col-span-2"
        onClick={() => router.replace('/#contact')}
      >
        <div className="absolute inset-0 rounded-lg " />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] bg-white/50 ring-1 ring-zinc-100 group-hover:ring-teal-500 dark:bg-zinc-900/50 dark:ring-zinc-700/40 dark:group-hover:ring-teal-400">
          {/* <Image src={image} className="h-80 object-cover" /> */}

          <div className="p-8 pt-4">
            {/* <h3 className="text-sm/4 font-semibold text-indigo-600">
              Integrations
            </h3> */}
            <div className="mt-2 flex items-center gap-2">
              <SEOIcon className="h-6 w-6 flex-none" />
              <p className="text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                SEO Optimization
              </p>
            </div>
            <p className="text-sm/6 mt-2 max-w-lg text-zinc-600 dark:text-zinc-400">
              From on-page optimization to keyword research and performance
              tracking, I help drive organic traffic and boost your online
              presence.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-black/5 group-hover:outline-teal-500/30 dark:outline-white/5 dark:group-hover:outline-teal-400/30" />
      </button>
      <button
        className="group relative text-left lg:col-span-2"
        onClick={() => router.replace('/#contact')}
      >
        <div className="absolute inset-0 rounded-lg  max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] bg-white/50 ring-1 ring-zinc-100 group-hover:ring-teal-500 dark:bg-zinc-900/50 dark:ring-zinc-700/40 dark:group-hover:ring-teal-400 max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
          {/* <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-02-integrations.png"
            className="h-80 object-cover"
          /> */}

          <div className="p-8 pt-4">
            {/* <h3 className="text-sm/4 font-semibold text-indigo-600">Network</h3> */}
            <div className="mt-2 flex items-center gap-2">
              <AutomationIcon className="h-6 w-6 flex-none" />
              <p className="text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                Automation Solutions
              </p>
            </div>
            <p className="text-sm/6 mt-2 max-w-lg text-zinc-600 dark:text-zinc-400">
              Automation workflows to streamline repetitive tasks and improve
              efficiency. Help businesses save time, reduce errors, and boost
              productivity.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-lg shadow outline outline-black/5 group-hover:outline-teal-500/30 dark:outline-white/5 dark:group-hover:outline-teal-400/30 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
      </button>
    </div>
  )
}

function CTASection() {
  let router = useRouter()

  return (
    <div className="mt-28 lg:flex lg:items-center lg:justify-between">
      <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
        Let&apos;s Connect
        <br />
        Start our project today
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

function OLD() {
  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Website development
        </h2>
        <p className="relative z-10 mt-2 max-w-[80%] text-sm text-zinc-600 dark:text-zinc-400">
          I am a professional website developer offing the service of
          implementing a webdesign. From responsive design to interactive
          features, I create visually appealing and functional websites tailored
          to your needs. Elevate your online presence with a user-friendly and
          engaging website. Contact me today to discuss your project!
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-0">
        {webdevTiers.map((tier) => (
          <PricingCard1
            title={tier.title}
            description={tier.description}
            price={tier.price}
            features={tier.features}
            key={tier.title}
          />
        ))}
      </div>

      <div className="mt-32">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Website hosting and support
        </h2>
        <p className="relative z-10 mt-2 max-w-[80%] text-sm text-zinc-600 dark:text-zinc-400">
          Looking for reliable web hosting and top-notch support? Look no
          further! I offer comprehensive web hosting services and dedicated
          support for both new and existing websites. Whether you&apos;re
          starting a new website or need reliable hosting and support for your
          existing one, I have the expertise and resources to meet your needs.
          Focus on your core business while we handle the technical aspects.
          Contact me today to discuss your web hosting and support requirements!
        </p>
      </div>

      <div className="mt-12 flex flex-col justify-between gap-5 rounded-2xl border border-zinc-100 bg-white/50 p-2 dark:border-zinc-700/40  dark:bg-zinc-900/50 lg:flex-row">
        <div className="p-5">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-teal-500">
              Monthly support
            </h3>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Web hosting can be daunting, especially when starting out. But
              fear not, I&apos;m here to help! With my monthly support services,
              I&apos;ll take care of all your web hosting needs, making it easy
              for you to focus on what you do best.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-x-4">
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                What&apos;s included
              </h3>
              <div className="h-px flex-auto dark:bg-zinc-100/10" />
            </div>
            <div className="mt-3 grid grid-cols-2">
              <ul>
                <PricingFeatureItem feature="Server configuration" />
                <PricingFeatureItem feature="Domain management" />
                <PricingFeatureItem feature="Security enhancements" />
              </ul>
              <ul>
                <PricingFeatureItem feature="Look for optimization" />
                <PricingFeatureItem feature="Analytics and reporting" />
                <PricingFeatureItem feature="Content delivery optimization" />
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-zinc-100 bg-white/50 py-10 px-16 dark:border-zinc-700/40 dark:bg-zinc-900/50">
          <h3 className="text-center text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Get assistance now
          </h3>
          <div className="mt-5 truncate text-center text-base font-semibold">
            <span className="text-4xl tracking-tight text-zinc-800 dark:text-zinc-100">
              € 100
            </span>
            <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">
              / month
            </span>
          </div>
          <Button
            className="mt-8 w-full"
            onClick={() => router.replace('/#contact')}
          >
            Contact me
          </Button>
          <p className="mt-2 text-center text-[0.7rem] text-zinc-600 dark:text-zinc-400">
            * Final price depends on needs
          </p>
        </div>
      </div>
    </div>
  )
}
