import { doc, DocumentData, DocumentSnapshot, getDoc } from 'firebase/firestore'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { List } from '../../../types/list'
import { database } from '../../../utils/firebaseConfig'

interface Props {
  checklist: List
}

const Checklist = ({ checklist }: Props) => {
  // GENERAR UNA CHECKLIST Y COLOCARLE EL BOTON DE COMPARTIR EN TELEGRAM
  console.log(checklist)

  return (
    <div>
      <h1>Hola KE ASE</h1>
    </div>
  )
}

export const getServerSideProps = async ({ params }: { params: Params }) => {
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
  }
}

export default Checklist
