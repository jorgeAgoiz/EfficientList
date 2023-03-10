import { DocumentData, getDocs, QuerySnapshot } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { AppContext } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import { List } from '../../types/list'
import { dbInstance } from '../../utils/firebaseConfig'
import styles from './Historic.module.css'

interface Props {
  lists: Array<List>
}

const Historic = ({ lists }: Props): JSX.Element => {
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Historial - Efficient List</title>
        <meta name="description" content="Efficient list requests historic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <Text color="is-success" text="Historial de peticiones" />
          <section className={styles.section}>
            {lists.map((row): JSX.Element | undefined => {
              if (row.user === session?.user?.email) {
                return (
                  <article
                    key={row.id}
                    className={`nes-container is-rounded ${styles.card}`}
                  >
                    <Text color="is-primary" text={row.list.toUpperCase()} />
                    <p className={styles.p}>Creada: {row.createdAt}</p>
                    <p className={styles.p}>{row.user}</p>
                    <div className={styles.btnContainer}>
                      <Button
                        onClick={(): Promise<boolean> =>
                          router.push(`/openai/${row.id}`)
                        }
                        text="Visualizar"
                        type="button"
                        state="is-success"
                      />
                    </div>
                  </article>
                )
              }
            })}
          </section>
        </main>
      </Layout>
    </>
  )
}

export const getServerSideProps = async (ctx: AppContext) => {
  const data: QuerySnapshot<DocumentData> = await getDocs(dbInstance)
  const lists: Array<DocumentData> = data.docs.map((value) => {
    const createdDateType = value.data().createdAt.toDate()
    return {
      ...value.data(),
      id: value.id,
      createdAt: createdDateType.toLocaleString(),
    }
  })

  return {
    props: { lists },
  }
}

export default Historic
