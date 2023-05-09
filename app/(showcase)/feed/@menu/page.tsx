'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const links = [
  {
    label: 'Routing',
    pathname: '/feed',
    query: { search: 'routing' }

  },
  {
    label: 'Data Fetching',
    pathname: '/feed',
    query: { search: 'data-fetching' }
  },
  {
    label: 'Styling',
    pathname: '/feed',
    query: { search: 'styling' }

  },
  {
    label: 'Typescript',
    pathname: '/feed',
    query: { search: 'typescript' }

  },
  {
    label: 'API Reference',
    pathname: '/feed',
    query: { search: 'api' }

  },
  {
    label: 'Cats',
    pathname: '/feed',
    query: { search: 'cats' }

  }
]

export default function Page () {
  const params = useSearchParams()
  const paramQuery = params.get('search')

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-xl font-semibold'>Categories</h2>
      <ul className='flex flex-col gap-1'>
        {links.map(({ label, pathname, query }, i) => (
          <li key={i}>
            <Link
              href={{ pathname, query }}
              className={`flex items-center gap-1 px-2 py-1 rounded-sm hover:bg-opacity-10 hover:text-sky-500 hover:bg-sky-950 
              ${query.search === paramQuery && 'bg-opacity-10 text-sky-500 bg-sky-950'}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
