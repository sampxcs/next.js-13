import Spinner from '@/app/components/Spinner'

export default function Loading () {
  return (
    <div className='flex items-center justify-center absolute top-0 left-0 bottom-0 right-0'>
      <Spinner />
    </div>
  )
}
