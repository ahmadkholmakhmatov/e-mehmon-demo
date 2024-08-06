import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowLeftLong } from 'react-icons/fa6';
import SeasonCard from '../season-card/SeasonCard';

const PlaceSlider = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="2xl:w-[1600px] xl:px-[120px] lg:px-[60px] md:px-5 sm:px-5 esm:px-[10px] mx-auto xl:mb-[100px] lg:mb-[60px] md:mb-9 esm:mb-6 esm:mt-5">
      <div className="flex justify-between xl:mb-10 lg:mb-8 md:mb-6 esm:mb-5">
        <h1 className="xl:text-[32px] md:text-[26px] esm:text-2xl font-bold">
          Сезонные предложения
        </h1>
        <div className="navigation-buttons md:flex md:gap-4 esm:hidden">
          <div
            className="prev-arrow md:px-[15px] md:py-[14px] border-[1px] border-[#fafafa] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handlePrev}
          >
            <FaArrowLeftLong className="lg:w-4  text-[#777E90]" />
          </div>
          <div
            className="next-arrow md:px-[15px] md:py-[14px] border-[1px] border-[#fafafa] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handleNext}
          >
            <FaArrowRightLong className="md:w-4 text-[#777E90]" />
          </div>
        </div>
      </div>

      <Swiper
        ref={sliderRef}
        // install Swiper modules
        slidesPerView={4}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          // 1300: {
          //   slidesPerView: 4,
          //   spaceBetween: 25,
          // },
        }}
        loop={true}
      >
        <SwiperSlide>
          <SeasonCard />
        </SwiperSlide>
        <SwiperSlide>
          <SeasonCard />
        </SwiperSlide>
        <SwiperSlide>
          <SeasonCard />
        </SwiperSlide>
        <SwiperSlide>
          <SeasonCard />
        </SwiperSlide>
        <SwiperSlide>
          <SeasonCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PlaceSlider;
