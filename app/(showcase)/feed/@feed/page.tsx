'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { getPosts } from '@/services/getPosts'
import { getUsers } from '@/services/getUsers'
import { getGifs } from '@/services/getGifs'

import Article from '../../components/Article'

export default async function Page () {
  const params = useSearchParams()
  const query = params.get('search')
  const postsContents = await getPosts()
  const postsGifts = await getGifs(query || 'developer')
  const users = await getUsers()

  const posts = postsContents.slice(0, 50).map((post: any) => {
    return {
      ...post,
      user: users.filter((user: any) => parseInt(user.id) === parseInt(post.userId))[0],
      gif: postsGifts[post.id - 1]
    }
  })

  return (
    <ul className='flex flex-col gap-6'>
      {posts.map(({ id, title, body, user, gif } :any) => (
        <li key={id}>
          <Link href={`/post/${id}`} className='flex rounded-xl p-6 border-[1px] transition-colors border-transparent hover:bg-opacity-5 dark:hover:bg-opacity-20 hover:bg-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-600'>
            <Article title={title} body={body} user={user} gif={gif} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
