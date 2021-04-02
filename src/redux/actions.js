import { db } from '../firebase'
import { getLoadAction, setStoreTodosFirebase, deleteFromFirebaseDone } from './reducers'

export const loadTodos = (title, uid) => {
  if(title && uid) {
    let newTodo = {
      title: title,
      id: Date.now(),
      isCompleted: false
    }
    return async dispatch => {
      dispatch(getLoadAction(newTodo))
      try {
        const newDoc = await db.collection("users").doc(uid).collection("todos").add({
          name: "Prepare"
        })
        await db.collection("users").doc(uid).collection("todos").doc(newDoc.id).set({
          title: title,
          id: Date.now(),
          fireID: newDoc.id,
          isCompleted: false
        })
      } catch (e) {
        if(e.type === "c") {
          alert("Warning! Check your internet connection and try again!")
        }
      }
    }
  }
}

export const get_todos_from_fire = (uid) => {
  if(uid) {
    return async dispatch => {
      let todos_fire = []
      await db.collection("users").doc(uid).collection("todos").orderBy("id", "asc").get().then(snapshot => {
        snapshot.docs.map(item => todos_fire.push(item.data()))
      })
      dispatch(setStoreTodosFirebase(todos_fire))
    }
  } else {
    alert("OOoooopss :(")
  }
}

export const editTask = (title, data, uid) => {
  return async dispatch => {
    try {
      await db.collection("users").doc(uid).collection("todos").doc(data.fireID).set({
        title: title,
        id: data.id,
        fireID: data.fireID,
        isCompleted: data.isCompleted
      })
      window.alert("Task was edited!")
      document.location.assign("https://resume-53ca6.web.app/create")
    } catch (e) {
      if (e) {
        window.alert("Check your internet connection and try again!")
      }
    }
  }
}

export const set_complete_task = (uid, id, old) => {
  return async dispatch => {
    await db.collection("users").doc(uid).collection("todos").doc(id).set({
      title: old.title,
      id: old.id,
      fireID: id,
      isCompleted: true
    })
  }
}

export const deleteFromFirebase = (id, uid) => {
  return async dispatch => {
      await db.collection("users").doc(uid).collection("todos").doc(id).delete()
      dispatch(deleteFromFirebaseDone())
  }
}
