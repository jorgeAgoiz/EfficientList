import { DocumentData, getDocs, QuerySnapshot } from 'firebase/firestore'
import { AppContext } from 'next/app'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Text from '../../components/Text'
import { List } from '../../types/list'
import { dbInstance } from '../../utils/firebaseConfig'
import styles from './Historic.module.css'

interface Props {
  lists: Array<List>
}

const Historic = ({ lists }: Props): JSX.Element => {
  const router = useRouter()

  return (
    <>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <h1>Historial de peticiones</h1>
        <section className={styles.section}>
          {lists.map((row) => {
            return (
              <article
                key={row.id}
                className={`nes-container is-rounded ${styles.card}`}
              >
                <Text color="is-primary" text={row.list.toUpperCase()} />
                <p>Creada: {row.createdAt}</p>
                <p>{row.user}</p>
                <div className={styles.btnContainer}>
                  <Button
                    onClick={(): Promise<boolean> =>
                      router.push(`/openai/${row.id}`)
                    }
                    text="Visualizar"
                    type="button"
                    state="is-success"
                  />
                  <Button
                    onClick={() => console.log('Eliminar')}
                    text="Eliminar"
                    type="button"
                    state="is-error"
                  />
                </div>
              </article>
            )
          })}
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async (ctx: AppContext) => {
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
    revalidate: 1,
  }
}

export default Historic
