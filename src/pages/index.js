import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '../components/Header'
import { Steph } from '../components/Steph'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Experience } from '../components/Experience'
import { Work } from '../components/Work'
import { ContactMe } from '@/components/ContactMe'
import { Footer } from '@/components/Footer'
import { Stopwatch } from '@/components/Stopwatch'
import { Headermobile } from '@/components/Headermobile'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main id='main'>
      {/* <Head>
        <title>protofolio lkhamjav | </title>
        <meta
          name="description"
          content="lkhamjav protofolio."
          key="desc"
        />
      </Head> */}
      <Header />
      {/* <Headermobile /> */}
      <Steph />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </main>
  )
}
