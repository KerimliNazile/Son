import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const Navbar = () => {
    const [isOpen, setIsopen] = useState(false)

    const handleClick = async () => {
        setIsopen(!isOpen)
    }
    return (
        <>

            <nav>
                <div className="Logo">
                    <img src="http://www.themestarz.net/html/lifecoach/assets/img/logo.png" alt="" />
                </div>
                <div className="MainNav">
                    <ul id='Navin'>
                        <li><NavLink to={"/home"}>Home</NavLink></li>
                        <li>Help for you</li>
                        <li>About me</li>
                        <li>Courses</li>
                        <li>Stories</li>
                        <li>Webinars</li>
                        <li>Contact</li>
                        <li><NavLink to={"/add"}>Add Page</NavLink></li>
                        <li><NavLink to={"/basket"}><i class="fa-solid fa-basket-shopping"></i> </NavLink></li>
                    </ul>
                </div>
                <div className="mobile" onClick={handleClick}>
                    {
                        isOpen ? <i class="fa-solid fa-xmark" ></i> : <i class="fa-solid fa-bars"></i>
                    }
                </div>
            </nav>
            <div className={`${isOpen ? 'navlist_active' : 'navlist_close'} navlist`}>
                <ul>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li>Help for you</li>
                    <li>About me</li>
                    <li>Courses</li>
                    <li>Stories</li>
                    <li>Webinars</li>
                    <li>Contact</li>
                    <li><NavLink to={"/add"}>Add Page</NavLink></li>
                    <li><NavLink to={"/basket"}><i class="fa-solid fa-basket-shopping"></i> </NavLink></li>
                </ul>
            </div>

        </>
    )
}

export default Navbar