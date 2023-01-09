import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  QuerySnapshot,
} from 'firebase/firestore'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { List } from '../../../types/list'
import { database, dbInstance } from '../../../utils/firebaseConfig'

interface Props {
  checklist: List
}

const Checklist = ({ checklist }: Props) => {
  // GENERAR UNA CHECKLIST Y COLOCARLE EL BOTON DE COMPARTIR EN TELEGRAM

  return (
    <div>
      <h1>Hola KE ASE</h1>
    </div>
  )
}

interface Path {
  params: {
    listId: string
  }
}

export const getStaticPaths = async () => {
  const data: QuerySnapshot<DocumentData> = await getDocs(dbInstance)
  const paths: Array<Path> = data.docs.map((value) => {
    return {
      params: {
        listId: value.id,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: Params }) => {
  const { listId } = params
  const listRef = doc(database, 'checklist', listId)
  const docSnapshot: DocumentSnapshot<DocumentData> = await getDoc(listRef)

  const createdDateType = docSnapshot.data()?.createdAt.toDate()

  const checklist = {
    ...docSnapshot.data(),
    id: docSnapshot.id,
    createdAt: createdDateType.toLocaleString(),
  }

  return {
    props: {
      checklist,
    },
    revalidate: 1,
  }
}

export default Checklist
