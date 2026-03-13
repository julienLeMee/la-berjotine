import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className='fixed bottom-0 z-[200] bg-white border-t border-gray-200 shadow-lg py-4 flex flex-col sm:flex-row items-center justify-between gap-4' style={{ left: '1rem', right: '1rem', marginBottom: '1rem' }}>
      <p className='text-sm text-gray-600 text-center sm:text-left px-6'>
        Ce site utilise des cookies pour améliorer votre expérience.{' '}
        <Link href='/politique-de-cookies' className='underline text-[#01647C] hover:text-[#014f63]'>
          En savoir plus
        </Link>
      </p>
      <div className='flex gap-3 shrink-0 pr-6'>
        <button
          onClick={decline}
          className='px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-150'
        >
          Refuser
        </button>
        <button
          onClick={accept}
          className='px-4 py-2 text-sm rounded-lg bg-[#01647C] text-white hover:bg-[#014f63] transition-colors duration-150'
        >
          Accepter
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
