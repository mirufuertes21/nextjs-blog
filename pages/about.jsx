import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function about() {
  return (
    <Layout
        title='about'>
        <Image 
        src ="/img/1.jpg"
        width={600}
        height={600}
        alt='Mi Image'
        ></Image>
        <Link href='/'>
        <h1>Volver al inicio</h1>
        </Link>
    </Layout>
  )
}


