import React from 'react'
import headerImg from '../images/header.jpg'
import Button from '../components/Button'
import './Home.scss'

const Home = () => {
    return (
        <div className='Home'>
            <div className='Header'>
                <img src={headerImg} alt='vaccine needles' id='HeaderImage' />
                <div className='HeaderContent'>
                    <h1>VacTrack+</h1>
                    <h3>Track all of your vaccinations in one place</h3>
                    <h3>Set reminders for upcoming vaccinations</h3>
                    <h3>Share your vaccination records with your doctor or family members</h3>
                    <h2>Sign up for free today!</h2>
                    
                    <div className='HeaderButtons'>
                        <Button>Sign up for free</Button>
                        <Button secondary>Learn more.</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home