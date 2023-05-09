import ButtonPrimary from './components/ButtonPrimary'
import ButtonSecundary from './components/ButtonSecundary'
import { Source_Code_Pro as Code } from 'next/font/google'

const code = Code({ subsets: ['latin'], weight: '400' })

export default function HomePage () {
  return (
    <>
      <section className='flex flex-col gap-16 items-center p-8 w-full h-[70vh]'>
        <h1 className='text-4xl text-center mb-16'>
          Next<small>.js</small> 13 <span className='dark:text-neutral-400'>&#183;</span> <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Tailwind.css</span>
        </h1>
        <h2 className='text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500'>
          The React Framework for the Web
        </h2>
        <p className='text-center dark:text-neutral-400'>Used by some of the world's largest companies, Next.js enables you to create <strong className='dark:text-white'>full-stack Web applications</strong> by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.</p>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex gap-4'>
            <ButtonPrimary href='/posts'>Get Started</ButtonPrimary>
            <ButtonSecundary href='https://nextjs.org/' target='_blank'>Lear Next.js</ButtonSecundary>
          </div>
          <div className={`${code.className} text-sm px-2 py-1 rounded-md bg-opacity-5 dark:bg-opacity-20 shadow-2xl bg-black`}> ~ npx create-next-app@latest</div>
        </div>
      </section>
      <div className='absolute animate-fadeIn bottom-0 left-0 -z-50 w-[75vh] aspect-square rounded-tl-full blur-[20rem] bg-violet-100 dark:bg-violet-600 dark:bg-opacity-20' />
      <div className='absolute animate-fadeIn bottom-0 right-0 -z-50 w-[75vh] aspect-square rounded-tl-full blur-[20rem] bg-sky-100 dark:bg-sky-600 dark:bg-opacity-20' />
    </>
  )
}
