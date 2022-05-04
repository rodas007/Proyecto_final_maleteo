import './GuardianSlider.scss'
import "swiper/css";
import "swiper/css/pagination";
import Swiper, { Pagination } from "swiper";
import { useEffect } from 'react';
import fotomarta from "../../assets/images/fotoMarta.png";
import { Link } from 'react-router-dom';

const GuardianSlider = () => {
    useEffect(() => {
        const swiper = new Swiper(".swiper", {
          slidesPerView: 1.3,
          loop: true,
          centerInsufficientSlides: true,
          modules: [Pagination],
          pagination: {
            el: ".swiper-pagination",
          },
        });
      }, []);


  return (
      <div className="c-guardian swiper">
    <section className="c-guardian__section swiper-wrapper">
        
    <div className="c-guardian__ficha  swiper-slide">
    <Link to="/ficha"> <div className="c-guardian__fotobox">
        <img
          className="c-guardian__img"
          src="https://www.espaciosadaptados.com/images/rustic-dining-room-PH8RJ27.jpg"
          alt="foto1"
        ></img>
      </div> </Link>
      <div className="c-guardian__info">
        <h1 className="c-guardian__nombre">Marta</h1>
        <img
          className="c-guardian__avatar"
          src={fotomarta}
          alt="fotouser"
        ></img>
        <p className="c-guardian__distancia">⭐⭐⭐⭐ Muy cerca de ti</p>
      </div>
    </div> 


      
    <div className="c-guardian__ficha  swiper-slide">
      <div className="c-guardian__fotobox">
        <img
          className="c-guardian__img"
          src="https://www.comercionista.com/wp-content/uploads/2009/09/artem-gavrysh-698535-unsplash-800x445.jpg"
          alt="foto1"
        ></img>
      </div>
      <div className="c-guardian__info">
        <h1 className="c-guardian__nombre">Pablo</h1>
        <img
          className="c-guardian__avatar"
          src="https://www.modelos-de-curriculum.com/wp-content/uploads/2020/10/foto-para-curriculum-vitae.jpg"
          alt="fotouser"
        ></img>
        <p className="c-guardian__distancia">⭐⭐⭐⭐ A menos de 1 km de ti</p>
      </div>
    </div> 



        
    <div className="c-guardian__ficha  swiper-slide">
      <div className="c-guardian__fotobox">
        <img
          className="c-guardian__img"
          src="https://st.depositphotos.com/2222762/2416/i/600/depositphotos_24166913-stock-photo-locker-room.jpg"
          alt="foto1"
        ></img>
      </div>
      <div className="c-guardian__info">
        <h1 className="c-guardian__nombre">Victor</h1>
        <img
          className="c-guardian__avatar"
          src="https://i.pinimg.com/474x/bc/d1/fc/bcd1fc933dfb8bce791aa2c92567e31d.jpg"
          alt="fotouser"
        ></img>
        <p className="c-guardian__distancia">⭐⭐⭐ A menos de 2 km de ti</p>
      </div>
    </div> 


    <div className="c-guardian__ficha  swiper-slide">
      <div className="c-guardian__fotobox">
        <img
          className="c-guardian__img"
          src="https://www.carpinteriaydecoracionfer.com/wp-content/uploads/2020/04/AR1.jpg"
          alt="foto1"
        ></img>
      </div>
      <div className="c-guardian__info">
        <h1 className="c-guardian__nombre">Cristina</h1>
        <img
          className="c-guardian__avatar"
          src="https://curriculado.com/wp-content/uploads/2020/01/OTkyMjAuanBn.jpg"
          alt="fotouser"
        ></img>
        <p className="c-guardian__distancia">⭐⭐ A menos de 600m de ti</p>
      </div>
    </div> 

    <div className="c-guardian__ficha  swiper-slide">
      <div className="c-guardian__fotobox">
        <img
          className="c-guardian__img"
          src="https://www.hogarmania.com/archivos/201312/decogarden-509-convertir-dormitorio-en-un-taller-domestico-3-XxXx80.jpg"
          alt="foto1"
        ></img>
      </div>
      <div className="c-guardian__info">
        <h1 className="c-guardian__nombre">Marie</h1>
        <img
          className="c-guardian__avatar"
          src="https://cdn-images.livecareer.es/pages/foto_cv_lc_es_10.jpg"
          alt="fotouser"
        ></img>
        <p className="c-guardian__distancia">⭐⭐⭐ A menos de 800m del centro</p>
      </div>
    </div> 

    
    <div className="c-guardian__ficha  swiper-slide">
      <div className="c-guardian__fotobox">
        <img
          className="c-guardian__img"
          src="https://www.lacasademadera.net/wp-content/uploads/2017/01/12004097_1029594443752727_6404443333783805781_n-2-960x600.jpg"
          alt="foto1"
        ></img>
      </div>
      <div className="c-guardian__info">
        <h1 className="c-guardian__nombre">Loui</h1>
        <img
          className="c-guardian__avatar"
          src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/7-excelentes-consejos-para-escribir-tu-curriculum-vitae-05.jpg"
          alt="fotouser"
        ></img>
        <p className="c-guardian__distancia">⭐⭐⭐⭐ A menos de 1 km  del centro</p>
      </div>
    </div> 

    


    </section>
    </div>
  )
}

export default GuardianSlider
