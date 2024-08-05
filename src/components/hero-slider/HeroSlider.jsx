import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeroCard from '../hero-card/HeroCard';

const HeroSlider = () => {
  return (
    <div className=" 2xl:w-[1600px] xl:w-[1440px] xl:pl-[120px] sm:w-full lg:pl-[60px] sm:pl-5 esm:pl-[10px] sm:my-0 esm:my-4 mx-auto text-white">
      <Swiper
        // install Swiper modules

        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        speed={1000}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        loop={true}
        modules={[Autoplay]}
        className="lg:-mr-40 sm:-mr-20 esm:-mr-32"
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
