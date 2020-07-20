import React from 'react'
import logo from 'resource/MainLogo.png'
import { Link } from 'react-router-dom'
import 'styles/Header.css'

const Header = (props) => {
    return (
        <div className='headerContainer'>
            <Link to="/">
                <img src={logo} alt='enfoyeer' className='imageStyle'></img>
            </Link>
        </div>
    )
}
export default Header