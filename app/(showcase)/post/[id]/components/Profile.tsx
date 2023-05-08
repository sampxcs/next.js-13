import Image from 'next/image'

export default async function Profile ({ user }: any) {
  const { name, username, email, company } = user
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2 py-2 border-b-[1px] dark:border-neutral-900'>
        <picture className='flex items-center justify-center w-10 text-xl aspect-square rounded-full overflow-hidden'>
          <Image src={`https://api.dicebear.com/6.x/thumbs/jpg?seed=${username}`} alt='avatar' width={50} height={50} />
        </picture>
        <div className='flex flex-col'>
          <h2 className='text-lg'>{name}</h2>
          <small className='text-xs text-neutral-400'>@{username}</small>
        </div>
      </div>
      <small className='text-sm'>{email}</small>
      <p>{company.name}, {company.catchPhrase}, {company.bs}</p>
    </div>
  )
}
