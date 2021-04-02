import React, { useState } from 'react'
import { loadTodos } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import List from './List'

const CreateTask = () => {
  const dispatch = useDispatch()
  const uid = useSelector(state => state.todos.uid)
  const [title, setTitle] = useState("")
  const taskField = React.createRef()

  const changeHandler = (e) => {
    setTitle(e.target.value)
  }
  const callDispatchBtn = (e) => {
    e.preventDefault()
    if (taskField.current.value) {
      dispatch(loadTodos(title, uid))
      taskField.current.value = ""
      setTitle("")
    } else {
      alert("Full the input!")
    }
  }
  return (
    <>
      <div className="main__form">
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="text" className="validate" onChange={ changeHandler } ref={ taskField } maxLength="25" />
              <label htmlFor="email">Add task</label>
            </div>
            <button onClick={ callDispatchBtn } className="btn waves-effect" type="submit" name="action">Add task
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
      <List />
    </>
  )
}

export default CreateTask
