import React from 'react'
import { NavLink } from 'react-router-dom';
import notFoundImg from '../images/404.svg';
import Button from '../components/Button';
import './NotFound.scss'

const NotFound = () => {
    return (
        <div className='NotFound'>
            <h1>404</h1>
            <img src={notFoundImg} alt='doctor art pic' />
            <h2>Oops! The page you are looking for is not found.</h2>
            <Button><NavLink to="/">Take me home</NavLink></Button>
        </div>
    )
}

export default NotFound