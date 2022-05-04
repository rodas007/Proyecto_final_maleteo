

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";



import "./SliderHome.scss";

const SliderHome = ({novedades}) => {

/* console.log("NOVEDAD 1",novedades) */
  return (
    <div className="c-slider">
    <h1 className="c-slider__text">Novedades</h1>
      <div className="c-news swiper" >
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiper)}
          onSlideChange={() => ("slide change")}
        >

{novedades?.map((novedad)=>
            <div key={novedad.text} className="c-news__item">

          <SwiperSlide>
            <img className="c-news__item-img" alt={novedad.title}  
              src={novedad.image}
              
            />
          </SwiperSlide>
          </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderHome;