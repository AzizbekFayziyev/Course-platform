import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// user img
import userImage from "../images/user.png"

export default function Navbar() {

    // user 
    const isAuth = localStorage.getItem("auth");
    const userName = localStorage.getItem("name");

    const userExit = () => {
        const logOut = window.confirm("Profilingizdan Chiqmoqchimsiz?");

        if (logOut) {
            localStorage.clear();
            window.location.reload();
        }
    }

    // Navbar Sticky

    useState(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");

            nav.classList.toggle("navbarSticky", window.scrollY > 400);
        })
    }, [])

    // Mobile Navbar Toggle
    const ref = useRef();
    const [toggleNav, setToggleNav] = useState(false);

    const navActive = () => {
        setToggleNav(true);
        ref.current.classList.add("nav-active");
    }

    const navClose = () => {
        setToggleNav(false);
        ref.current.classList.remove("nav-active");
    }

    return (
        <nav>
            <div className="container">
                <Link onClick={navClose} to="/"><h2 className='logo'>AVAN<span className='color'>CODERS</span></h2></Link>

                <ul ref={ref} className='nav'>
                    <div className="links">
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Kurslar Ro'yxati <i class="fa-solid fa-chevron-down"></i></Link>

                            <ul className='list'>
                                <li><Link onClick={navClose} to="category/">Hammasi</Link></li>
                                <li><Link onClick={navClose} to="category/Front End">Front-End</Link></li>
                                <li><Link onClick={navClose} to="category/Back End">Back-End</Link></li>
                                <li><Link onClick={navClose} to="category/Data Science">Data Science</Link></li>
                                <li><Link onClick={navClose} to="category/MERN Stack">MERN Stack</Link></li>
                                <li><Link onClick={navClose} to="category/Ios">Ios Developer</Link></li>
                                <li><Link onClick={navClose} to="category/Android">Android Developer</Link></li>
                                <li><Link onClick={navClose} to="category/Game">Game Developer</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link onClick={navClose} to="/courses" className="nav-link">Barcha Kurslar</Link>
                        </li>
                    </div>


                    {isAuth ? (
                        <div onClick={userExit} className="user" data-aos="zoom-in">
                            <h2>{userName}</h2>
                            <img src={userImage} alt={userName} />
                        </div>
                    ) : (
                        <div className="btn-container">
                            <Link onClick={navClose} to="/auth/1"><button className='btn-global'>Ro'yxatdan O'tish</button></Link>
                            <Link onClick={navClose} to="/auth/2">Kirish</Link>
                        </div>
                    )
                    }
                </ul >

                {!toggleNav ?
                    <i onClick={navActive} id='nav-menu' class="fa-solid fa-bars"></i>
                    :
                    <i onClick={navClose} id='nav-menu' class="fa-solid fa-xmark"></i>
                }
            </div >

        </nav >
    )
}
