import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'
import ContactMe from '../components/ContactMe'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/10 scrollbar-thumb-yellow-500'>
      <Head>
        <title>Vinayak Portfolio </title>

      </Head>
      {/* {header} */
      <Header/>
     
     }
       {/* {Hero section} */
     <section id='hero' className='snap snap-start'>
      <Hero/>
     </section>
     
    }
    {
      // About
      <section id='about' className='snap-center'>
        <About/>
      </section>
    }
     {/* {Skills Section} */
     <section id='skills' className='snap snap-center'>
  
    <Skills/>


    </section>
}
 {/* {Project  Section} */
     <section id='project' className='snap snap-center'>
  
  <Projects/>
 
 
     </section>
 }

 {/* {Contact Me  Section} */
     <section id='project' className='snap snap-start'>
  
  <ContactMe/>
 
 
     </section>
 }
      

    </div>
  )
}
