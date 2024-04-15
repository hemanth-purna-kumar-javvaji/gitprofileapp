import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className='navitems'>
            <h1>GitHub Profile</h1>
             <ul>
                    <li><Link to='/home'>Home</Link></li>
                    {/* <li><Link to="/login">Login</Link></li> */}
                    <li><Link to="/github">Github Profile</Link></li>
            </ul>
        </div>
      </div>
  )
}

export default Navbar
