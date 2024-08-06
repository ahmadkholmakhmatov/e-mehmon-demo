import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import RatingCard from '../rating-card/RatingCard';
import { FaAngleRight } from 'react-icons/fa6';
import { Space, Tabs } from 'antd';
import './hotelDescription.css';

const { TabPane } = Tabs;

const HotelDescription = () => {
  return (
    <div className="w-full mt-10 overflow-hidden">
      <Tabs defaultActiveKey="1">
        <TabPane style={{ padding: 0 }} tab="Описание" key="1">
          <Space className="block text-[#1D2635] ">
            <div className="mb-8 pb-8 border-b border-[#777E90]">
              <h1 className="text-2xl text-[#1D2635] font-bold mb-4">
                Описание отеля
              </h1>
              <p className="text-[15px] leading-[22.5px]">
                Ощутите роскошь в ее лучших проявлениях, остановившись в нашем
                потрясающем четырехспальном отеле в Ташкенте. Расположенный в
                самом сердце города, наш отель предоставляет уникальную
                возможность насладиться комфортом и роскошью. Стильные номера с
                кондиционером оборудованы прекрасной террасой, частным бассейном
                и захватывающими видами, предоставляя проживающим незабываемый
                опыт. Этот элегантный отель идеально подходит для групп,
                стремящихся к выдающемуся уровню роскоши и полного расслабления.
                Вас ждет простор и уединение в нашем отеле в Ташкенте,
                обеспечивающем высший уровень сервиса читать далее
              </p>
            </div>
            <div className="mb-8 pb-8 border-b border-[#777E90]">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">Удобства отеля</h1>
                <div className="text-[15px]">
                  Наш отель включает в себя уютные номера и общественные зоны
                  для комфортного отдыха, а также:
                </div>
              </div>
              <div className="grid md:grid-cols-3 md:grid-rows-4 md:gap-x-10 md:gap-y-6 esm:grid-cols-2 esm:gap-x-5 esm:gap-y-5">
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/hotel.svg" alt="" />
                  </div>
                  Роскошные номера
                </div>
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/pool.svg" alt="" />
                  </div>
                  Превосходные бассейны
                </div>
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/drink.svg" alt="" />
                  </div>
                  Элегантные бары
                </div>
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/dish.svg" alt="" />
                  </div>
                  Изысканные рестораны
                </div>

                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/tv.svg" alt="" />
                  </div>
                  Техника высшего класса
                </div>
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/towels.svg" alt="" />
                  </div>
                  Спа-центр
                </div>
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/drink.svg" alt="" />
                  </div>
                  Элегантные бары
                </div>
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/bed.svg" alt="" />
                  </div>
                  Качественная мебель
                </div>
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/hotel.svg" alt="" />
                  </div>
                  Роскошные номера
                </div>
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/towels.svg" alt="" />
                  </div>
                  Спа-центр
                </div>
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/bucket.svg" alt="" />
                  </div>
                  Обслуживание на уровне
                </div>
                <div className="flex items-center min-w-fit">
                  <div className="bg-[#3276FF] bg-opacity-[8%] p-2 rounded-full">
                    <img src="/assets/amenties/pool.svg" alt="" />
                  </div>
                  Превосходные бассейны
                </div>
              </div>
            </div>

            <div className="pb-8 border-b border-[#777E90]">
              <div className="flex justify-between mb-4">
                <h1 className="text-[#1D2635] text-2xl font-bold">
                  Отзывы посетилетей
                </h1>
                <a href="#" className="text-blue-500">
                  Все отзывы <FaAngleRight className="inline-block w-3 h-3" />
                </a>
              </div>
              <Swiper
                // install Swiper modules
                spaceBetween={40}
                slidesPerView={2}
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="md:-mr-40 esm:-mr-48"
              >
                <SwiperSlide>
                  <RatingCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RatingCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RatingCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RatingCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </Space>
        </TabPane>
        <TabPane tab="Наличие мест" key="2" />
        <TabPane tab="Что рядом?" key="3" />
        <TabPane tab="Дополнительные услуги" key="4" />
      </Tabs>

      <div className="mt-6"></div>
    </div>
  );
};

export default HotelDescription;
