// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIRoEYP6uKBy1oGMvbJSdfFi3wCOTkoBc',
  authDomain: 'twitterclone-ac98a.firebaseapp.com',
  projectId: 'twitterclone-ac98a',
  storageBucket: 'twitterclone-ac98a.appspot.com',
  messagingSenderId: '31873442180',
  appId: '1:31873442180:web:a1bb6910452df59e2dfdd1',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
