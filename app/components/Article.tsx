import Image from 'next/image'

export default function Article ({ title, body, user, gif }: any) {
  return (
    <article className='flex flex-col gap-4 animate-fadeInUp'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <picture className='flex items-center justify-center w-10 text-xl aspect-square rounded-full overflow-hidden'>
            <Image src={`https://api.dicebear.com/6.x/thumbs/jpg?seed=${user.username}`} alt='avatar' width={50} height={50} />
          </picture>
          <h2 className='tracking-tighter leading-5'>
            <span className='text-sky-500'>{user.name}</span> <br />
            {title}
          </h2>
        </div>
        <p>{body}</p>
      </div>
      <picture title={gif.title} className='w-full rounded-2xl overflow-hidden border-2 border-neutral-900'>
        <img src={gif.href} alt={gif.title} className='w-full' />
      </picture>
    </article>
  )
}
