import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
const name= 'Buenassss'

export default function Layout({ children, title, home }) {
  return (
    <div className={styles.container}>
       <Head>
        <link rel='icon' href='/favicon.ico'/>
            <title>{title}</title>
        </Head>

        <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="hola"
            ></Image>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <nav>
          <Link href="/">
            <h1>Inicio | </h1>
          </Link>
          <Link href="/blog">
            <h1>Blog | </h1>
          </Link>
          <Link href="/contact">
            <h1>Contact |</h1>
          </Link>
          <Link href="/about">
            <h1>About</h1>
          </Link>
        </nav>

        <main> {children}</main>
        
        {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
        
    </div>
  )
}

