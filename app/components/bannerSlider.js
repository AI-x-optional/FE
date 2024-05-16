"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BannerSlider() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
    return (
        <Swiper
          loop={true}
          spaceBetween={30} 
          slidesPerView={1} 
          navigation={true}
          pagination= {true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>  
              <a href={slide.url}>
                <img className='rounded-lg' src={slide.image}/>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
    );
  }
  
  const slideData = [
    {
      id: 1,
      image: "/banner.jpeg",
      url: "https://www.eteverslearning.com/Camp-program/?idx=539&utm_source=boottent&utm_medium=referral"
    },
    {
      id: 2,
      image: "/banner.jpeg",
      url: "https://www.eteverslearning.com/Camp-program/?idx=539&utm_source=boottent&utm_medium=referral"
    },
    {
      id: 3,
      image: "/banner.jpeg",
      url: "https://www.eteverslearning.com/Camp-program/?idx=539&utm_source=boottent&utm_medium=referral"
    }
  ];
