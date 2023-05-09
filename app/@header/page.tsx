import Image from 'next/image'
import LinkPrimary from '../components/LinkPrimary'
import Link from 'next/link'
import ButtonToggleMode from '../components/ButtonToggleMode'
import Github from '../components/Icons/Github'

const links = [
  {
    label: 'Showsace',
    href: '/feed'
  },
  {
    label: 'docs',
    href: 'https://beta.nextjs.org/docs',
    target: '_blank'
  }
]

export default function Page () {
  return (
    <header className='sticky backdrop-blur-lg top-0 z-40 py-4 px-8 -mt-1 mx-auto border-b-[1px]  bg-white bg-opacity-80 dark:bg-opacity-20 dark:bg-neutral-950 dark:border-neutral-900'>
      <div className='flex justify-between items-center max-w-screen-2xl m-auto'>
        <Link href='/' className='flex items-center gap-2 hover:opacity-90 transition-opacity'>
          <picture className='flex w-8 aspect-square'>
            <Image src='/sampxcs.svg' width={1000} height={1000} alt='sampxcs' className='w-full h-full' />
          </picture>
          <h2><span className='text-sky-500'>Next<small>.js</small> 13</span> &#183; Project</h2>
        </Link>
        <nav>
          <ul className='flex gap-4'>
            {links.map(({ label, href, target }, index) => (
              <li key={index}>
                <LinkPrimary href={href} target={target}>{label}</LinkPrimary>
              </li>
            ))}
            <li className='flex items-center justify-center'>
              <hr className='rotate-90 w-6 border-0 h-[0.5px] bg-neutral-700' />
            </li>
            <li className='flex items-center justify-center'>
              <ButtonToggleMode />
            </li>
            <li className='flex items-center justify-center'>
              <Link href='https://github.com/sampxcs/next.js-13' target='_blank' className='transition-opacity hover:opacity-80'>
                <Github width='1.5rem' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
