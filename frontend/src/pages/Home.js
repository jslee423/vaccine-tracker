import React from 'react'
import headerImg from '../images/header.jpg'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'
import './Home.scss'

const Home = () => {
    return (
        <div className='Home'>
            <div className='Header'>
                <img src={headerImg} alt='vaccine needles' id='HeaderImage' />
                <div className='HeaderContent'>
                    <h1>VacTrack<span id="namePlus">+</span></h1>
                    <h3>Track all of your vaccinations in one place</h3>
                    <h3>Set reminders for upcoming vaccinations</h3>
                    <h3>Share your vaccination records with your doctor or family members</h3>
                    <h2>Sign up for free today!</h2>
                    
                    <div className='HeaderButtons'>
                        <Button><NavLink to="/loginSignup/signup">Sign up for free</NavLink></Button>
                        <Button secondary><NavLink to="/about">Learn more.</NavLink></Button>
                    </div>
                </div>
            </div>
            <div className='HomeFeatures'>
                <h1>test</h1>
            </div>
        </div>
    )
}

export default Home