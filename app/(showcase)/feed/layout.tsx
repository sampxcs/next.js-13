import Aside from '@/app/components/Aside'
import Section from '@/app/components/Section'

export default function Layout ({ aside, feed }: any) {
  return (
    <div className='flex gap-8'>
      <Section>
        {feed}
      </Section>
      <Aside>
        {aside}
      </Aside>
    </div>
  )
}
