
import { Inter } from 'next/font/google'
import { Header } from '../components/Header'
import { Steph } from '../components/Steph'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Experience } from '../components/Experience'
import { Work } from '../components/Work'
import { ContactMe } from '@/components/ContactMe'
import { Footer } from '@/components/Footer'
import { useRef } from 'react'
import Head from 'next/head'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
<<<<<<< HEAD
import StyledStarsCanvas from '@/components/Stars'
import Arrow from '@/components/Arrow'
// import { Headermobile } from '@/components/Headermobile' 
=======
import { StyledStarsCanvas } from '@/components/Stars'
import { Arrow } from '@/components/Arrow'

// import { Stopwatch } from '@/components/Stopwatch'
// import { Headermobile } from '@/components/Headermobile'
>>>>>>> 7acb598f8837c015c5de712a890093c835303c7d

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pageRef = useRef();

  const downloadPdf = () => {
    const input = pageRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);

      doc.save("Lkhamjav.pdf");
    });
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
      </Head>
      <Header onDownloadPdf={downloadPdf} />
      {/* <Headermobile /> */}
      <div className='relative'>
<<<<<<< HEAD
        <Arrow />
        <Steph />
        <About />
        <Arrow />
=======
        <StyledStarsCanvas />
        <Arrow />
        <Steph />
        <Arrow />
        <About />
>>>>>>> 7acb598f8837c015c5de712a890093c835303c7d
        <Skills />
        <Experience />
        <Arrow />
        <Work />
        <ContactMe />
        <Footer />
<<<<<<< HEAD
        <StyledStarsCanvas />
=======

>>>>>>> 7acb598f8837c015c5de712a890093c835303c7d
      </div>
    </>
  )
}
