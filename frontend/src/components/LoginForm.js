import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Button from './Button';
import hide from '../images/hide.png'
import view from '../images/view.png'
import './LoginForm.scss'

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='LoginForm'>
            <h1>Login</h1>
            <form>
                <fieldset>
                    {/* <label htmlFor='email'>Email:</label> */}
                    <input
                        type='email'
                        id='email'
                        placeholder='Email ID'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </fieldset>
                <fieldset className='pass-wrapper'>
                    {/* <label htmlFor='email'>Password:</label> */}
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <img
                        src={showPassword ? view : hide}
                        onClick={() => setShowPassword((prev) => !prev)}
                    />
                </fieldset>
                <Button>Login</Button>
            </form>
            <p>Need an account? <NavLink to="/loginSignup/signup">Sign up</NavLink></p>
        </div>
    )
}

export default LoginForm