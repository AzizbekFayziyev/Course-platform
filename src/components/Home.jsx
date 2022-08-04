import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
// Images
import logo from "../images/home-logo.png"
import course from "../images/courses-images/1.png"
import category1 from "../images/category-images/1.png"
import category2 from "../images/category-images/2.png"
import category3 from "../images/category-images/3.png"
import category4 from "../images/category-images/4.png"
import category5 from "../images/category-images/5.png"
import category6 from "../images/category-images/6.png"
// data base
import base from "../base/courses.json"

export default function Home() {

    // Effect on mause moove image
    useEffect(() => {

        const img = document.querySelector(".hover-image");

        window.addEventListener("mousemove", (e) => {

            let x = e.pageX / 40;
            let y = e.pageY / 40;
            img.style.transform = `translateX(-${x}px) translateY(-${y}px)`;
        })
    }, [])

    return (
        <>
            {/* MAIN HOME */}
            <main>
                <div className="container">
                    <div data-aos="fade-up-right" className="text">
                        <h1><span className='color'>Dasturlash</span> oid video kurslar manbai!</h1>
                        <p>
                            Biz <span className='color'>veb-dasturlash</span>, <span className='color'>o'yin</span> yaratish va <span className="color">dasturiy ta'minot</span> ishlab chiqishni o'rgatamiz. Kurslarni oling, muammolarni hal qiling va dasturlashning haqiqiy ustalariga aylaning!</p>
                        <Link to="/auth/1"><button className='btn-global'>BOSHLASH</button></Link>
                    </div>
                    <img  className='hover-image' src={logo} alt="LOGO" />
                </div>
            </main>

            {/* CATEGORY */}
            <section className="category container-md">
                <h1 className="title" data-aos="zoom-in">YO'NALISHLAR</h1>
                <div className="row">
                    <Link to="/category/Front End" className="col-md-4 col-sm-6">
                        <div className="course-card" data-aos="zoom-in-up">
                            <img src={category1} alt="courses" />
                            <h2>FRONT-END</h2>
                        </div>
                    </Link>

                    <Link to="/category/Back End" className="col-md-4 col-sm-6">
                        <div className="course-card" data-aos="zoom-in-up">
                            <img src={category2} alt="courses" />
                            <h2>BACK-END</h2>
                        </div>
                    </Link>

                    <Link to="/category/Data Science" className="col-md-4 col-sm-12">
                        <div className="course-card" data-aos="zoom-in-up">
                            <img src={category3} alt="courses" />
                            <h2>DATA SCIENCNE</h2>
                        </div>
                    </Link>
                </div>

                <div className="row">
                    <Link to="/category/MERN Stack" className="col-md-4 col-sm-6">
                        <div className="course-card" data-aos="zoom-in-up">
                            <img src={category4} alt="courses" />
                            <h2>MERN STACK</h2>
                        </div>
                    </Link>

                    <Link to="/category/Android" className="col-md-4 col-sm-6">
                        <div className="course-card" data-aos="zoom-in-up">
                            <img src={category5} alt="courses" />
                            <h2>ANDROID DEVELOPER</h2>
                        </div>
                    </Link>

                    <Link to="/category/Ios" className="col-md-4 col-sm-12">
                        <div className="course-card" data-aos="zoom-in-up">
                            <img src={category6} alt="courses" />
                            <h2>IOS DEVELOPER</h2>
                        </div>
                    </Link>
                </div>
            </section>

            {/* LAST ADDED COURSES */}
            <section className='courses'>
                <h1 className="title" data-aos="zoom-in">Oxirgi qo'shilgan kurslar</h1>

                <div className="cards container">

                    {base.slice(0,5).map((e, id) => (
                       <div key={id} className="course-card" data-aos="zoom-in-down">

                       <div className="img">
                           <img 
                               src={e.image ? e.image : course}>
                           </img>
                       </div>

                       <div className="text">
                           <h3>{e.name}</h3>
                           <p>{e.desc}</p>

                           <div className="types">
                               <p><i class="fa-solid fa-clock"></i> {e.time}</p>
                               <p><i class="fa-solid fa-language"></i> {e.lang}</p>
                               <p><i class="fa-solid fa-cart-shopping"></i> {e.type}</p>
                               <p></p>
                           </div>

                           <Link to={`/course/${e.link}`}>
                               <button className="btn-global">
                                   Kursni ko'rish
                               </button>
                           </Link>

                       </div>
                   </div>
                    ))}

                </div>

                {/* SEE ALL BTN */}
                <Link to="/courses/">
                    <button className="btn-seAll">
                        HAMMASINI KO'RISH
                    </button>
                </Link>

            </section>

            {/* COMMUNITY TELEGRAM CHANEL AND GROUP */}
            <section className="community">
                <h1 className="title" data-aos="zoom-in">Bizning telegram kanal va guruhimizga qo'shiling!</h1>
                <div className="text">

                    <p>Siz bizning chatda boshqa odamlar bilan kurs xaqida gaplashishingiz, savol berishingiz va savolingizga javob olishingiz mumkin bo'ladi!</p>
                    <div className="btn-container">
                        <a target="_blank" href="https://t.me/Fayziyev_Azizbek">Telegram kanal</a>
                        <a target="_blank" href="https://t.me/Azizbek_Fayziyev_Chat">Telegram Chat</a>
                    </div>
                </div>
            </section>
        </>
    )
}
