import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css/scrollbar';
import {slider,EffectFade} from "swiper"

export default ({photo,path}) => {
  return (
    <Swiper className=' slider'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
    {
      photo.map(item=>
        
        <SwiperSlide key={item}><img src={require(`../assets/img/${path}/${item}.png`)}/></SwiperSlide>

      )
    }
      
      ...
    </Swiper>
  );
};