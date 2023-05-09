'use client'

import HeartLight from '@/app/components/Icons/HeartLight'
import HeartSolid from '@/app/components/Icons/HeartSolid'
import { useState } from 'react'

export default function LikeButton () {
  const [like, setLike] = useState(false)
  const handleToggleLike = () => {
    setLike(prev => !prev)
  }

  return (
    <button onClick={handleToggleLike} className='p-1'>
      {like ? <HeartSolid width='1rem' fill='red' className='animate-fadeInUp' /> : <HeartLight width='1rem' />}
    </button>
  )
}
