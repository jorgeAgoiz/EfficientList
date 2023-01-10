import { doc, DocumentData, DocumentSnapshot, getDoc } from 'firebase/firestore'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Head from 'next/head'
import Checklist from '../../../components/Checklist'
import Header from '../../../components/Header'
import Navbar from '../../../components/Navbar'
import Text from '../../../components/Text'
import { List } from '../../../types/list'
import { database } from '../../../utils/firebaseConfig'
import styles from './ChecklistContainer.module.css'

interface Props {
  list: List
}

const ChecklistContainer = ({ list }: Props): JSX.Element => {
  // GENERAR UNA CHECKLIST Y COLOCARLE EL BOTON DE COMPARTIR EN TELEGRAM
  console.log(list)

  return (
    <>
      <Head>
        <title>{list.list} - Efficient List</title>
        <meta
          name="description"
          content="Ask openai to get ideas for your desired checklist"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <Text color="is-primary" text={list.list.toUpperCase()} />
        <div className={styles.icons}>
          <i className="nes-logo"></i>
          <i className="nes-octocat animate"></i>
          <i className="snes-jp-logo"></i>
        </div>

        <section className={styles.section}>
          <Checklist rows={list.rows} />
        </section>
      </main>
    </>
  )
}

export const getServerSideProps = async ({ params }: { params: Params }) => {
  const { listId } = params
  const listRef = doc(database, 'checklist', listId)
  const docSnapshot: DocumentSnapshot<DocumentData> = await getDoc(listRef)

  const createdDateType = docSnapshot.data()?.createdAt.toDate()

  const list = {
    ...docSnapshot.data(),
    id: docSnapshot.id,
    createdAt: createdDateType.toLocaleString(),
  }

  return {
    props: {
      list,
    },
  }
}

export default ChecklistContainer
