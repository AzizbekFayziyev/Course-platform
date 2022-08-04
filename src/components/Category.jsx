import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import category from "../base/category.json"

export default function Category() {
    const { id } = useParams();
    const [search, setSearch] = useState(`${id ? id : ""}`);


    const filterCategory = category.filter((e) => {
        return e.category.toLowerCase().includes(search.toLowerCase());
    });

    useEffect(() => {
        window.location.assign("#");
    }, [])

    // CATEGORY
    return (
        <section className='category'>

            <div className="main-title container-md">
                <h1 className='title' data-aos="zoom-in">Kurslar Bo'limi</h1>
                <h2>Barcha mavjud bo'lgan <span className='color'>kurslar</span> ro'yxati.</h2>
                <form >
                    <div className="search">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder='Search By Name...' />
                        <i class="fas fa-search"></i>
                    </div>
                </form>
            </div>

            {/* Mapping Categoriyes From Base */}
            <div className="field container-md">
                {filterCategory.length ? filterCategory.map((e, id) => (
                    <Link to={e.link} key={id} className="category-card" data-aos="zoom-in">
                        <i class={e.icon}></i>
                        <h3>{e.name}</h3>
                    </Link>
                )) : <h2>Siz izlagan <span className='color'>natija</span> topilmadi :(</h2>}
            </div>


        </section>
    )
}
