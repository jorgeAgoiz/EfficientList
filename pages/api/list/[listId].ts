import {
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
} from 'firebase/firestore'
import { NextApiRequest, NextApiResponse } from 'next'
import { database } from '../../../utils/firebaseConfig'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const Id: string | string[] = req.query.listId!

    const docRef: DocumentReference<DocumentData> = doc(
      database,
      'checklist',
      Id as string
    )
    const docSnapshot: DocumentSnapshot<DocumentData> = await getDoc(docRef)

    if (!docSnapshot.exists()) {
      throw new Error('Bad Request')
    }

    await deleteDoc(docRef)

    return res.status(200).json({ success: true })
  } catch (err: any) {
    return res.status(err.response?.status || 500).json({
      message: err.message,
      status: err.response?.status || 500,
      success: false,
    })
  }
}
