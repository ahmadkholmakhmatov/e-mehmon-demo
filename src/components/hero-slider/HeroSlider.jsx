import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeroCard from '../hero-card/HeroCard';

const HeroSlider = () => {
  return (
    <div className=" text-white pl-[120px] overflow-hidden">
      <Swiper
        // install Swiper modules

        spaceBetween={40}
        slidesPerView={3}
        speed={1000}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="-mr-40 "
      >
        <SwiperSlide>
          <HeroCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
