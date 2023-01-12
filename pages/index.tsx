import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import logoPic from '../public/images/reto-nextjs-logo.png'
import styles from './Home.module.css'

const Home = (): JSX.Element => {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Efficient List - Home</title>
        <meta name="description" content="Efficient list home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <Image
            className={styles.picture}
            src={logoPic}
            alt="Reto NextJs"
            placeholder="blur"
            priority
          />
        </main>
      </Layout>
    </>
  )
}

export default Home

/* 
- Separar Layout
- Crear custom hooks
- Función eliminar lista y service
- Maquetar checklists
- Insertar boton generar checklist
*/
