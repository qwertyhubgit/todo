import { auth } from '../firebase'

const Settings = () => {
  return auth.currentUser && (
    <section className="settings">
      <button className="btn waves-effect wave-light" onClick={ () => auth.signOut() }>Sign Out</button>
    </section>
  )
}

export default Settings
