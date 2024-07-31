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
    <div className="px-[120px] mb-[100px]">
      <div className="flex justify-between mb-10">
        <h1 className=" text-[32px] font-bold">Сезонные предложения</h1>
        <div className="navigation-buttons flex gap-4">
          <div
            className="prev-arrow px-[15px]  py-[14px] border-[1px] border-[#fafafa] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handlePrev}
          >
            <FaArrowLeftLong className="w-4  text-[#777E90]" />
          </div>
          <div
            className="next-arrow px-[15px]  py-[14px] border-[1px] border-[#fafafa] hover:border-[1px] hover:border-[#B7BFD533] rounded-full"
            onClick={handleNext}
          >
            <FaArrowRightLong className="w-4  text-[#777E90]" />
          </div>
        </div>
      </div>

      <Swiper
        ref={sliderRef}
        // install Swiper modules
        spaceBetween={25}
        slidesPerView={4}
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
