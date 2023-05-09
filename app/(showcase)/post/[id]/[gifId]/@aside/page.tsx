import Profile from '../components/Profile'
import { getUserById } from '@/services/getUserById'
import { getPostById } from '@/services/getPostById'

export default async function Page ({ params }:any) {
  const { id } = params
  const postContent = await getPostById(id)
  const user = await getUserById(postContent.userId)

  return (
    <div className='flex flex-col gap-4 p-4 bg-light-black rounded-2xl'>
      {/* @ts-expect-error Async Server Component */}
      <Profile {...user} />
    </div>
  )
}
