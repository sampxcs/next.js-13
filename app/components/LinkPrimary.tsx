import Link from 'next/link'

export default function LinkPrimary ({ href, target, children, className }: any) {
  return (
    <Link href={href} target={target} className={`p-2 transition-colors hover:text-sky-500 ${className}`}>{children}</Link>
  )
}
