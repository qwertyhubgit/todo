import { auth, provider, db } from '../firebase'

const SignIn = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).then(cred => {
      db.collection("users").doc(cred.user.uid).set({
        user: true
      })
    })
  }
  return (
    <section className="signin">
      <button className="btn waves-effect wave-light" onClick={ signIn }>Sign in with Google</button>
    </section>
  )
}

export default SignIn
