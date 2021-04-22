import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC-zSgPWj4MFd_pLfQV_ON88b44EDhOf-U",
  authDomain: "resume-c734c.firebaseapp.com",
  projectId: "resume-c734c",
  storageBucket: "resume-c734c.appspot.com",
  messagingSenderId: "600372502116",
  appId: "1:600372502116:web:3b9e7a3a7e76f2ac5f8971"
};
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth()
const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
