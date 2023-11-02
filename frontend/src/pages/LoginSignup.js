import React, { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
// import hide from '../images/hide.png'
// import view from '../images/view.png'
// import Button from '../components/Button'
import './LoginSignup.scss'
// import LoginForm from '../components/LoginForm'

const LoginSignup = () => {
    const location = useLocation()
    console.log("location: ", location)
    // const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='LoginSignup'>
            {/* LoginSignup */}
            <Outlet />
            {/* <h1>Login</h1>
            <form>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' />
                <div className='pass-wrapper'>
                    <label htmlFor='email'>Password:</label>
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                    />
                    <img
                        src={showPassword ? view : hide}
                        onClick={() => setShowPassword((prev) => !prev)}
                    />
                </div>
                <Button>Login</Button>
            </form> */}
            {/* <LoginForm /> */}
        </div>
    )
}

export default LoginSignup