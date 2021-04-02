import { useSelector } from 'react-redux'

const Account = () => {
  const info = useSelector(state => state.info)
  const todos = useSelector(state => state.todos.todos)

  return (
    <div className="main__account">
      <section className="info">
        <div className="avatar">
          <img src={ info.avatar } alt="avatar" />
        </div>
        <section className="details">
          <div><h4>{ info.name }</h4></div>
          <div>
            <div><b>Your Email</b></div>
            <div>{ info.email }</div>
            <div><b>Last Sign in time</b></div>
            <div>{ info.lastSignIn }</div>
            <div><b>Uncompleted tasks</b> - { todos.length }</div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Account
