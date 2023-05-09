import { getGifById } from '@/services/getGifById'
import { getPostById } from '@/services/getPostById'
import { getUserById } from '@/services/getUserById'

import Article from '@/app/components/Article'
import BackLink from '@/app/components/BackLink'

export default async function Page ({ params }:any) {
  const { id, gifId } = params
  const postContent = await getPostById(id)
  const gif = await getGifById(gifId)
  const user = await getUserById(postContent.userId)

  const post = {
    ...postContent,
    user,
    gif
  }

  return (
    <div className='flex flex-col gap-2 max-w-screen-sm'>
      <div className='flex items-center gap-4 mb-2'>
        <BackLink /> Post
      </div>
      <Article title={post.title} body={post.body} user={user} gif={post.gif} />
    </div>
  )
}
