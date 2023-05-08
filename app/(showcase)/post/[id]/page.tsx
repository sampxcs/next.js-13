import Link from 'next/link'

export default async function PostPage ({ params }: any) {
  const { id } = params
  return <Link href={`/post/${id}/comments`} className='hover:text-sky-500'><small>See comments...</small></Link>
}
