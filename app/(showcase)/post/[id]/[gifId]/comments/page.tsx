import Image from 'next/image'
import LikeButton from './components/LikeButton'
import SaveButton from './components/SaveButton'

const getComments = async (id:number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  return res.json()
}

export default async function PostCommentsPage ({ params }: any) {
  const { id } = params
  const comments = await getComments(id)

  return (
    <ul className='flex flex-col mt-4 animate-fadeInUp'>
      {comments.map(({ id, name, email, body }: any) =>
        <li key={id} className='flex flex-col gap-0 p-2 rounded-lg border-[1px] transition-colors border-transparent hover:bg-opacity-5 dark:hover:bg-opacity-20 hover:bg-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-600'>
          <div className='flex items-center gap-2'>
            <picture className='flex items-center justify-center w-6 text-xl aspect-square rounded-full overflow-hidden'>
              <Image src={`https://api.dicebear.com/6.x/thumbs/jpg?seed=${email}`} alt='avatar' width={50} height={50} />
            </picture>
            <small className='text-sky-500'>{email}</small>
          </div>
          <h3>{name}</h3>
          <small className='text-neutral-600 dark:text-neutral-400'>{body}</small>
          <div className='flex items-center gap-1'>
            <LikeButton />
            <SaveButton />
          </div>
        </li>
      )}
    </ul>
  )
}
