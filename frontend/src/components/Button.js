import React from 'react'
import './Button.scss'

const Button = (props) => {
    const buttonText = props.children
    const secondary = props.secondary

    return (
        <button
            className={`Button ${secondary && 'Secondary'}`}
        >
            {buttonText}
        </button>
    )
}

export default Button