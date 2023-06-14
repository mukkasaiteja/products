import React from 'react'
import './nav.css'

function Nav() {
  return (
    <div className='nav'>

        <div>LOGO</div>
        <div className="iteams">
            <a href="/">HOME</a>
            <a href="/">USERS</a>
            <a href="/">PRODUCTS</a>
            <a href="/">Contact</a>
        </div>
    </div>
  )
}

export default Nav