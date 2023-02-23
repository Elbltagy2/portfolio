import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css/scrollbar';
import {slider,EffectFade} from "swiper"

export default ({photo}) => {
  return (
    <Swiper className=' slider'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={require(`../assets/img/${photo[0]}`)}/></SwiperSlide>
      <SwiperSlide><img src={require(`../assets/img/${photo[1]}`)}/></SwiperSlide>
      <SwiperSlide><img src={require(`../assets/img/${photo[2]}`)}/></SwiperSlide>
      ...
    </Swiper>
  );
};