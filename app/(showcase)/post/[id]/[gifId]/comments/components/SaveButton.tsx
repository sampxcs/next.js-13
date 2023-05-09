'use client'

import SaveLight from '@/app/components/Icons/SaveLight'
import SaveSolid from '@/app/components/Icons/SaveSolid'
import { useState } from 'react'

export default function SaveButton () {
  const [save, setSave] = useState(false)
  const handleToggleSave = () => {
    setSave(prev => !prev)
  }

  return (
    <button
      onClick={handleToggleSave}
      className='p-1'
    >
      {save ? <SaveSolid width='.75rem' className='animate-fadeInUp' /> : <SaveLight width='.75rem' />}
    </button>
  )
}
