import Link from 'next/link'

export default function ButtonSecundary ({ href, target, onClick, children }: any) {
  if (href) {
    return (
      <Link href={href} target={target} className='py-2 px-4 transition-colors rounded-md hover:bg-opacity-20 dark:hover:bg-opacity-20 hover:bg-sky-500 dark:hover:bg-sky-950 hover:text-sky-500 active:bg-opacity-40'>{children}</Link>
    )
  }
  return (<button onClick={onClick} className='py-2 px-4 transition-colors rounded-md hover:bg-opacity-20 dark:hover:bg-opacity-20 hover:bg-sky-500 dark:hover:bg-sky-950 hover:text-sky-500 active:bg-opacity-40'>{children}</button>)
}
