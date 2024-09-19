import CurrencyDropDown from '../../components/currency-dropdown/CurrencyDropdown';
import LanguageDropdown from '../../components/language-dropdown/LanguageDropdown';
import { DownOutlined } from '@ant-design/icons';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { FaBars, FaTimes } from 'react-icons/fa';
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
import { useContext, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShareButtons from '../../components/share-buttons/ShareButtons';
import { AuthContext } from '../../utils/AuthContext';
import { t } from 'i18next';
import AccountDropdown from '../../components/account-dropdown/AccountDropdown';

const hotels = [
  {
    id: 1,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel1.webp',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 2,
    name: 'Saturn Hotel Great',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel2.webp',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 3,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel3.webp',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 4,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel4.webp',
    rating: 8.9,
    status: 'Популярно',
  },
];

const HotelSingle = () => {
  const [firstDate, setFirstDate] = useState(null);
  const [secondDate, setSecondDate] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [guests, setGuests] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);
  const { currency } = useCurrency();
  const { state } = useLocation();
  const navRef = useRef();

  const navigate = useNavigate();

  const exchangeRates = {
    USD: 1,
    UZS: 11500, // Example conversion rate, adjust as needed
  };

  const handleLogin = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const convertedPrice = state?.price * exchangeRates[currency];

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstDate,
      secondDate,
      guests,
    };
    console.log(formData);
  };

  async function copyToClip() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('URL successfully copied!');
    } catch (error) {
      toast.error('Failed to copy the URL');
    }
  }

  return (
    <div className="bg-customBg ">
      <div className="bg-white">
        <nav className="lg:flex lg:justify-between lg:items-center 2xl:w-[1600px] lg:px-[60px] lg:py-[25px] xl:text-sm lg:text-xs xl:px-[120px] xl:py-[21px] esm:hidden font-onest text-mainDark font-medium  mx-auto ">
          <Link to="/">
            <img
              className="lg:w-40  xl:w-[184px]"
              src="/images/logoLight.svg"
              alt=""
            />
          </Link>
          <ul className="flex gap-x-6">
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
            {isAuthenticated && <AccountDropdown />}

            {!isAuthenticated && (
              <button
                className="flex items-center gap-x-2 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded-2xl bg-mainDark"
                onClick={handleLogin}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>

                {t('header.sixWord')}
              </button>
            )}
          </div>
        </nav>

        <header
          x
          className="esm:flex items-center justify-between py-5 text-mainDark font-onest sm:px-[20px] esm:px-[10px] lg:hidden"
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
                {isAuthenticated ? 'Профиль' : 'Войти'}
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

      <div className="2xl:w-[1600px] xl:px-[120px] mx-auto lg:px-[60px] md:px-[30px] sm:px-5 sm:mt-7 esm:px-[10px] esm:mt-5">
        <div className="sm:block esm:hidden">
          <CustomBreadCrumb name={state.name} />
        </div>
        <div className="md:mt-[30px] sm:mt-5 esm:mt-0">
          <div className="flex esm:flex-wrap justify-between items-start md:mb-6 sm:mb-5 esm:mb-4">
            <div className="text-[#1D2635] ">
              <h1 className="md:text-[32px] esm:text-[30px] font-bold font-fdeck">
                {state.name}
              </h1>

              <div className="flex items-center gap-3 md:mb-6 sm:mb-5 esm:mb-4 font-onest text-base text-mainGrey">
                <svg
                  className="sm:w-6 sm:h-6 esm:w-5 esm:h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                {state.address}
              </div>
            </div>

            <div className="flex md:gap-6 sm:gap-5 esm:gap-4 sm:text-base esm:text-sm text-mainDark font-onest font-medium">
              <button
                onClick={() => {
                  copyToClip();
                }}
                className="hover:scale-105 transition-transform duration-500 flex items-center sm:gap-2 esm:gap-1"
              >
                <svg
                  className="md:w-6 md:h-6 esm:w-5 esm:h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                    stroke="#2F3138"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Сохранить
              </button>

              <div className="relative ">
                <button
                  onClick={toggleVisibility}
                  className="hover:scale-105 transition-transform duration-500 flex items-center sm:gap-2 esm:gap-1"
                >
                  <svg
                    className="md:w-6 md:h-6 esm:w-5 esm:h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3927 8.03168L18.6457 6.51461C17.3871 5.42153 16.8937 4.83352 16.2121 5.04139C15.3622 5.30059 15.642 6.93609 15.642 7.48824C14.3206 7.48824 12.9468 7.38661 11.6443 7.59836C7.34453 8.29742 6 11.3566 6 14.6525C7.21697 13.9065 8.43274 13.0746 9.8954 12.7289C11.7212 12.2973 13.7603 12.5032 15.642 12.5032C15.642 13.0554 15.3622 14.6909 16.2121 14.9501C16.9844 15.1856 17.3871 14.5699 18.6457 13.4769L20.3927 11.9598C21.4642 11.0293 22 10.564 22 9.99574C22 9.4275 21.4642 8.96223 20.3927 8.03168Z"
                      stroke="#2F3138"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5676 3C6.70735 3.00694 4.68594 3.10152 3.39411 4.39073C2 5.78202 2 8.02125 2 12.4997C2 16.9782 2 19.2174 3.3941 20.6087C4.78821 22 7.03198 22 11.5195 22C16.0071 22 18.2509 22 19.645 20.6087C20.6156 19.64 20.9104 18.2603 21 16"
                      stroke="#2F3138"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Поделиться
                </button>

                {isVisible && (
                  <div className="absolute md:bottom-0  esm:top-[140%]">
                    <ShareButtons
                      toggleVisibility={toggleVisibility}
                      url={window.location.href}
                      title={'Check this hotel'}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex md:flex-nowrap esm:flex-wrap justify-between lg:gap-6 md:gap-3 esm:gap-5">
            <div className="lg:basis-[calc(66%-24px)] md:basis-[calc(63%-12px)] esm:basis-full">
              <ImageGallery imgSrc={state.imgSrc} />
            </div>

            <div className="lg:basis-[calc(34%-24px)] md:basis-[calc(37%-12px)] esm:basis-full lg:p-6 md:p-3 sm:p-6 esm:p-5 bg-white shadow-custom rounded-2xl flex flex-col justify-between font-onest">
              <div className="flex justify-between sm:mb-[41px] esm:mb-[38px]">
                <div className="flex items-center gap-2 sm:text-[15px] esm:text-base text-[#7D848B]">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="/assets/places/hotel1.webp"
                      alt=""
                    />
                  </div>
                  Meros Group
                </div>
                <div className="flex gap-2 items-center sm:text-[15px] esm:text-base text-mainBlue">
                  <div className="bg-[#FFC107] p-2 rounded-full text-xs text-[#133448] ">
                    8.9
                  </div>
                  (245 отзывов)
                </div>
              </div>

              <div className="text-[#7D848B] text-base mb-6">
                от{' '}
                <span className="text-[#2F3138] text-[32px] font-bold">
                  {currency === 'USD'
                    ? `$${convertedPrice.toFixed(0)}`
                    : `${convertedPrice.toFixed(0)}`}
                </span>
                /ночь
              </div>

              <form
                onSubmit={handleSubmit}
                className=" text-mainGrey text-sm font-onest"
                action="sumbit"
              >
                <div className="flex justify-between gap-4 mb-2">
                  <div className="hotel-description-datepicker w-full">
                    <div className="mb-3">Заезд</div>
                    <DatePicker
                      className="bg-customBg  text-[#1D2635] flex border-none rounded-2xl p-4"
                      // suffixIcon={<PiCalendarDotsLight className=" -order-1" />}
                      onChange={(date, dateString) => setFirstDate(dateString)}
                      placeholder="6/11/2023"
                      // onChange={(value) => setDates(dates.push(value))}
                    />
                  </div>

                  <div className="hotel-description-datepicker w-full">
                    <div className="mb-3">Выезд</div>
                    <DatePicker
                      className="bg-customBg  text-[#1D2635] rounded-2xl flex border-none p-4"
                      onChange={(date, dateString) => setSecondDate(dateString)}
                      // onChange={(value) => setDates(dates.push(value))}
                      placeholder="7/11/2023"
                    />
                  </div>
                </div>

                <div className="hotel-description-selector mb-4 ">
                  <div className="mb-3">Кол-во гостей</div>
                  <Select
                    // prefix={<UserOutlined />}
                    placeholder="2 взрослых"
                    suffixIcon={<DownOutlined />}
                    className="w-full h-14 bg-[#F8F8FA] border-none"
                    onChange={(value) => setGuests(value)}
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
                  className="hover:scale-105 transition-transform duration-500 py-4 w-full bg-mainBlue text-base font-medium text-white rounded-2xl md:mb-8 sm:mb-6 esm:mb-5"
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

      <div className="flex md:flex-nowrap esm:flex-wrap justify-between lg:gap-6 md:gap-4 esm:gap-4 2xl:w-[1600px] xl:px-[120px] lg:px-[60px] md:px-[30px] sm:px-5 esm:px-[10px] mx-auto mb-8">
        <div className="lg:w-[calc(66%-24px)] md:w-[calc(63%-16px)] esm:w-full md:order-1 esm:order-2">
          <HotelDescription />
        </div>

        <a
          className="block lg:basis-[calc(34%-24px)] md:basis-[calc(37%-16px)] esm:basis-full md:order-2 esm:order-1"
          href="https://maps.app.goo.gl/fEw17c2n9mEDVgfq5"
          target="_blank"
        >
          <div className="esm:basis-full md:h-[230px] sm:h-[250px] esm:h-[244px] md:px-0 sm:px-[40px] md:mt-6 esm:mt-5 relative rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src="/assets/map.png"
              alt="Side 3"
            />

            <div className="absolute inset-0  flex items-center justify-center">
              <div className="flex items-center justify-center px-6 py-4 gap-2 bg-[#181C32] bg-opacity-20 border-[1px] border-[#181C32] border-opacity-20 rounded-2xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.28114 12C9.28114 12.6962 9.5577 13.3639 10.05 13.8562C10.5423 14.3484 11.2099 14.625 11.9061 14.625C12.6023 14.625 13.27 14.3484 13.7623 13.8562C14.2546 13.3639 14.5311 12.6962 14.5311 12C14.5311 11.3038 14.2546 10.6361 13.7623 10.1438C13.27 9.65156 12.6023 9.375 11.9061 9.375C11.2099 9.375 10.5423 9.65156 10.05 10.1438C9.5577 10.6361 9.28114 11.3038 9.28114 12ZM22.0827 11.3953C19.8608 6.71484 16.5022 4.35938 11.9999 4.35938C7.4952 4.35938 4.13895 6.71484 1.91708 11.3977C1.82796 11.5864 1.78174 11.7925 1.78174 12.0012C1.78174 12.2099 1.82796 12.416 1.91708 12.6047C4.13895 17.2852 7.49755 19.6406 11.9999 19.6406C16.5046 19.6406 19.8608 17.2852 22.0827 12.6023C22.2632 12.2227 22.2632 11.782 22.0827 11.3953ZM11.9061 16.125C9.62802 16.125 7.78114 14.2781 7.78114 12C7.78114 9.72188 9.62802 7.875 11.9061 7.875C14.1843 7.875 16.0311 9.72188 16.0311 12C16.0311 14.2781 14.1843 16.125 11.9061 16.125Z"
                    fill="white"
                  />
                </svg>

                <span className="text-white text-base font-medium">
                  Показать на карте
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="2xl:w-[1600px] xl:px-[120px] lg:px-[60px] md:px-[30px] sm:px-5 esm:px-[10px] mx-auto xl:mb-[100px] sm:mb-7 esm:mb-5">
        <h1 className="md:text-[32px] sm:text-[30px] esm:text-[26px] font-fdeck font-bold text-mainDark mb-4">
          Похожие отели
        </h1>
        <HotelList hotels={hotels} />
      </div>

      <WelcomeTeam />

      <div id="place">
        <PlaceSlider />
      </div>

      <TestimonialSlider />

      <Footer />
    </div>
  );
};

export default HotelSingle;
