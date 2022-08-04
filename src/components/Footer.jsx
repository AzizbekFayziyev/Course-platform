import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {

    const [darkMode, setDarkMode] = useState(true);

    // Darks Light Mode 
    const body = document.querySelector("body");

    const darkModeActive = () => {
        setDarkMode(true);

        body.classList.remove("lightMode");
    }

    const lightModeActive = () => {
        setDarkMode(false);

        body.classList.add("lightMode");
    }

    return (
        <footer>
            <h2 data-aos="zoom-out">AVAN<span className='color'>CODERS</span></h2>
            <p>Dasturlashning haqiqiy ustalariga aylaning!</p>
            <div className="cnt">
                <a target="_blank" href="https://t.me/Fayziyev_Azizbek"><i class="fa-brands fa-telegram"></i></a>
                <a target="_blank" href="https://t.me/Azizbek_Fayziyev_Chat"><i class="fa-solid fa-user-group"></i></a>
            </div>
            <div className="admin">
                <Link to="/textolite">You Are Admin?</Link>
            </div>
            <div className="btn-container">
                <a onClick={lightModeActive} className={!darkMode ? "darkMode" : ""} >Light Mode</a>
                <a onClick={darkModeActive} className={darkMode ? "darkMode" : ""} >Dark Mode</a>
            </div>
          
            {/* Copyright */}
            <h3>&copy;{new Date().getFullYear()} Created & Designed By <a className='color' href="https://t.me/avancoder">AVANCODER</a></h3>
        </footer>
    )
}
