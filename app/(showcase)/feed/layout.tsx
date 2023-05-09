import Aside from '@/app/components/Aside'
import Menu from '@/app/components/Menu'
import Section from '@/app/components/Section'

export default function Layout ({ aside, feed, menu }: any) {
  return (
    <div className='flex gap-8'>
      <Menu>
        {menu}
      </Menu>
      <Section>
        {feed}
      </Section>
      <Aside>
        {aside}
      </Aside>
    </div>
  )
}
