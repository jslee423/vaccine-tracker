import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import './SignupSuccess.scss'

const SignupSuccess = () => {
    return (
        <div className='SignupSuccess'>
            <h1>Thank you for registering!</h1>
            <h4>Your account has been successfully created.</h4>
            <p>Before access is granted, an administrator will review your account for approval.</p>
            <p>In the meantime, check our about page for all available features.</p>
            <div className='buttons'>
                <Button><NavLink to="/about">See all features</NavLink></Button>
                <Button><NavLink to="/">Home</NavLink></Button>
            </div>
        </div>
    )
}

export default SignupSuccess