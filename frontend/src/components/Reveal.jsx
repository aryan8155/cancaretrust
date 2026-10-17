import { useEffect, useRef, useState } from 'react'

function Reveal({ children }) {
  const [visible, setVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.08 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={elementRef} className={`reveal ${visible ? 'reveal-visible' : ''}`}>{children}</div>
}

export default Reveal