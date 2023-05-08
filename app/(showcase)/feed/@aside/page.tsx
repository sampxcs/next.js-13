import ArrowUpRightFromSquare from '@/app/components/Icons/ArrowUpRightFromSquare'
import Link from 'next/link'

export default async function Page () {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2 p-4 bg-light-black rounded-2xl'>
        <h2 className='text-xl font-semibold'>What is Next.js?</h2>
        <p>Next.js is a framework for building web applications. </p>
        <p>With Next.js, you can build user interfaces using React components. Then, Next.js provides additional structure, features, and optimizations for your application.</p>
        <p>Under the hood, Next.js also abstracts and automatically configures tooling for you, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time setting up tooling.</p>
        <p>Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast web applications.</p>
      </div>
      <div className='flex flex-col gap-2 p-4 bg-light-black rounded-2xl'>
        <h2 className='text-xl font-semibold'>Main Features</h2>
        <ul className='flex flex-col gap-2'>
          <li className='flex flex-col gap-1'>
            <Link
              href='https://nextjs.org/docs/app/building-your-application/routing'
              target='_blank'
              className='flex items-center gap-1 hover:text-sky-500'
            >
              Routing <ArrowUpRightFromSquare width='.75rem' />
            </Link>
            <small className='text-xs'>A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.</small>
          </li>
          <li className='flex flex-col gap-1'>
            <Link
              href='https://nextjs.org/docs/app/building-your-application/data-fetching'
              target='_blank'
              className='flex items-center gap-1 hover:text-sky-500'
            >
              Data Fetching <ArrowUpRightFromSquare width='.75rem' />
            </Link>
            <small className='text-xs'>Simplified data fetching with async/await support in React Components and the fetch()s API that aligns with React and the Web Platform.</small>
          </li>
          <li className='flex flex-col gap-1'>
            <Link
              href='https://nextjs.org/docs/app/building-your-application/styling'
              target='_blank'
              className='flex items-center gap-1 hover:text-sky-500'
            >
              Styling <ArrowUpRightFromSquare width='.75rem' />
            </Link>
            <small className='text-xs'>Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS</small>
          </li>
          <li className='flex flex-col gap-1'>
            <Link
              href='https://nextjs.org/docs/app/building-your-application/optimizing'
              target='_blank'
              className='flex items-center gap-1 hover:text-sky-500'
            >
              Optimizations <ArrowUpRightFromSquare width='.75rem' />
            </Link>
            <small className='text-xs'>Improved Image Component with native browser lazy loading. New Font Module with automatic font optimization.</small>
          </li>
          <li className='flex flex-col gap-1'>
            <Link
              href='https://nextjs.org/docs/app/building-your-application/configuring/typescript'
              target='_blank'
              className='flex items-center gap-1 hover:text-sky-500'
            >
              Typescript <ArrowUpRightFromSquare width='.75rem' />
            </Link>
            <small className='text-xs'>Improved support for TypeScript, with better type checking and more efficient compilation, as well as support for optional chaining and nullish coalescing.</small>
          </li>
          <li className='flex flex-col gap-1'>
            <Link
              href='https://nextjs.org/docs/app/api-reference'
              target='_blank'
              className='flex items-center gap-1 hover:text-sky-500'
            >
              API Reference <ArrowUpRightFromSquare width='.75rem' />
            </Link>
            <small className='text-xs'>Updates to the API design throughout Next.js. Please refer to the API Reference Section for new APIs.</small>
          </li>
        </ul>
      </div>
    </div>
  )
}
