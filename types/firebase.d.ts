export interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

export interface NewDocument {
  list: string
  rows: Array<string>
  user: string
  createdAt: Date
}
