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
    <div className="2xl:w-[1600px] xl:px-[120px] lg:px-[60px] mx-auto xl:mb-[100px] lg:mb-[60px]">
      <div className="flex justify-between xl:mb-10 lg:mb-8">
        <h1 className="xl:text-[32px] lg:text-[26px] font-bold">
          Сезонные предложения
        </h1>
        <div className="navigation-buttons flex lg:gap-4 ">
          <div
            className="prev-arrow xl:px-[15px] xl:py-[14px] lg:px-[15px] lg:py-[14px] border-[1px] border-[#fafafa] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handlePrev}
          >
            <FaArrowLeftLong className="lg:w-4  text-[#777E90]" />
          </div>
          <div
            className="next-arrow xl:px-[15px]  xl:py-[14px] lg:px-[15px] lg:py-[14px] border-[1px] border-[#fafafa] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handleNext}
          >
            <FaArrowRightLong className="lg:w-4 text-[#777E90]" />
          </div>
        </div>
      </div>

      <Swiper
        ref={sliderRef}
        // install Swiper modules
        slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
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
