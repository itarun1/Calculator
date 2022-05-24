import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div >
      <Link className='nava' to="/">Home</Link>
      <Link className='nava' to="/add">Add Todo</Link>
      <Link className='nava' to="/list">All Todos</Link>
    </div>
  )
}

export default Nav
