import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '../components/Header'
import { Steph } from '../components/Steph'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <Steph />
      <About />
      <Skills />
    </main>
  )
}
