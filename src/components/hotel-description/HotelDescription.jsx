import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import RatingCard from '../rating-card/RatingCard';
import { Space, Tabs } from 'antd';
import './hotelDescription.css';

const amenities = [
  { icon: '/assets/amenties/hotel.svg', label: 'Роскошные номера' },
  { icon: '/assets/amenties/pool.svg', label: 'Превосходные бассейны' },
  { icon: '/assets/amenties/drink.svg', label: 'Элегантные бары' },
  { icon: '/assets/amenties/dish.svg', label: 'Изысканные рестораны' },
  { icon: '/assets/amenties/tv.svg', label: 'Техника высшего класса' },
  { icon: '/assets/amenties/towels.svg', label: 'Спа-центр' },
  { icon: '/assets/amenties/drink.svg', label: 'Элегантные бары' },
  { icon: '/assets/amenties/bed.svg', label: 'Качественная мебель' },
  { icon: '/assets/amenties/hotel.svg', label: 'Роскошные номера' },
  { icon: '/assets/amenties/towels.svg', label: 'Спа-центр' },
  { icon: '/assets/amenties/bucket.svg', label: 'Обслуживание на уровне' },
  { icon: '/assets/amenties/pool.svg', label: 'Превосходные бассейны' },
];

const { TabPane } = Tabs;

const HotelDescription = () => {
  return (
    <div className="w-full md:mt-10 esm:mt-5 overflow-hidden font-onest">
      <Tabs defaultActiveKey="1">
        <TabPane style={{ padding: 0 }} tab="Описание" key="1">
          <Space className="block text-[#1D2635] ">
            <div className="mb-8 pb-8 border-b border-mainGrey/30">
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
            <div className="mb-8 pb-8 border-b border-mainGrey/30">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">Удобства отеля</h1>
                <div className="text-[15px]">
                  Наш отель включает в себя уютные номера и общественные зоны
                  для комфортного отдыха, а также:
                </div>
              </div>
              <div className="grid md:grid-cols-3 md:grid-rows-4 md:gap-x-10 md:gap-y-6 esm:grid-cols-2 esm:gap-x-5 esm:gap-y-5">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex md:gap-4 esm:gap-2 items-center min-w-fit"
                  >
                    <div className="bg-mainBlue bg-opacity-[8%] md:p-2 esm:p-1.5 rounded-full">
                      <img src={amenity.icon} alt={amenity.label} />
                    </div>
                    {amenity.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="pb-8 border-b border-mainGrey/30">
              <div className="flex justify-between mb-4">
                <h1 className="text-[#1D2635] text-2xl font-bold">
                  Отзывы посетилетей
                </h1>
                <a href="#" className="text-mainBlue">
                  Все отзывы
                  <svg
                    className="inline-block w-3 h-3"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.50003 10.0001L8.5 6.00009L4.5 2.00012"
                      stroke="#3B71FE"
                      strokeWidth="1.5"
                      strokeMiterlimit="16"
                    />
                  </svg>
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
