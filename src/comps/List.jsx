import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteTask, getIdOfTask } from '../redux/reducers'
import { deleteFromFirebase, set_complete_task } from '../redux/actions'

const List = () => {
  const todo = useSelector(state => state.todos.todos)
  const uid = useSelector(state => state.todos.uid)

  const dispatch = useDispatch()
  const deleteProcedure = (id, fID) => {
    dispatch(deleteTask(id))
    dispatch(deleteFromFirebase(fID, uid))
  }

  const completeTask = (item) => {
      if(item.fireID) {
        dispatch(set_complete_task(uid, item.fireID, item))
      } else {
        window.alert("If you want to change something, reload the page!")
      }
  }

  const sendInfoTask = (item) => {
    if(item.fireID) {
      dispatch(getIdOfTask(item))
    } else {
      window.alert("If you want to edit your task, reload the page!")
    }
  }

  return (
    <div className="main__list">
      { todo ?
        todo.map(item => {
          const classes = ['item']
          if(item.isCompleted) {
            classes.push("completed")
          }

          return (<div className={ classes.join(" ") } key={ item.id }>
            <div>{ item.title }</div>
            <div style={{ justifyContent: "flex-end" }}>
               <i className="material-icons" onClick={ () => deleteProcedure(item.id, item.fireID) }>&#xe14c;</i>
               <i className="material-icons" onClick={ () => completeTask(item) }>&#xe86c;</i>
               <i className="material-icons" onClick={ () => sendInfoTask(item) }>
                { item.fireID ? <NavLink to={ "/task/" + item.fireID }><span>&#xe150;</span></NavLink> : <span>&#xe150;</span>}
               </i>
            </div>
          </div>)
        }) : <h4>No tasks</h4> }
    </div>
  )
}

export default List
