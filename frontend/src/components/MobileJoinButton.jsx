import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MobileJoinButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 320)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 lg:hidden">
      <Link to="/join-us" className="flex min-h-12 items-center justify-center rounded-full bg-[#e4b85e] font-bold text-[#173d36] shadow-lg ring-1 ring-[#173d36]/10">
        <span aria-hidden="true">🤝</span><span className="ml-2">Join Us</span><span className="ml-2" aria-hidden="true">→</span>
      </Link>
    </div>
  )
}

export default MobileJoinButton