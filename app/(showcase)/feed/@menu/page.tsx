'use client'

import MagnifyingGlass from '@/app/components/Icons/MagnifyingGlass'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'

const links = [
  {
    label: 'Trending',
    pathname: '/feed',
    query: { search: 'trending' }

  },
  {
    label: 'Developers',
    pathname: '/feed',
    query: { search: 'developers' }

  },
  {
    label: 'Tecnology',
    pathname: '/feed',
    query: { search: 'tecnology' }

  },
  {
    label: 'Star Wars',
    pathname: '/feed',
    query: { search: 'star-wars' }
  },
  {
    label: 'Robots',
    pathname: '/feed',
    query: { search: 'Robots' }

  },
  {
    label: 'Artificial Intelligence',
    pathname: '/feed',
    query: { search: 'artificial-intelligence' }

  },
  {
    label: 'Cats',
    pathname: '/feed',
    query: { search: 'cats' }

  }
]

export default function Page () {
  const router = useRouter()
  const params = useSearchParams()
  const paramQuery = params.get('search')

  const handleSearch = (event:any) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new FormData(event.target))
    router.push(`/feed?search=${query}`)
    event.target.reset()
  }

  return (
    <div className='flex flex-col gap-4'>
      <form className='flex rounded-md overflow-hidden' onSubmit={handleSearch}>
        <input type='text' name='query' placeholder='Search...' className='w-full px-3 outline-none bg-neutral-800' />
        <button className='flex items-center justify-center p-3 bg-neutral-800'><MagnifyingGlass width='1rem' /></button>
      </form>
      <div className='flex flex-col gap-1'>
        <h2 className='text-2xl px-3 font-semibold'>Categories</h2>
        <ul className='flex flex-col gap-1'>
          {links.map(({ label, pathname, query }, i) => (
            <li key={i}>
              <Link
                href={{ pathname, query }}
                className={`flex items-center relative text-xl gap-1 py-2 px-3 rounded-sm hover:bg-opacity-10 hover:text-sky-500 hover:bg-sky-950 
              ${query.search === paramQuery && 'bg-opacity-10 text-sky-500 bg-sky-950 before:block before:absolute before:bg-sky-500 before:bg-opacity-75 before:w-1 before:h-1/2 before:rounded-2xl before:left-0'}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
