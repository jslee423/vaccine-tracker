import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from './Button'
import hide from '../images/hide.png'
import view from '../images/view.png'
import './SignupForm.scss'
import { SAVE_USER_TO_DB } from '../state/user/userAction'

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [userType, setUserType] = useState('patient')
    const [adminCode, setAdminCode] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            DOB: dob,
            Gender: gender,
            userType: userType,
            adminCode: adminCode
        }
        dispatch(SAVE_USER_TO_DB(user, navigate, setError))
    }

    return (
        <div className='SignupForm'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className='userTypeFields'>
                    <span>
                        <input
                            type="radio"
                            id="patient"
                            name="userType"
                            value="patient"
                            onChange={() => setUserType('patient')}
                            checked={userType === 'patient'}
                        />
                        <label htmlFor="patient">Patient</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            id="admin"
                            name="userType"
                            value="admin"
                            onChange={() => setUserType('admin')}
                            checked={userType === 'admin'}
                        />
                        <label htmlFor="admin">Administrator</label>
                    </span>
                </fieldset>
                {userType === "admin" &&
                <input
                    type="text"
                    id="adminCode"
                    placeholder='Enter adminstrator code'
                    onChange={(e) => setAdminCode(e.target.value)}
                    value={adminCode}
                    required
                />}
                <fieldset className='nameFields'>
                    <input
                        type='text'
                        id='firstName'
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        required
                    />
                    <input
                        type='text'
                        id='lastName'
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        required
                    />
                </fieldset>
                <input
                    type='email'
                    id='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <fieldset className='dobField'>
                    <label htmlFor='dob'>Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        onChange={(e) => setDob(e.target.value)}
                        value={dob}
                        required
                    />
                </fieldset>
                <fieldset className='genderField'>
                    <label htmlFor='gender'>Gender:</label>
                    {/* <input type="date" id="dob" /> */}
                    <select name="gender" id="gender" defaultValue="" onChange={(e) => setGender(e.target.value)} required>
                        <option value="" disabled>Select your option...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
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
                <fieldset className='pass-wrapper'>
                    {/* <label htmlFor='email'>Password:</label> */}
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        id='passwordConfirm'
                        placeholder='Confirm Password'
                        onChange={(e) => setConfirmPass(e.target.value)}
                        value={confirmPass}
                        required
                    />
                    <img
                        src={showPassword ? view : hide}
                        onClick={() => setShowPassword((prev) => !prev)}
                    />
                </fieldset>
                {error ? <p className="errorMessage" aria-live="assertive">*{error}*</p>
                :
                <p>All fields required.</p>
                }
                <Button>Register</Button>
            </form>
            <p>Already have an account? <NavLink to="/loginSignup/login">Login</NavLink></p>
        </div>
    )
}

export default SignupForm