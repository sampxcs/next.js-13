import Article from '../../components/Article'
import Aside from '../../../components/Aside'
import BackLink from '@/app/components/BackLink'
import { getUserById } from '@/services/getUserById'
import { getGifs } from '@/services/getGifs'
import { getPostById } from '@/services/getPostById'

export default async function Layout ({ params, children, aside }: any) {
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
    <section className='flex gap-8'>
      <div className='flex flex-col gap-2 max-w-screen-sm'>
        <div className='flex items-center gap-4 mb-2'>
          <BackLink /> Post
        </div>
        <Article title={post.title} body={post.body} user={user} gif={post.gif} />
        {children}
      </div>
      <Aside>
        {aside}
      </Aside>
    </section>
  )
}
