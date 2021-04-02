import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTask } from '../redux/actions'

const EditTask = () => {

  const dispatch = useDispatch()
  const edit = useSelector(state => state.todos.editTask)
  const uid = useSelector(state => state.todos.uid)
  const editField = React.createRef()

  const editProcedure = (e) => {
    e.preventDefault()
    if(editField.current.value) {
      dispatch(editTask(editField.current.value, edit, uid))
    } else {
      window.alert("Fill in the field!")
    }
  }

  return (
    <>
      <div className="main__form">
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input id="edit" type="text" className="validate" maxLength="25" ref={ editField } />
              <label htmlFor="edit">Edit task</label>
            </div>
            <button className="btn waves-effect" type="submit" name="action" onClick={ editProcedure }>Edit task</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditTask
