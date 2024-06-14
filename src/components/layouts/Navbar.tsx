import React from 'react'
import NavDropDown from '../shared/NavDropDown'

const Navbar = () => {

    



  return (
    <div className='container'>
        <div></div>
        <div>
            <ul>
                <li>Home</li>
                <li>
                    <NavDropDown />
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar