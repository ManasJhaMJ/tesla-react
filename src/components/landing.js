import React from 'react'
import './landing.css'
import cybertruck from '../images/cybertruck.png'

function landing() {
    return (
        <div className='landing'>
            <div className='landing-text'>
                <img src={cybertruck} alt='cybertruck-text' />
            </div>
        </div>
    )
}

export default landing;