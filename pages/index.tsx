import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import logoPic from '../public/images/reto-nextjs-logo.png'
import styles from './Home.module.css'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Efficient List - Home</title>
        <meta name="description" content="Efficient list home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Image
          className={styles.picture}
          src={logoPic}
          alt="Reto NextJs"
          placeholder="blur"
          priority
        />
      </main>
    </>
  )
}

export default Home
