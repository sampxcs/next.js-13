import Link from 'next/link'

export default async function PostPage ({ params }:any) {
  const { id, gifId } = params
  return <Link href={`/post/${id}/${gifId}/comments`} className='hover:text-sky-500'><small>See comments...</small></Link>
}
