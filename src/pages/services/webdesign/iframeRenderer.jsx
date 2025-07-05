import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

const TAILWIND_CDN = 'https://cdn.tailwindcss.com'

const radiusMapping = {
  circle: '9999px',
  round: '0.5rem',
  square: '0px',
}

export default function Blank() { 
  return (
    <span></span>
  )
}

export const IframeRenderer = ({ children, ...iframeProps }) => {
  const iframeRef = useRef(null)
  const scriptConfRef = useRef(null)
  const [mountNode, setMountNode] = useState(null)

  const { colorHex, fontFamily, radius, ...restProps } = iframeProps

  useEffect(() => {
    const iframe = iframeRef.current

    const handleLoad = () => {
      const doc = iframe.contentDocument || iframe.contentWindow.document

      const scale = 0.9

      doc.documentElement.style.transform = `scale(${scale})`
      doc.documentElement.style.transformOrigin = 'top left'

      const per = (1 / scale) * 100

      doc.documentElement.style.width = `${per}%` // 1/0.8 = 1.25
      doc.documentElement.style.height = `${per}%`

      doc.documentElement.style.overflow = 'hidden'

      if (fontFamily) doc.documentElement.style.fontFamily = fontFamily

      const existingScript = doc.head.querySelector(
        `script[src="${TAILWIND_CDN}"]`
      )
      if (!existingScript) {
        const script = doc.createElement('script')
        script.src = TAILWIND_CDN
        script.onload = () => {
          const scriptConf = doc.createElement('script')
          scriptConfRef.current = scriptConf
          scriptConf.textContent = `
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                primary: ${JSON.stringify(generateColorScale(colorHex))}
              }
            },
            borderRadius: {
             'none': '0',
              'sm': '0.125rem',
              DEFAULT: '0.25rem',
              'md': "${radiusMapping[radius]}",
              'lg':  "${radiusMapping[radius]}",
              'full': "${radiusMapping[radius]}",
            }
          }
        }  
      `
          doc.head.appendChild(scriptConf)

          // 2. Create a mount node
          const mount = doc.createElement('div')
          doc.body.appendChild(mount)
          setMountNode(mount)
        }
        doc.head.appendChild(script)
      } else if (scriptConfRef.current) {
        scriptConfRef.current.remove()

        const scriptConf = doc.createElement('script')
        scriptConfRef.current = scriptConf
        scriptConf.textContent = `
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                primary: ${JSON.stringify(generateColorScale(colorHex))}
              }
            },
            borderRadius: {
             'none': '0',
              'sm': '0.125rem',
              DEFAULT: '0.25rem',
              'md': "${radiusMapping[radius]}",
              'lg':  "${radiusMapping[radius]}",
              'full': "${radiusMapping[radius]}",
            }
          }
        }  
      `
        doc.head.appendChild(scriptConf)
      }
    }

    // Wait for iframe to be ready
    if (iframe && iframe.contentDocument?.readyState === 'complete') {
      handleLoad()
    } else {
      iframe.addEventListener('load', handleLoad)
      return () => iframe.removeEventListener('load', handleLoad)
    }
  }, [colorHex, fontFamily, radius])

  const reactRootRef = useRef(null)

  useEffect(() => {
    if (mountNode && children) {
      if (!reactRootRef.current) {
        reactRootRef.current = ReactDOM.createRoot(mountNode)
      }
      reactRootRef.current.render(children)
    }
  }, [mountNode, children])

  useEffect(() => {
    return () => {
      // Clean up on component unmount only
      if (reactRootRef.current) {
        reactRootRef.current.unmount()
        reactRootRef.current = null
      }
    }
  }, [])

  return <iframe ref={iframeRef} {...restProps} />
}

function generateColorScale(baseHex) {
  // Convert hex to HSL
  function hexToHSL(hex) {
    hex = hex.replace('#', '')
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((c) => c + c)
        .join('')
    }
    const r = parseInt(hex.substr(0, 2), 16) / 255
    const g = parseInt(hex.substr(2, 2), 16) / 255
    const b = parseInt(hex.substr(4, 2), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h, s, l
    l = (max + min) / 2

    if (max === min) {
      h = s = 0 // achromatic
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h = h * 60
    }

    return [h, s * 100, l * 100]
  }

  // Convert HSL back to hex
  function hslToHex(h, s, l) {
    s /= 100
    l /= 100
    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
    const m = l - c / 2
    let r = 0,
      g = 0,
      b = 0

    if (h < 60) [r, g, b] = [c, x, 0]
    else if (h < 120) [r, g, b] = [x, c, 0]
    else if (h < 180) [r, g, b] = [0, c, x]
    else if (h < 240) [r, g, b] = [0, x, c]
    else if (h < 300) [r, g, b] = [x, 0, c]
    else [r, g, b] = [c, 0, x]

    const toHex = (n) => {
      const hex = Math.round((n + m) * 255).toString(16)
      return hex.padStart(2, '0')
    }

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  const [h, s, l] = hexToHSL(baseHex)

  const steps = {
    50: 95,
    100: 90,
    200: 80,
    300: 70,
    400: 60,
    500: 50,
    600: 40,
    700: 30,
    800: 22,
    900: 15,
    950: 8,
  }

  const scale = {}
  for (const [key, lightness] of Object.entries(steps)) {
    scale[key] = hslToHex(h, s, lightness)
  }

  return scale
}
