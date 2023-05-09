import Aside from '@/app/components/Aside'
import Section from '@/app/components/Section'

export default async function Layout ({ aside, article, children }: any) {
  return (
    <section className='flex gap-8'>
      <Section>
        {article}
        {children}
      </Section>
      <Aside>
        {aside}
      </Aside>
    </section>
  )
}
