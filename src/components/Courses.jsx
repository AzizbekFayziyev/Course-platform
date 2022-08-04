import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import courses from "../base/courses.json"
import course from "../images/courses-images/1.png"

export default function Courses() {

    const { id } = useParams();
    const [search, setSearch] = useState(`${id ? id : ""}`);
    const [more, setMore] = useState(5)

    const coursesF = courses.filter(e => {
        return e.name.toLowerCase().includes(search.toLowerCase());
    })

    useEffect(() => {
        window.location.assign("#");
    }, [])

    return (
        <section className="courses">
            <header>
                <h1 className='title' data-aos="zoom-in">Barcha Kurslar</h1>
                <p>Dasturlashning Haqiqiy Ustalariga Aylaning!</p>
                <form>
                    <div className="search">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder='Search By Course...' />
                        <i class="fas fa-search"></i>
                    </div>
                </form>
            </header>

            <div className="cards container">
                {coursesF.length ? coursesF.sort((a, b) => a - b).slice(0, more).map((e, id) => (
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
                )) : <h2>Siz izlagan <span className='color'>natija</span> topilmadi :(</h2>}

                {coursesF.length ?
                    <button
                        onClick={() => setMore(e => e += 5)}
                        className="btn-global">YANA YUKLASH
                    </button>
                    :
                    null}
            </div>
        </section>
    )
}
