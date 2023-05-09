export default function Aside ({ children }:any) {
  return (
    <aside className='w-96 sticky top-20 h-fit max-h-[calc(100vh-5rem)] overflow-y-auto min-h-[10rem]'>
      {children}
    </aside>
  )
}
