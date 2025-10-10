import React from 'react'
import { Link } from 'react-router'
import"./Navbar.css"

function Navbar() {
  return (
    <div className='nav'>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
      
    </div>
  )
}

export default Navbar
