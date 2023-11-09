import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from './Button';
import hide from '../images/hide.png'
import view from '../images/view.png'
import './LoginForm.scss'
import { LOGIN_USER } from '../state/user/userAction';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(LOGIN_USER(email, password, navigate, setError))
    }

    return (
        <div className='LoginForm'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                {error && <p className="errorMessage" aria-live="assertive">*{error}*</p>}
                <Button>Login</Button>
            </form>
            <p>Need an account? <NavLink to="/loginSignup/signup">Sign up</NavLink></p>
        </div>
    )
}

export default LoginForm