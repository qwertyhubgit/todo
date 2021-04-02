import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDsksTzsfD9lIgtcU-n3VWOrOfzIJ_FryM",
  authDomain: "resume-53ca6.firebaseapp.com",
  projectId: "resume-53ca6",
  storageBucket: "resume-53ca6.appspot.com",
  messagingSenderId: "526344420752",
  appId: "1:526344420752:web:eac2f09eacf1678e3f8715"
};
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth()
const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
