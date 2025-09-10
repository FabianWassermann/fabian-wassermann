import { useEffect, useRef, useState } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { isMobile } from '@/lib/isMobile'
import '@/lib/i18n'
import i18next from 'i18next'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

async function setupBlob() {
  const blobElement = document.getElementById('blob')

  // Import GSAP dynamically
  const { gsap } = await import('gsap')

  // Set initial state - hidden and scaled down
  gsap.set(blobElement, {
    opacity: 0,
    scale: 0.5,
  })

  // Show the blob element
  blobElement.classList.add('!block')

  // Animate blob in
  gsap.to(blobElement, {
    opacity: 0.4,
    scale: 1,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.3, // Small delay after loading screen exits
  })

  // Add continuous morphing animation to the blob (start after entrance)
  gsap.to(blobElement, {
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
    delay: 1.5, // Start morphing after entrance animation
  })

  window.onclick = (e) => {
    gsap.to(blobElement, {
      scale: 0.8,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out',
    })
  }

  window.onmousemove = (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const widthOfContentBack =
      document.getElementById('content-back').clientWidth
    const diff = (window.innerWidth - widthOfContentBack) / 2

    gsap.to(blobElement, {
      top: `${mouseY - 50}px`,
      left: `${Math.min(
        Math.max(mouseX - diff - 50, -50),
        widthOfContentBack - 50
      )}px`,
      duration: 1.5,
      ease: 'power2.out',
    })
  }
}

// Loading component
function LoadingScreen({ progress = 0, loadingScreenRef }) {
  return (
    <div
      ref={loadingScreenRef}
      className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-900"
    >
      <p className="animate-pulse text-lg font-semibold text-zinc-600 dark:text-zinc-400">
        Loading...
      </p>
    </div>
  )
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)
  const contentBackContainerRef = useRef(null)
  const loadingScreenRef = useRef(null)
  const hasAnimated = useRef(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingScreenExiting, setIsLoadingScreenExiting] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Ensure i18n language matches Next.js locale BEFORE first render
  if (router?.locale && i18next.language !== router.locale) {
    i18next.changeLanguage(router.locale)
  }

  useEffect(() => {
    if (router?.locale && i18next.language !== router.locale) {
      i18next.changeLanguage(router.locale)
    }
  }, [router?.locale])

  // Loading timer - load necessary JS during loading time
  useEffect(() => {
    const loadDependencies = async () => {
      try {
        setLoadingProgress(10)

        // Load GSAP and plugins dynamically
        const gsapModule = await import('gsap')
        setLoadingProgress(30)

        const scrollTriggerModule = await import('gsap/ScrollTrigger')
        setLoadingProgress(50)

        const splitTextModule = await import('gsap/SplitText')
        setLoadingProgress(70)

        // Register GSAP plugins
        if (gsapModule.gsap && scrollTriggerModule.ScrollTrigger) {
          gsapModule.gsap.registerPlugin(scrollTriggerModule.ScrollTrigger)
        }
        setLoadingProgress(85)

        // Load other heavy dependencies if needed
        // You can add more dynamic imports here for other heavy modules

        // Ensure minimum loading time of 1 second for smooth UX
        const minLoadingTime = new Promise((resolve) =>
          setTimeout(resolve, 1000)
        )

        await minLoadingTime
        setLoadingProgress(100)

        // Small delay to show 100% progress, then start loading screen exit animation
        setTimeout(() => {
          setIsLoadingScreenExiting(true)
        }, 200)
      } catch (error) {
        console.error('Error loading dependencies:', error)
        setLoadingProgress(100)
        // Still start loading screen exit after minimum time even if there's an error
        setTimeout(() => {
          setIsLoadingScreenExiting(true)
        }, 1000)
      }
    }

    loadDependencies()
  }, [])

  // Loading screen exit animation
  useEffect(() => {
    if (!isLoadingScreenExiting || !loadingScreenRef.current) return

    const animateLoadingScreenOut = async () => {
      try {
        // Import GSAP dynamically
        const { gsap } = await import('gsap')

        const loadingScreenElement = loadingScreenRef.current

        // Animate loading screen out
        gsap.to(loadingScreenElement, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            setIsLoading(false)
            // Setup blob animation after loading screen exits
            if (!isMobile()) {
              setupBlob()
            }
          },
        })
      } catch (error) {
        console.error('Error animating loading screen out:', error)
        setIsLoading(false)
      }
    }

    animateLoadingScreenOut()
  }, [isLoadingScreenExiting])

  // Content-back animation on first load (after loading is complete)
  useEffect(() => {
    if (isLoading || hasAnimated.current || !contentBackContainerRef.current)
      return

    const animateContentBack = async () => {
      try {
        // Import GSAP dynamically
        const { gsap } = await import('gsap')

        const contentBackElement = contentBackContainerRef.current
        const parentContainer = contentBackElement.parentElement

        // Calculate the difference between full viewport width and constrained width
        const viewportWidth = window.innerWidth
        const constrainedWidth = parentContainer.offsetWidth
        const widthDifference = viewportWidth - constrainedWidth

        // Set initial state - positioned to take full screen width
        gsap.set(contentBackElement, {
          width: '100vw',
          x: -widthDifference / 2, // Center the full-width element
        })

        // Animate to constrained width
        gsap.to(contentBackElement, {
          width: '80rem',
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          onComplete: () => {
            hasAnimated.current = true
            // Clean up any transform properties
            gsap.set(contentBackElement, { clearProps: 'transform' })
          },
        })
      } catch (error) {
        console.error('Error animating content-back:', error)
        hasAnimated.current = true
      }
    }

    animateContentBack()
  }, [isLoading])

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div ref={contentBackContainerRef} className="flex w-full lg:px-8">
          <div
            className="relative w-full overflow-hidden bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
            id="content-back"
          >
            <div
              className="absolute hidden bg-gray-700 dark:bg-gray-400"
              id="blob"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                overflow: 'hidden',
                filter: 'blur(40px)',
                opacity: '0.4',
              }}
            ></div>
            {(isLoading || isLoadingScreenExiting) && (
              <LoadingScreen
                progress={loadingProgress}
                loadingScreenRef={loadingScreenRef}
              />
            )}
          </div>
        </div>
      </div>
      {!isLoading && (
        <div className="relative">
          <Header />
          <main>
            <Component previousPathname={previousPathname} {...pageProps} />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
