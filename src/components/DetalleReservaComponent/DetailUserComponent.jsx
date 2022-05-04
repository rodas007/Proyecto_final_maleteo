import React from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./DetailUserComponent.scss";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowBackComponent } from '../../components/ArrowBackComponent/ArrowBackComponent';
import { Link } from "react-router-dom";

const DetalleReservaComponent = () => {
  return (
    <>
    <Link to="/confirmaciondereserva"><ArrowBackComponent/></Link>
    <div className="c-box">
    
        <Swiper
        
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiper)}
          onSlideChange={() => ("slide change")}
        >
          <SwiperSlide>
          
            <img
              src="https://www.espaciosadaptados.com/images/rustic-dining-room-PH8RJ27.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://mx.habcdn.com/photos/project/medium/buhardilla-534850.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/foto-gratis/muebles-nuevos-empotrados-pequeno-vestidor-trastero-moderno-vacio-cajones-armario-mucho-espacio-perchas_157754-390.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3images.coroflot.com/user_files/individual_files/large_203306_CsygzzGzyisXBgAaTAwZhdSXP.JPG"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="c-reserva-cont">
          <div className='c-reserva-cont-1'>
          <h1>El hall de Marta</h1>
          <p>C/ Bordadores, Madrid</p>
          <p>Calle Bordadores 6, Madrid</p>
          <p>Guardiana: Marta</p>
         </div>
         <div className='c-reserva-cont-2'>
           <img className='c-reserva-cont-2-img' src="https://cdn.zeplin.io/5d4d342a87666d9bb5130c1e/assets/9DE23EA4-2551-43A0-8CAC-6CE572BCFFFA.png" alt="" />

         </div>
        </div>
        <div className='ubicacion'>
          <h3>Ubicacion</h3>
          <img src="https://i.gyazo.com/93b8562de07eec463d338d49073d4e19.png" alt="" />
          <div className='ubicacion-cont'>
          <div>
            <p className='ubicacion-cont-text'>Llegada</p>
            <p>30 de Julio</p>
          </div>
          <div>
            <p className='ubicacion-cont-text'>Recogida</p>
            <p>30 de Julio</p>
          </div>
          <div>
            <p className='ubicacion-cont-text'>Equipaje</p>
            <p>2 Equipajes</p>
          </div>
          </div>
          <div className='normas'>
            <div>
              <div className='normas-cont'>
              <p>
                Normas de Marta
              </p>
              <p>Puntualidad</p>
              </div>
            </div>
            <div className='normas-cont'>
              <p>
                ¿Cómo debe ser tu maleta?
              </p>
              <p>No debe exceder los 20kg</p>
            </div>
            <div className='normas-cont'>
              <p>
                Código de reserva
              </p>
              <p className='normas-cont-text'>
              h3u5de8xg
              </p>
            </div>
            <div className='normas-cont'>
              <p>
                Coste total
              </p>
              <p className='normas-cont-text'>12€</p>
            <Link to="/breakdown"> <a className='normas-cont-a' href="Desglose">Desglose</a></Link>
            </div>
            <div className='normas-cont'>
              
             <p>¿Necesitas ayuda?</p>
            
              <a href="customerservice@maleteo.com">customerservice@maleteo.com</a>
            </div>

          </div>
        </div>
    </>
  )
}

export default DetalleReservaComponent