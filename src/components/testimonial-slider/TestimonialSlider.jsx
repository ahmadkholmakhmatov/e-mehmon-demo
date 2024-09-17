import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from '../testimonial-card/TestimonialCard';

const TestimonialSlider = () => {
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
    <div className="bg-[#394253] text-white xl:pl-[120px] lg:pl-[60px] md:px-5 sm:px-5 esm:px-[10px] xl:py-20 md:py-12 esm:py-[20px] overflow-hidden">
      <div className="flex justify-between items-center 2xl:w-[1470px] mx-auto xl:pr-[120px] lg:pr-[60px] md:pr-5 esm:pr-[10px] xl:mb-10 md:mb-9 esm:mb-5">
        <h1 className="xl:text-[32px] lg:text-[26px] esm:text-[22px] font-bold">
          Что думают о нас туристы?
        </h1>
        <div className="navigation-buttons md:flex xl:gap-4 md:gap-3 esm:hidden">
          <div
            className="prev-arrow md:p-[10px] border-[1px] border-[#394253] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handlePrev}
          >
            <svg
              className=" text-white"
              width="24"
              height="24"
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
            className="next-arrow md:p-[10px] border-[1px] border-[#394253] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handleNext}
          >
            <svg
              className=" text-white"
              width="24"
              height="24"
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
        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 35,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          // 1300: {
          //   slidesPerView: 4,
          //   spaceBetween: 25,
          // },
        }}
        loop={true}
        className="2xl:w-[1680px] -mr-40"
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
