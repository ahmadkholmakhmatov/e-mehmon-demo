import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
        <h1 className="xl:text-[32px] md:text-[26px] esm:text-2xl font-bold text-mainDark">
          Сезонные предложения
        </h1>
        <div className="navigation-buttons md:flex md:gap-4 esm:hidden">
          <div
            className="prev-arrow md:p-[10px] border-[1px] border-customBg hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handlePrev}
          >
            <svg
              className="md:w-6 text-mainGrey"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="next-arrow md:p-[10px] border-[1px] border-customBg hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handleNext}
          >
            <svg
              className="md:w-6 text-mainGrey"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12L3.99998 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
