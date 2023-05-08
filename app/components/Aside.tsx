export default function Aside ({ children }:any) {
  return (
    <aside className='w-80 sticky top-20 h-fit max-h-[85vh] overflow-y-auto min-h-[10rem]'>
      {children}
    </aside>
  )
}
