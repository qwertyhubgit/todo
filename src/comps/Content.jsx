import { BrowserRouter, Route } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'

import { SET_UID, FULL_INFO, GET_TOP_USERS } from '../redux/types'
import { get_todos_from_fire } from '../redux/actions'

import CreateTask from './CreateTask'
import Account from './Account'
import Top from './Top'
import Settings from './Settings'
import Sidebar from './Sidebar'
import EditTask from './EditTask'

const Content = ({ data }) => {
  const dispatch = useDispatch()
  const item = useSelector(state => state.todos.editTask)
  console.log(item.fireID)

  if (data.uid) {
      dispatch( { type: SET_UID, payload: data.uid } )
      dispatch(get_todos_from_fire(data.uid))
      dispatch({ type: FULL_INFO, payload: data })
      dispatch({ type: GET_TOP_USERS })
  }

  return (
    <BrowserRouter>
      <section className="screen">
        <div className="main">
          <header>
            <Sidebar />
          </header>
          <>
            <Route path="/create" render={ () => <CreateTask /> } />
            <Route path="/account" render={ () => <Account /> } />
            <Route path="/top" render={ () => <Top /> } />
            <Route path="/settings" render={ () => <Settings /> } />
            <Route path={"/task/" + item.fireID} render={ () => <EditTask /> } />
          </>
        </div>
      </section>
    </BrowserRouter>
  )
}

export default Content
