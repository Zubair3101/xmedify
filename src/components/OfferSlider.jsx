import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './OfferSlider.css';

import banner1 from '../assets/Offers/Group 10.png';
import banner2 from '../assets/Offers/Group 11.png';
import banner3 from '../assets/Offers/Group 10.png';
import banner4 from '../assets/Offers/Group 11.png';

const OfferSlider = () => {
  return (
    <div className="banner-slider-wrapper">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <img src={banner1} alt="Banner 1" className="banner-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Banner 2" className="banner-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="Banner 3" className="banner-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="Banner 4" className="banner-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OfferSlider;