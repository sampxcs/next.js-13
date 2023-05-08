import Profile from '../components/Profile'
import { getUserById } from '@/services/getUserById'
import { getGifs } from '@/services/getGifs'
import { getPostById } from '@/services/getPostById'

export default async function Default ({ params }:any) {
  const { id } = params
  const postContent = await getPostById(id)
  const postsGifts = await getGifs()
  const user = await getUserById(postContent.userId)

  const post = {
    ...postContent,
    user,
    gif: postsGifts[postContent.id - 1]
  }

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Profile {...post} />
    </>
  )
}
