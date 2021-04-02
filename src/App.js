import React from 'react'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import Content from './comps/Content'
import SignIn from './comps/SignIn'
import './App.scss';

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      { user ? <Content data={ user } /> : <SignIn /> }
    </>
  )
}

export default App;
