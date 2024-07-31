import CurrencyDropDown from '../../components/currency-dropdown/CurrencyDropdown';
import LanguageDropdown from '../../components/language-dropdown/LanguageDropdown';
import { DownOutlined } from '@ant-design/icons';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { PiMapPinArea } from 'react-icons/pi';
import { MdRemoveRedEye } from 'react-icons/md';
import { FaRegBookmark } from 'react-icons/fa';
import CustomBreadCrumb from '../../components/breadcrumb/customBreadCrumb';
import ImageGallery from '../../components/image-gallery/ImageGallery';
import HotelList from '../../components/hotel-list/HotelList';
import WelcomeTeam from '../../components/welcome-team/WelcomeTeam';
import PlaceSlider from '../../components/place-slider/PlaceSlider';
import TestimonialSlider from '../../components/testimonial-slider/TestimonialSlider';
import Footer from '../../components/footer/Footer';
import HotelDescription from '../../components/hotel-description/HotelDescription';
import { DatePicker, Select } from 'antd';
import './hotelSingle.css';
import { useCurrency } from '../../utils/CurrencyContext';

const hotels = [
  {
    id: 1,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel1.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 2,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel2.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 3,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel3.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 4,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel4.png',
    rating: 8.9,
    status: 'Популярно',
  },
];

const HotelSingle = () => {
  const { currency } = useCurrency();
  const price = 120;
  const exchangeRates = {
    USD: 1,
    UZS: 11500, // Example conversion rate, adjust as needed
  };
  const convertedPrice = price * exchangeRates[currency];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#fafafa] ">
      <nav className="flex bg-white justify-between items-center px-[120px] py-[21px] ">
        <img src="/images/logoLight.svg" alt="" />
        <ul className="flex gap-x-6">
          <li>Найти жилье</li>
          <li>Куда сходить?</li>
          <li>Туры</li>
          <li>Транспорт</li>
        </ul>

        <div className="login flex items-center gap-6">
          <CurrencyDropDown />
          <LanguageDropdown />
          <button className="flex gap-x-2 px-6 py-4 rounded-2xl bg-[#232E40] text-white">
            <LiaUserCircleSolid className="w-6 h-6" /> Войти
          </button>
        </div>
      </nav>
      <div className="px-[120px] mt-[30px]">
        <CustomBreadCrumb />
        <div className="mt-[30px]">
          <div className="flex justify-between items-start mb-6">
            <div className="text-[#1D2635]">
              <h1 className="text-[32px] font-bold">
                Hotel Neptun Tashkent Pool&Spa
              </h1>

              <div className="flex items-center gap-3">
                <PiMapPinArea className="w-6 h-6 text-[#B5B5B5] text-base" />8
                ул. Лянгар, Ташкент
              </div>
            </div>

            <div className="flex gap-6 text-base text-[#2F3138] font-medium">
              <button className="flex items-center gap-2">
                <FaRegBookmark className="w-6 h-6" />
                Сохранить
              </button>
              <button className="flex items-center gap-2 ">
                <FaRegShareFromSquare className="w-6 h-6" />
                Поделиться
              </button>
            </div>
          </div>

          <div className="flex justify-between gap-6">
            <div className="basis-[calc(66%-24px)]">
              <ImageGallery />
            </div>

            <div className="basis-[calc(34%-24px)] p-6 bg-[#FFFFFF] shadow-custom rounded-2xl flex flex-col justify-between">
              <div className="flex justify-between mb-[41px]">
                <div className="flex items-center gap-2 text-[15px] text-[#7D848B]">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/assets/places/hotel1.png"
                      alt=""
                    />
                  </div>
                  Meros Group
                </div>
                <div className="flex gap-2 items-center text-[15px] text-[#3B71FE]">
                  <div className="bg-[#FFC107] p-2 rounded-full text-xs text-black ">
                    8.9
                  </div>
                  (245 отзывов)
                </div>
              </div>

              <div className="text-[#7D848B] text-base mb-6">
                от
                <span className="text-[#2F3138] text-[32px] font-bold">
                  $
                  {currency === 'USD'
                    ? `${convertedPrice.toFixed(0)}`
                    : `${convertedPrice.toFixed(0)}`}
                </span>
                /ночь
              </div>

              <form
                onSubmit={handleSubmit}
                className=" text-[#777E90] text-sm"
                action="sumbit"
              >
                <div className="flex justify-between gap-4 mb-2">
                  <div className="hotel-description-datepicker w-full">
                    <div className="mb-3">Заезд</div>
                    <DatePicker
                      className="bg-[#F8F8FA]  text-[#1D2635] flex border-none rounded-2xl p-4"
                      // suffixIcon={<PiCalendarDotsLight className=" -order-1" />}
                      placeholder="6/11/2023"
                      // onChange={(value) => setDates(dates.push(value))}
                    />
                  </div>

                  <div className="hotel-description-datepicker w-full">
                    <div className="mb-3">Выезд</div>
                    <DatePicker
                      className="bg-[#F8F8FA]  text-[#1D2635] rounded-2xl flex border-none p-4"
                      // onChange={(value) => setDates(dates.push(value))}
                      placeholder="7/11/2023"
                    />
                  </div>
                </div>

                <div className="hotel-description-selector mb-4">
                  <div className="mb-3">Кол-во гостей</div>
                  <Select
                    // prefix={<UserOutlined />}
                    placeholder="2 взрослых"
                    suffixIcon={<DownOutlined />}
                    className="w-full h-14 bg-[#F8F8FA] border-none"
                    // onChange={(e) => setGuests(e.target.value)}
                    options={[
                      {
                        value: '2взрослых',
                        label: '2 взрослых',
                      },
                      {
                        value: '1взрослых',
                        label: '1 взрослых',
                      },
                    ]}
                  ></Select>
                </div>

                <button
                  className="py-4 w-full bg-[#3276FF] text-base font-medium text-[#FFFFFF] rounded-2xl mb-8"
                  type="sumbit"
                >
                  Просмотреть наличие мест
                </button>

                <div className="text-center">
                  Цены актуальны до 24 ноября, 2023 года
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-6 px-[120px] mb-8">
        <div className="w-[calc(66%-24px)]">
          <HotelDescription />
        </div>
        <a
          className="basis-[calc(34%-24px)] h-[230px]"
          href="https://maps.app.goo.gl/fEw17c2n9mEDVgfq5"
          target="_blank"
        >
          <div className=" mt-6 relative rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src="/assets/map.png"
              alt="Side 3"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <div className="flex items-center justify-center px-6 py-4 gap-2 bg-[#181C32] bg-opacity-20 border-[1px] border-[#181C32] border-opacity-20 rounded-2xl">
                <MdRemoveRedEye className="text-white w-6 h-6" />
                <span className="text-white text-base font-medium">
                  Показать на карте
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="px-[120px] mb-[100px]">
        <h1 className="text-[32px] font-bold text-[#232E40] mb-4">
          Похожие отели
        </h1>
        <HotelList hotels={hotels} />
      </div>

      <WelcomeTeam className="mb-[100px]" />

      <PlaceSlider />

      <TestimonialSlider />

      <Footer />
    </div>
  );
};

export default HotelSingle;
