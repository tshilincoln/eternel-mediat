import About from '@/components/about'
import Contact from '@/components/contact'
import Header from '@/components/header'
import Navig from '@/components/nav'
import Portfolio from '@/components/portfolio'
import Service from '@/components/service'
import Sticky from '@/components/stiky'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eternel-Mediat</title>
      </Head>
      <main className='relative block'>
        <section className='min-h-screen'><Header/></section>
        <section><About/></section>
        <section className='mt-7'><Service/></section>
        <section><Sticky/></section>
        <section><Portfolio/></section>
        <section><Contact/></section>
        
      </main>
    </>
    
  )
}
