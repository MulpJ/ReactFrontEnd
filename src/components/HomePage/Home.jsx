import React from 'react';
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './home.scss'
import rick from "./image/rick.jpg"
import inter from "./image/inter.jpg"
import hobbit from "./image/hobbit.jpg"
import mad from "./image/mad.jpg"
import { Link } from "react-router-dom";
import logo from "./image/logo.png"
import it from './image/it.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function HomePage() {

  return (
    <Swiper
    className='ma'
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{delay: 5000}}
     
    >
        <header className="header">
            <Link className="lon"to="/login">Entrar</Link>
             <img className="loo" src={logo}></img><p className="nome">MulpJ</p>
             <h1>Melhor Plataforma de Filmes e series</h1>
                <Link className="se" to="/register" >Cadastre-se Agora</Link>   
        </header>
      <SwiperSlide>
          <img className='background' src={rick}/>
      </SwiperSlide>
      <SwiperSlide>
          <img className='background'src={hobbit}/>
      </SwiperSlide>
      <SwiperSlide>
          <img className='background'src={inter}/>
      </SwiperSlide>
      <SwiperSlide>
          <img className='background' src={mad}/>
      </SwiperSlide>
      <SwiperSlide>
          <img className='background' src={it}/>
      </SwiperSlide>
    </Swiper>
  );
};
