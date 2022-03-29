import react from "react";
import { SwiperSlide } from 'swiper/react'
import './style.scss'

export function Header(parms) {
  return (
      <div className="MainHeader">
        <div className="infos">
          <h1>{parms.title}</h1>
          <div>{parms.desc}</div>
        </div>
        <img src={parms.img} alt={parms.title} />
      </div>
  )
}