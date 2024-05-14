
import { Header } from '../components/Header'
import { Steph } from '../components/Steph'
import { Skills } from '../components/Skills'
import { Work } from '../components/Work'
import { ContactMe } from '@/components/ContactMe'
import { Footer } from '@/components/Footer'
import Head from 'next/head'
import StyledStarsCanvas from '@/components/Stars'
import Arrow from '@/components/Arrow'
import React from 'react'


export default function Home() {
  const scrollToWork = () => {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>protofolio lkhamjav | lkhamjav</title>
        <meta
          name="description"
          content="lkhamjav"
          key="desc"
        />
        <meta property="og:image" content="lkhamjav33.png" />
      </Head>
      <Header scrollToWork={scrollToWork} scrollToSkills={scrollToSkills} scrollToContact={scrollToContact} />

      <div className='relative'>
        <Arrow />
        <Steph />
        {/* <About /> */}
        <Arrow />
        <Skills />
        {/* <Experience /> */}
        <Arrow />
        <Work />
        <StyledStarsCanvas />
        <ContactMe />

        <Footer />
      </div>
    </>
  )
}
