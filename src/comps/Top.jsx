import { useSelector } from 'react-redux'

const Top = () => {
  const users = useSelector(state => state.todos.users)
  return (
    <section className="topList">
      <center><h4>Top users</h4></center>
      {
        users ? users.map(user => {
          return (<div key={ user.address.zipcode }>
            <h6>{ user.name }</h6>
            <span><b>{ user.website }</b></span>
          </div>)
        }) : <h5>No users</h5>
      }
    </section>
  )
}

export default Top
