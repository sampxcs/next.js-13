'use client'

import ButtonSecundary from '@/app/components/ButtonSecundary'

export default function Error ({ error, reset }:any) {
  return (
    <div className='flex flex-col gap-2 items-center justify-center absolute top-0 left-0 bottom-0 right-0'>
      <h2 className='text-xl text-red-500'>Error: {error.message}</h2>
      <ButtonSecundary onClick={() => reset()}>Try again</ButtonSecundary>
    </div>
  )
}
