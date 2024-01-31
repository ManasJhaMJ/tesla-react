import React from 'react';
import './navbar.css';
import logo from '../images/tesla.png';

function navbar() {

    var pfp = "https://i.pinimg.com/736x/44/17/9f/44179ffa9ddc4b8cc211caa24b94c7e3.jpg";
    return (
        <>
            <nav>
                <div className="logo">
                    <img className='logo1' src={pfp}
                        alt="profile-pic" />
                    <img className='logo2' src={logo}
                        alt="logo" />
                </div>
                <div className="links">
                    <div>
                        <a className='button-2' aria-label="order now" href=".">Order Now</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar;