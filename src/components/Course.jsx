import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from "../base/courses.json"

export default function Course() {

    useEffect(() => {
      window.location.assign("#")
    }, [])

    const { id } = useParams();

    const course = data.filter(e => {
        return e.link.toLowerCase().includes(String(id).toLowerCase())
    })

    return (
        <>
        <section className='course-page container-sm'>

            <Link to="/courses"><i class="fa-solid fa-arrow-left-long"></i></Link>

            {
               course.length ? course.map((e, id) => (
                    <div className='single-course'>
                        <h1 className='title'>{e.name}</h1>
                        <p>{e.desc}</p>

                       <iframe src={e.frame} frameborder="0" allowFullScreen="true"></iframe>
                    </div>
                )) :  (<h2 className='title'>Loading...</h2>)
            }
        </section>

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
