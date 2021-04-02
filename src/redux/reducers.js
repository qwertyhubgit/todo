import { LOAD_TODOS, SET_UID, SET_TODOS, SET_TOP_USERS, GET_ID_OF_TASK, DELETE_TASK, DELETING_DONE } from './types'

let initialState = {
  todos: [],
  uid: '',
  users: [],
  editTask: {}
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        todos: state.todos.concat([action.payload])
      }
    case SET_UID:
      return {
        ...state,
        uid: action.payload
      }
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case SET_TOP_USERS:
      return {
        ...state,
        users: action.payload
      }
    case GET_ID_OF_TASK:
      return {
        ...state,
        editTask: action.payload
      }
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      }
    case DELETING_DONE:
      return {
        ...state
      }
    default:
      return state
  }
}

export const getLoadAction = (data) => ({type: LOAD_TODOS, payload: data})
export const setStoreTodosFirebase = (data) => ({ type: SET_TODOS, payload: data })
export const getTopUsers = (data) => ({ type: SET_TOP_USERS, payload: data })
export const getIdOfTask = (data) => ({ type: GET_ID_OF_TASK, payload: data })
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id })
export const deleteFromFirebaseDone = () => ({ type: DELETING_DONE })
