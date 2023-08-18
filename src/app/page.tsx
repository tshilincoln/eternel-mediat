import Header from '@/components/header'
import Navigation from '@/components/navigation'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eternel-Mediat</title>
      </Head>
      <main>
        <section className='min-h-screen'>
          <Header/>
          <nav>
            <h1>hello?</h1>
          </nav>
          
        </section>
      </main>
    </>
    
  )
}
