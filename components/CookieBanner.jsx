import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Le choix est uniquement disponible côté navigateur après l’hydratation.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!localStorage.getItem('cookie-consent')) setVisible(true)
  }, [])

  const saveChoice = (choice) => {
    localStorage.setItem('cookie-consent', choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className='fixed bottom-4 left-4 right-4 z-[200] mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-[#18312f]/10 bg-white/95 p-5 shadow-[0_20px_70px_rgba(24,49,47,0.2)] backdrop-blur-xl sm:flex-row sm:justify-between sm:p-6'>
      <p className='text-center text-sm leading-6 text-[#65716d] sm:text-left'>Ce site mémorise uniquement votre choix de cookies. <Link href='/politique-de-cookies' className='font-semibold text-[#096b79] underline underline-offset-4'>En savoir plus</Link></p>
      <div className='flex shrink-0 gap-2'>
        <button type='button' onClick={() => saveChoice('declined')} className='rounded-full border border-[#18312f]/15 px-5 py-2.5 text-sm font-semibold transition hover:bg-[#f7f4ee]'>Refuser</button>
        <button type='button' onClick={() => saveChoice('accepted')} className='button-primary px-5 py-2.5'>Accepter</button>
      </div>
    </div>
  )
}

export default CookieBanner
