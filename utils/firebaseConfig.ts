// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app'
import {
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getFirestore,
} from 'firebase/firestore'
import { FirebaseConfig } from '../types/firebase'
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGE_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from './constants'

const firebaseConfig: FirebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
  appId: FIREBASE_APP_ID,
}

export const app: FirebaseApp = initializeApp(firebaseConfig)
export const database: Firestore = getFirestore(app)
export const dbInstance: CollectionReference<DocumentData> = collection(
  database,
  'checklist'
)
