import CurrencyDropDown from '../../components/currency-dropdown/CurrencyDropdown';
import LanguageDropdown from '../../components/language-dropdown/LanguageDropdown';
import { DownOutlined } from '@ant-design/icons';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

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
    name: 'Saturn Hotel Great',
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

const HotelSingle = ({ auth }) => {
  const authentication = auth;
  const { currency } = useCurrency();
  const { state } = useLocation();
  const navRef = useRef();

  console.log(authentication);
  const navigate = useNavigate();

  const exchangeRates = {
    USD: 1,
    UZS: 11500, // Example conversion rate, adjust as needed
  };

  const handleLogin = () => {
    if (authentication.token) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const convertedPrice = state?.price * exchangeRates[currency];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#fafafa] ">
      <div className="bg-white">
        <nav className="lg:flex lg:justify-between lg:items-center 2xl:w-[1600px] lg:px-[60px] lg:py-[25px] xl:text-sm lg:text-xs xl:px-[120px] xl:py-[45px] esm:hidden font-medium  mx-auto ">
          <Link to="/">
            <img
              className="lg:w-40  xl:w-[184px]"
              src="/images/logoLight.svg"
              alt=""
            />
          </Link>
          <ul className="flex  gap-x-6">
            <a href="#search">
              <li className="xl:text-sm lg:text-xs">Найти жилье</li>
            </a>

            <a href="#search">
              <li className="xl:text-sm lg:text-xs">Куда сходить?</li>
            </a>
            <a href="#place">
              <li className="xl:text-sm lg:text-xs">Туры</li>
            </a>

            <a href="">
              <li className="xl:text-sm lg:text-xs">Транспорт</li>
            </a>
          </ul>
          <div className="login flex items-center gap-6">
            <CurrencyDropDown />
            <LanguageDropdown />
            <button
              className="flex items-center gap-x-2 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded-2xl text-white bg-[#232E40]"
              onClick={handleLogin}
            >
              <LiaUserCircleSolid className="xl:w-6 xl:h-6 lg:w-5 lg:h-5" />
              {authentication.token ? 'Профиль' : 'Войти'}
            </button>
          </div>
        </nav>

        <header
          x
          className="esm:flex items-center justify-between py-5 text-[#232E40] sm:px-[20px] esm:px-[10px] lg:hidden"
        >
          <Link to="/">
            <img
              className="sm:w-[142px] esm:w-[120px]"
              src="/images/logoLight.svg"
              alt=""
            />
          </Link>

          <div className="h-div flex sm:gap-4 esm:gap-2">
            <div className="h-div login flex items-center sm:gap-6 esm:gap-2">
              <CurrencyDropDown />
              <LanguageDropdown />
            </div>
            <nav ref={navRef} className="mobile-nav z-20 flex flex-col">
              <ul className="flex flex-col gap-x-6">
                <a href="#search">
                  <li>Найти жилье</li>
                </a>

                <a href="#search">
                  <li>Куда сходить?</li>
                </a>
                <a href="#place">
                  <li>Туры</li>
                </a>
                <a href="#place">
                  <li>Транспорт</li>
                </a>
              </ul>
              <button
                className="flex items-center gap-x-2 px-6 py-4 rounded-2xl bg-[#232E40] text-white"
                onClick={handleLogin}
              >
                <LiaUserCircleSolid className="w-6 h-6" />
                {authentication.token ? 'Профиль' : 'Войти'}
              </button>
              <button className="nav-btn close-btn p-0" onClick={showNavbar}>
                <FaTimes className="sm:w-6 sm:h-6 esm:w-5 esm:h-5 text-black" />
              </button>
            </nav>
            <button className="nav-btn close-btn p-0" onClick={showNavbar}>
              <FaBars className="sm:w-6 sm:h-6 esm:w-5 esm:h-5 text-black" />
            </button>
          </div>
        </header>
      </div>

      <div className="2xl:w-[1600px] xl:px-[120px] mx-auto xl:mt-[30px] esm:px-[10px] esm:mt-5">
        <div className="sm:block esm:hidden">
          <CustomBreadCrumb name={state.name} />
        </div>
        <div className="sm:mt-[30px] esm:mt-0">
          <div className="flex esm:flex-wrap justify-between items-start sm:mb-6 esm:mb-4">
            <div className="text-[#1D2635]">
              <h1 className="text-[32px] esm:text-[30px] font-bold">
                {state.name}
              </h1>

              <div className="flex items-center gap-3 sm:mb-0 esm:mb-4">
                <PiMapPinArea className="sm:w-6 sm:h-6 esm:w-5 esm:h-5 text-[#B5B5B5] sm:text-base esm:text-sm" />
                {state.address}
              </div>
            </div>

            <div className="flex sm:gap-6 esm:gap-4 sm:text-base esm:text-sm text-[#2F3138] font-medium">
              <button className="flex items-center sm:gap-2 esm:gap-1">
                <FaRegBookmark className="sm:w-6 sm:h-6 esm:w-5 esm:h-5" />
                Сохранить
              </button>
              <button className="flex items-center sm:gap-2 esm:gap-1">
                <FaRegShareFromSquare className="sm:w-6 sm:h-6 esm:w-5 esm:h-5" />
                Поделиться
              </button>
            </div>
          </div>

          <div className="flex esm:flex-wrap justify-between sm:gap-6 esm:gap-5">
            <div className="sm:basis-[calc(66%-24px)] esm:basis-full">
              <ImageGallery imgSrc={state.imgSrc} />
            </div>

            <div className="sm:basis-[calc(34%-24px)] esm:basis-full sm:p-6 esm:p-5 bg-[#FFFFFF] shadow-custom rounded-2xl flex flex-col justify-between">
              <div className="flex justify-between sm:mb-[41px] esm:mb-[38px]">
                <div className="flex items-center gap-2 sm:text-[15px] esm:text-base text-[#7D848B]">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/assets/places/hotel1.png"
                      alt=""
                    />
                  </div>
                  Meros Group
                </div>
                <div className="flex gap-2 items-center sm:text-[15px] esm:text-base text-[#3B71FE]">
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
                  className="py-4 w-full bg-[#3276FF] text-base font-medium text-[#FFFFFF] rounded-2xl sm:mb-8 esm:mb-5"
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

      <div className="flex md:flex-nowrap esm:flex-wrap justify-between gap-6 2xl:w-[1600px] xl:px-[120px] esm:px-[10px] mx-auto mb-8">
        <div className="md:w-[calc(66%-24px)] esm:w-full md:order-1 esm:order-2">
          <HotelDescription />
        </div>

        <div className="md:basis-[calc(34%-24px)] esm:basis-full md:order-2 esm:order-1 md:h-[230px] esm:h-[244px] md:mt-6 esm:mt-5 relative rounded-2xl overflow-hidden">
          <a
            className="block w-full h-full"
            href="https://maps.app.goo.gl/fEw17c2n9mEDVgfq5"
            target="_blank"
          >
            <img
              className="w-full h-full object-cover rounded-2xl"
              src="/assets/map.png"
              alt="Side 3"
            />
          </a>
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="flex items-center justify-center px-6 py-4 gap-2 bg-[#181C32] bg-opacity-20 border-[1px] border-[#181C32] border-opacity-20 rounded-2xl">
              <MdRemoveRedEye className="text-white w-6 h-6" />
              <span className="text-white text-base font-medium">
                Показать на карте
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:w-[1600px] xl:px-[120px] esm:px-[10px] mx-auto xl:mb-[100px] esm:mb-5">
        <h1 className="text-[32px] font-bold text-[#232E40] mb-4">
          Похожие отели
        </h1>
        <HotelList hotels={hotels} />
      </div>

      <WelcomeTeam className="mb-[100px]" />

      <div id="place">
        <PlaceSlider />
      </div>

      <TestimonialSlider />

      <Footer />
    </div>
  );
};

export default HotelSingle;
