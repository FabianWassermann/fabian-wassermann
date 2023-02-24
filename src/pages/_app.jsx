import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value;

    window.onmousemove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const widthOfContentBack = document.getElementById("content-back").clientWidth;
      const diff = (window.innerWidth - widthOfContentBack) / 2;

      document.getElementById("blob")
        .animate(
          [
            { top: `${mouseY - 75}px`, left: `${mouseX - diff - 75}px` }
          ], 
          { fill: "forwards", duration: 1500 }
        );
    }
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full relative bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 overflow-hidden" id="content-back">
            <div className="absolute bg-gray-700 dark:bg-gray-400" id="blob" style={{
              width: "150px",
              height: "150px",
              borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
              overflow: "hidden",
              filter: "blur(50px)",
              opacity: "0.4"
            }}>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
