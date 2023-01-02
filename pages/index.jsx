import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout
    title='Home'
    home={true} //se aplican los estilos del home
    >

       <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

    </Layout>
 
  )}
