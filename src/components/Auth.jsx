import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Auth() {
    const { id } = useParams();
    const [auth, setAuth] = useState(3223);
    // facke auth
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [singName, setSingName] = useState("");
    const [singPassword, setSingPassword] = useState("");
    let isAuth = false;

    // setAuth
    useEffect(() => {
        setAuth(e => e = +id);
    })

    // Authing

    const getPw = localStorage.getItem("password");
    const getName = localStorage.getItem("name")

    const authing = (e) => {
        e.preventDefault();
        e.target.reset();

        localStorage.setItem("name", name);
        localStorage.setItem("password", password);

        alert("Tabriklayman siz ro'yxatdan muvoffaqiyatli o'tdingiz! profilingizga kirish uhchun 'kirish' tugmasini bosing!")
    }

    const singAuthing = (e) => {
        e.preventDefault();
        e.target.reset();

        if(getPw.toLowerCase() == singPassword.toLowerCase() && getName.toLowerCase() == singName.toLowerCase()){
            alert(`Assalomu alaykum ${getName}, xush kelibsiz!`)

            localStorage.setItem("auth", true);
            window.location.assign("/")
        } else{
            alert("Parol yoki Foydalanuvchi nomi no to'g'ri!")
        }
    }



    return (
        <div>
            {auth == 1 ? (
                <form onSubmit={authing}>
                    <h1 className='title' data-aos="zoom-in">Ro'yxatdan O'tish</h1>
                    <input data-aos="zoom-in-out" onChange={e => setName(e.target.value)} type="text" placeholder="Foydalanuvchi nomi" required />
                    <input data-aos="zoom-in-out" type="email" placeholder="Email" required />
                    <input data-aos="zoom-in-out" onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' required />
                    <Link to="/auth/2">Profiingiz mavjudmi?</Link>
                    <button className='btn btn-lg btn-dark'>Ro'yxatdan O'tish</button>
                </form>
            ) : (
                <form onSubmit={singAuthing}>
                    <h1 className='title' data-aos="zoom-in">Kirish</h1>
                    <input data-aos="zoom-in-out" onChange={e => setSingName(e.target.value)} type="text" placeholder="Foydalanuvchi nomi" required />
                    <input data-aos="zoom-in-out" onChange={e => setSingPassword(e.target.value)} type="password" placeholder="Password" required />
                    <Link to="/auth/1">Profiingiz Mavjud Emasmi?</Link>
                    <button className='btn btn-lg btn-dark'>Kirish</button>
                </form>
            )}
        </div>
    )
}
