import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'
import React, { useState } from 'react'

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
    price: '1000',
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
    price: '1800',
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
    price: '2500',
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
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            Website development
          </h2>
          <p className="relative z-10 mt-2 max-w-[80%] text-sm text-zinc-600 dark:text-zinc-400">
            I am a professional website developer offing the service of
            implementing a webdesign. From responsive design to interactive
            features, I create visually appealing and functional websites
            tailored to your needs. Elevate your online presence with a
            user-friendly and engaging website. Contact me today to discuss your
            project!
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
            support for both new and existing websites. Whether you're starting
            a new website or need reliable hosting and support for your existing
            one, I have the expertise and resources to meet your needs. Focus on
            your core business while we handle the technical aspects. Contact me
            today to discuss your web hosting and support requirements!
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
                fear not, I&apos;m here to help! With my monthly support
                services, I&apos;ll take care of all your web hosting needs,
                making it easy for you to focus on what you do best.
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
      </SimpleLayout>
    </>
  )
}
