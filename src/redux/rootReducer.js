import { combineReducers } from 'redux'
import { reducers } from './reducers'
import { persInfo } from './personalInfo'

export const rootReducer = combineReducers({
  todos: reducers,
  info: persInfo
})
