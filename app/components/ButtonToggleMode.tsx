'use client'

import { useEffect, useState } from 'react'
import Moon from './Icons/Moon'
import Sun from './Icons/Sun'

export default function ButtonToggleMode () {
  const [theme, setTheme] = useState('light')

  const handleToggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setTheme('dark')
    }
  }

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [])

  return (
    <button onClick={handleToggleTheme} className='flex items-center w-12 p-1 rounded-3xl bg-opacity-10 transition-all justify-end dark:justify-start dark:bg-opacity-100 bg-[#101000]'>
      <span className='flex items-center justify-center w-5 aspect-square rounded-full text-neutral-500 dark:text-white bg-slate-100 dark:bg-sky-500'>
        {theme === 'light' ? <Moon width='.75rem' /> : <Sun width='.75rem' />}
      </span>
    </button>
  )
}
