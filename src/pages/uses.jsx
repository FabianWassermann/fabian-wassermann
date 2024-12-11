import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Fabian Wassermann</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Mac Mini, M4, 24GB RAM">
              My workloads got heigher and heigher and my MacBook was not 
              really happy about that. The Mac Mini M4 was the perfect fit 
              for my needs with a great cost-benefit ratio. I still like the 
              MacBook as a device for travelling or watching TV shows.
            </Tool>
            <Tool title="13” MacBook Air, M1, 8GB RAM">
              I was using an Intel-based notebook prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time and the battery life is a dream.
            </Tool>
            <Tool title="Philips - 34 Zoll WQHD (Curved)">
              Thats my primary monitor. I added a new monitor to the setup. 
              This monitor has a friend now.
            </Tool>
            <Tool title="Samsung - 27 Zoll QHD">
              I really like this monitor. I am using it as a vertical monitor.
            </Tool>
            <Tool title="Keychron K8">
              Moved from Logitech MX Keys to this Keychron Board. Hot-swappable switches, keycaps for Win and Mac, Bluetooth and OS-Switch makes this keyboard to my new favorite.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Postman">
              No matter what kind of request I need to mock, Postman is my tool to go.
            </Tool>
            <Tool title="iTerm2">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
