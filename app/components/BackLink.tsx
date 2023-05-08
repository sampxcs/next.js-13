'use client'

import ArrowLeft from '@/app/components/Icons/ArrowLeft'
import { useRouter } from 'next/navigation'

export default function BackLink () {
  const router = useRouter()
  return (
    <button onClick={() => router.back()} title='back' className='flex items-center justify-center w-8 aspect-square rounded-full transition-colors hover:bg-opacity-10 hover:bg-sky-950 hover:text-sky-500'><ArrowLeft width='.75rem' /></button>
  )
}
