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
    <div className="bg-[#394253] text-white pl-[120px] py-20 overflow-hidden">
      <div className="flex justify-between mr-[120px] mb-10">
        <h1 className=" text-[32px] font-bold">Что думают о нас туристы?</h1>
        <div className="navigation-buttons flex gap-4">
          <div
            className="prev-arrow px-[15px]  py-[14px] border-[1px] border-[#394253] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handlePrev}
          >
            <FaArrowLeftLong className="w-4  text-white" />
          </div>
          <div
            className="next-arrow px-[15px]  py-[14px] border-[1px] border-[#394253] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handleNext}
          >
            <FaArrowRightLong className="w-4  text-white" />
          </div>
        </div>
      </div>

      <Swiper
        ref={sliderRef}
        // install Swiper modules
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="-mr-40 "
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
