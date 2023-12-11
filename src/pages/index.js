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
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main>
      <Header />
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
