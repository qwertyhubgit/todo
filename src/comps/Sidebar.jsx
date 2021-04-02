import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className="sidebar">
      <NavLink to="/create"><div><i className="material-icons">&#xe8f9;</i></div></NavLink>
      <NavLink to="/account"><div><i className="material-icons">&#xe853;</i></div></NavLink>
      <NavLink to="/top"><div><i className="material-icons">&#xe885;</i></div></NavLink>
      <NavLink to="/settings"><div><i className="material-icons">&#xe879;</i></div></NavLink>
    </div>
  )
}

export default Sidebar
