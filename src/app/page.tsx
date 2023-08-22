import About from '@/components/about'
import Header from '@/components/header'
import Navig from '@/components/nav'
import Service from '@/components/service'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eternel-Mediat</title>
      </Head>
      <main className='relative block'>

        <section className='min-h-screen'>
          <Header/>          
        </section>
        <nav className="w-full z-40 h-10 prim-bg sticky top-0"></nav>
        <section>
          <About/>
        </section>
        <section className='mt-7'>
          <Service/>
        </section>
        
      </main>
    </>
    
  )
}
