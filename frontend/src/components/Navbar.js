import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    const toggleNavItems = () => {
        setShowNav(!showNav)
    }

    return (
        <nav className='Navbar'>
            <div className='container'>
                <div className='Logo'>
                    <NavLink to="/">
                        <h1>VacTrack<span id='namePlus'>+</span></h1>
                    </NavLink>
                </div>
                <div className='menu-icon' onClick={toggleNavItems}>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="10" rx="5"></rect>
                        <rect y="30" width="100" height="10" rx="5"></rect>
                        <rect y="60" width="100" height="10" rx="5"></rect>
                    </svg>
                </div>
                <div className={`nav-elements ${showNav && 'active'}`}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li className="dropdown">
                            <button className="dropbtn"><NavLink to="/loginSignup">Login/SignUp</NavLink></button>
                            <div className="dropdown-content">
                                <NavLink to="/loginSignup/admin">Administrator</NavLink>
                                <NavLink to="/loginSignup/patient">Patient</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar