import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_TOP_USERS } from './redux/types'
import axios from 'axios'
import { getTopUsers } from './redux/reducers'

export function* sagaWatcher() {
  yield takeEvery(GET_TOP_USERS, sagaWorker)
}

function* sagaWorker() {
  const data = yield call(requestJSPlace)
  yield put(getTopUsers(data))
}

async function requestJSPlace() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=5")
  return await response.data
}
