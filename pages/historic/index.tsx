import { DocumentData, getDocs, QuerySnapshot } from 'firebase/firestore'
import { AppContext } from 'next/app'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { List } from '../../types/list'
import { dbInstance } from '../../utils/firebaseConfig'
import styles from './Historic.module.css'

interface Props {
  lists: Array<List>
}

const Historic = ({ lists }: Props): JSX.Element => {
  console.log(lists)

  return (
    <>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <h1>Historial de peticiones</h1>
      </main>
    </>
  )
}

Historic.getInitialProps = async (ctx: AppContext) => {
  const data: QuerySnapshot<DocumentData> = await getDocs(dbInstance)
  const lists: Array<DocumentData> = data.docs.map((value) => value.data())

  return {
    lists,
  }
}

export default Historic
