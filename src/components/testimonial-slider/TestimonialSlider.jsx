import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowLeftLong } from 'react-icons/fa6';
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
    <div className="bg-[#394253] text-white xl:pl-[120px] lg:pl-[60px] xl:py-20 lg:py-12 overflow-hidden">
      <div className="flex justify-between 2xl:w-[1470px] mx-auto xl:pr-[120px] lg:pr-[60px] xl:mb-10 lg:mb-9">
        <h1 className="xl:text-[32px] lg:text-[26px] font-bold">
          Что думают о нас туристы?
        </h1>
        <div className="navigation-buttons flex xl:gap-4">
          <div
            className="prev-arrow lg:px-[15px]  lg:py-[14px] border-[1px] border-[#394253] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handlePrev}
          >
            <FaArrowLeftLong className="lg:w-4  text-white" />
          </div>
          <div
            className="next-arrow lg:px-[15px]  lg:py-[14px] border-[1px] border-[#394253] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handleNext}
          >
            <FaArrowRightLong className="lg:w-4  text-white" />
          </div>
        </div>
      </div>

      <Swiper
        ref={sliderRef}
        // install Swiper modules
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        className="2xl:w-[1680px] -mr-40 "
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
