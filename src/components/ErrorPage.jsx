import React from 'react'
import { Link } from 'react-router-dom'
import pageNotFound from "../images/pageNotFound.gif"

export default function ErrorPage() {
  return (
    <div className='container-sm'>
      <img src={pageNotFound} alt="page404" className="pageError" />
      <h1 className='title text-center mt-5 mb-5' data-aos="zoom-in">Sahifa Topilmadi! Bosh Menyuga Qaytish Uchun <Link className='color' to="/">Bosing!</Link></h1>
    </div>
  )
}
