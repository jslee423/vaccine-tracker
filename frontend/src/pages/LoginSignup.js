import React from 'react'
import { Outlet } from 'react-router-dom'
import './LoginSignup.scss'

const LoginSignup = () => {
    return (
        <div className='LoginSignup'>
            <Outlet />
        </div>
    )
}

export default LoginSignup