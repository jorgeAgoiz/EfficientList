import { doc, DocumentData, DocumentSnapshot, getDoc } from 'firebase/firestore'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Head from 'next/head'
import { TelegramShareButton } from 'react-share'
import Button from '../../../components/Button'
import Checklist from '../../../components/Checklist'
import Header from '../../../components/Header'
import Navbar from '../../../components/Navbar'
import Text from '../../../components/Text'
import useDelete from '../../../hooks/useDelete'
import { List } from '../../../types/list'
import { database } from '../../../utils/firebaseConfig'
import styles from './ChecklistContainer.module.css'

interface Props {
  list: List
}

const ChecklistContainer = ({ list }: Props): JSX.Element => {
  const { handleDelete, error } = useDelete()

  return (
    <>
      <Head>
        <title>{list.list} - Efficient List</title>
        <meta name="description" content="Checklist generated" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <Text color="is-primary" text={list.list.toUpperCase()} />
        <section className={styles.icons}>
          <i className="nes-logo"></i>
          <i className="nes-octocat animate"></i>
          <i className="snes-jp-logo"></i>
        </section>

        <section className={styles.sectionList}>
          <Checklist rows={list.rows} />
        </section>
        <section className={styles.sectionBtns}>
          <Button
            onClick={() => handleDelete(list.id)}
            text="Eliminar"
            type="button"
            state="is-error"
          />
          <TelegramShareButton
            title="OPENAI Challenge"
            url={'https://www.webreactiva.com/'}
          >
            <Button
              onClick={() => null}
              text="Telegram"
              type="button"
              state="is-primary"
            />
          </TelegramShareButton>
        </section>
        {error && <Text color="is-error" text="Algo no ha ido bien..." />}
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
