import { FULL_INFO } from './types'

let initialState = {
  avatar: '',
  name: '',
  email: '',
  createAccTime: '',
  lastSignIn: ''
}

export const persInfo = (state = initialState, action) => {
  switch (action.type) {
    case FULL_INFO:
      return {
        ...state,
        avatar: action.payload.photoURL,
        name: action.payload.displayName,
        email: action.payload.email,
        lastSignIn: action.payload.metadata.lastSignInTime
      }
    default:
      return state
  }
}
