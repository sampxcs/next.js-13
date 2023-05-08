import Link from 'next/link'

export default function ButtonPrimary ({ href, children }: any) {
  return (
    <Link href={href} className='py-2 px-4 transition-colors rounded-md text-white hover:bg-sky-600 active:bg-sky-500 bg-sky-500 dark:hover:bg-sky-700 dark:active:bg-sky-500 '>{children}</Link>
  )
}
