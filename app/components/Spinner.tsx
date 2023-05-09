export default function Spinner () {
  return (
    <div className='flex items-center justify-center p-4'>
      <div className='w-6 aspect-square bg-red rounded-full border-2 border-solid dark:border-sky-950 dark:border-l-sky-500 dark:border-t-sky-500 border-l-sky-500 border-t-sky-500 animate-spin' />
    </div>
  )
}
