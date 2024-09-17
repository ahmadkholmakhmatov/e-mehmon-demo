import { LiaUserCircleSolid } from 'react-icons/lia';
import { FaBars, FaTimes } from 'react-icons/fa';
import HotelList from '../../components/hotel-list/HotelList';
import WelcomeTeam from '../../components/welcome-team/WelcomeTeam';
import Footer from '../../components/footer/Footer';
import PlaceSlider from '../../components/place-slider/PlaceSlider';
import TestimonialSlider from '../../components/testimonial-slider/TestimonialSlider';
import HeroSlider from '../../components/hero-slider/HeroSlider';
import CurrencyDropDown from '../../components/currency-dropdown/CurrencyDropdown';
import LanguageDropdown from '../../components/language-dropdown/LanguageDropdown';
import SearchForm from '../../components/search-form/SearchForm';
import { Link, useNavigate } from 'react-router-dom';

import 'yet-another-react-lightbox/styles.css';
import { useTranslation } from 'react-i18next';
import { useContext, useRef, useState } from 'react';
import './home.css';
import { AuthContext } from '../../utils/AuthContext';
import Modal from 'react-modal';
import AccountDropdown from '../../components/account-dropdown/AccountDropdown';
import NotificationDropdown from '../../components/notification-dropdown/NotificationDropdown';

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
    name: 'Hotel Neptun Tashkent Pool&Spa',
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

  {
    id: 5,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel3.webp',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 6,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel4.webp',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 7,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel1.webp',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 8,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel2.webp',
    rating: 8.9,
    status: 'Популярно',
  },
];

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navRef = useRef();

  const { isAuthenticated } = useContext(AuthContext);

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

  const [basicModal, setBasicModalOpen] = useState(false);

  return (
    <div className="bg-customBg overflow-hidden">
      <div className="hero w-full xl:h-[848px] lg:h-[628px] md:h-[670px] sm:h-[680px] esm:h-[550px] text-white bg-[url('/images/heroBackground.png')] bg-no-repeat bg-cover">
        <nav className="text-onest lg:flex lg:justify-between lg:items-center 2xl:w-[1600px] lg:px-[60px] lg:py-[25px] xl:text-sm lg:text-xs xl:px-[120px] xl:py-[45px] esm:hidden font-medium  mx-auto ">
          <Link to="/">
            <svg
              className="lg:w-40 xl:w-[184px]"
              viewBox="0 0 184 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.1389 9.86065C40.09 11.8056 41.6156 14.1349 42.6189 16.7007L35.3189 24.0007L16.6989 5.38065C20.3211 3.96125 24.2786 3.62906 28.0867 4.42479C31.8948 5.22051 35.3882 7.10959 38.1389 9.86065ZM5.37891 31.3007C6.33716 33.7554 7.77107 35.9966 9.59823 37.8954C11.4254 39.7942 13.6098 41.3132 16.0259 42.3652C18.442 43.4171 21.0421 43.9812 23.6769 44.025C26.3117 44.0689 28.9292 43.5916 31.3789 42.6207L12.6789 24.0007L5.37891 31.3007Z"
                fill="white"
              />
              <path
                opacity="0.3"
                d="M16.6998 5.38078L23.9998 12.6808L5.3798 31.3008C4.40885 28.851 3.93158 26.2336 3.97543 23.5988C4.01927 20.964 4.58337 18.3638 5.63529 15.9477C6.68722 13.5317 8.20624 11.3473 10.1051 9.52011C12.0039 7.69294 14.2451 6.25904 16.6998 5.30078V5.38078ZM23.9998 35.3808L31.2998 42.6808C33.7545 41.7225 35.9957 40.2886 37.8945 38.4615C39.7934 36.6343 41.3124 34.4499 42.3643 32.0338C43.4162 29.6177 43.9803 27.0176 44.0242 24.3828C44.068 21.748 43.5907 19.1305 42.6198 16.6808L23.9998 35.3808Z"
                fill="white"
              />
              <path
                d="M61.8965 33.0004V16.0324H73.8725V18.7684H64.8965V23.2324H72.6965V25.9204H64.8965V30.2644H73.8725V33.0004H61.8965Z"
                fill="white"
              />
              <path
                d="M76.7324 33.0004V16.0324H80.8364L85.5404 24.6004L90.1964 16.0324H94.1804V33.0004H91.1804V19.8244L86.1164 28.9924H84.8444L79.7324 19.8244V33.0004H76.7324Z"
                fill="white"
              />
              <path
                d="M111.803 33.0004V16.0324H114.803V23.2804H122.723V16.0324H125.699V33.0004H122.723V26.0164H114.803V33.0004H111.803Z"
                fill="white"
              />
              <path
                d="M129.498 33.0004V16.0324H133.602L138.306 24.6004L142.962 16.0324H146.946V33.0004H143.946V19.8244L138.882 28.9924H137.61L132.498 19.8244V33.0004H129.498Z"
                fill="white"
              />
              <path
                d="M158.028 33.1924C156.284 33.1924 154.796 32.8244 153.564 32.0884C152.348 31.3524 151.412 30.3284 150.756 29.0164C150.116 27.7044 149.796 26.2084 149.796 24.5284C149.796 22.8164 150.124 21.3124 150.78 20.0164C151.436 18.7044 152.38 17.6804 153.612 16.9444C154.844 16.1924 156.332 15.8164 158.076 15.8164C159.82 15.8164 161.3 16.1844 162.516 16.9204C163.748 17.6564 164.692 18.6804 165.348 19.9924C166.004 21.2884 166.332 22.7844 166.332 24.4804C166.332 26.1604 166.004 27.6564 165.348 28.9684C164.708 30.2804 163.764 31.3124 162.516 32.0644C161.284 32.8164 159.788 33.1924 158.028 33.1924ZM158.076 30.4084C159.292 30.4084 160.284 30.1284 161.052 29.5684C161.82 29.0084 162.38 28.2804 162.732 27.3844C163.1 26.4884 163.284 25.5364 163.284 24.5284C163.284 23.7604 163.18 23.0244 162.972 22.3204C162.78 21.6164 162.468 20.9844 162.036 20.4244C161.62 19.8644 161.084 19.4244 160.428 19.1044C159.772 18.7684 158.988 18.6004 158.076 18.6004C156.876 18.6004 155.884 18.8804 155.1 19.4404C154.332 20.0004 153.764 20.7284 153.396 21.6244C153.028 22.5204 152.844 23.4884 152.844 24.5284C152.844 25.5524 153.028 26.5124 153.396 27.4084C153.764 28.3044 154.332 29.0324 155.1 29.5924C155.884 30.1364 156.876 30.4084 158.076 30.4084Z"
                fill="white"
              />
              <path
                d="M169.178 33.0004V16.0324H172.394L180.578 28.3924V16.0324H183.578V33.0004H180.434L172.178 20.7124V33.0004H169.178Z"
                fill="white"
              />
              <path
                d="M108.943 33.0004V16.0324H96.9668V18.7684H105.943V23.2324H98.1428V25.9204H105.943V30.2644H96.9668V33.0004H108.943Z"
                fill="white"
              />
            </svg>
          </Link>
          <ul className="flex  gap-x-6">
            <a href="#search">
              <li className="xl:text-sm lg:text-xs">{t('header.firstWord')}</li>
            </a>

            <a href="#search">
              <li className="xl:text-sm lg:text-xs">
                {t('header.secondWord')}
              </li>
            </a>
            <a href="#place">
              <li className="xl:text-sm lg:text-xs">{t('header.thirdWord')}</li>
            </a>

            <a href="">
              <li className="xl:text-sm lg:text-xs">{t('header.forthWord')}</li>
            </a>
          </ul>
          <div className="login flex items-center gap-6 text-white">
            <CurrencyDropDown />
            <LanguageDropdown />
            <NotificationDropdown />
            {isAuthenticated && <AccountDropdown />}
            {!isAuthenticated && (
              <button
                className="flex items-center gap-x-2 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded-2xl bg-mainDark"
                onClick={handleLogin}
              >
                <svg
                  className="xl:w-6 xl:h-6 lg:w-5 lg:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                    stroke="currentColor"
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
          className="esm:flex items-center justify-between py-5  sm:px-[20px] esm:px-[10px] lg:hidden"
        >
          <Link to="/">
            <img
              className="sm:w-[142px] esm:w-[120px]"
              src="/images/logoDark.svg"
              alt=""
            />
          </Link>

          <div className="h-div flex sm:gap-4 esm:gap-2">
            <div className="h-div login flex items-center sm:gap-6 esm:gap-2">
              <CurrencyDropDown />
              <LanguageDropdown />
            </div>
            <nav ref={navRef} className="h-mobile-nav z-20 flex flex-col">
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
                className="hover:scale-110 transition-transform duration-500 flex items-center gap-x-2 px-6 py-4 rounded-2xl bg-mainDark"
                onClick={handleLogin}
              >
                <LiaUserCircleSolid className="w-6 h-6" />
                {isAuthenticated ? 'Профиль' : 'Войти'}
              </button>
              <button className="nav-btn close-btn p-0" onClick={showNavbar}>
                <FaTimes className="sm:w-6 sm:h-6 esm:w-5 esm:h-5" />
              </button>
            </nav>
            <button className="nav-btn close-btn p-0" onClick={showNavbar}>
              <FaBars className="sm:w-6 sm:h-6 esm:w-5 esm:h-5" />
            </button>
          </div>
        </header>

        <div className="flex lg:flex-nowrap esm:flex-wrap justify-between 2xl:w-[1600px] xl:gap-x-28 xl:px-[120px] xl:my-[50px] lg:gap-x-20 lg:px-[60px] lg:my-[40px] sm:px-5 esm:px-[10px] sm:my-6 esm:my-2 sm:gap-y-8 esm:gap-y-5 esm:w-full mx-auto">
          <h1 className="xl:max-w-[720px] xl:text-[49px] xl:leading-[68.6px] lg:max-w-[560px] lg:text-[32px] esm:basis-[100%] sm:text-[30px] esm:text-2xl lg:text-left sm:text-center font-fdeck font-bold">
            {t('packSuit')}
          </h1>
          <div className="xl:max-w-[384px] lg:max-w-[300px] esm:basis-[100%] lg:px-0 sm:px-10">
            <p className="xl:text-[16px] xl:leading-[25.6px] lg:text-xs sm:text-[20px] esm:text-[14px] text-greyParaText font-onest mb-4">
              {t('welcomePortal')}
            </p>
            <div className="flex lg:justify-between items-center xl:text-[16px] lg:text-xs sm:text-[18px] esm:text-[14px] esm:gap-4">
              <button
                onClick={() => {
                  setBasicModalOpen(true);
                  console.log(basicModal);
                }}
                className="hover:scale-110 font-onest font-medium transition-transform duration-500 flex items-center gap-x-2 xl:px-0 xl:py-4 esm:px-4 esm:py-3"
              >
                <img
                  src="/assets/icons/play.svg"
                  className="sm:w-6 sm:h-6 lg:w-6 lg:h-6 esm:w-5 esm:h-5"
                  alt=""
                />
                {t('secondButton')}
              </button>

              <Modal
                isOpen={basicModal}
                onRequestClose={() => setBasicModalOpen(false)}
                contentLabel="Video modal"
                className="relative mx-auto my-auto w-full max-w-fit rounded-[40px] overflow-hidden outline-none z-30"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
              >
                <div className="modal-body">
                  <video
                    src="/assets/video.mp4"
                    controls
                    controlsList="nodownload"
                    preload="auto"
                  ></video>
                </div>
                <button
                  onClick={() => {
                    setBasicModalOpen(false);
                  }}
                  className="absolute bg-white top-6 right-6 p-[10px] border border-greyParaText/20 rounded-2xl"
                >
                  <img
                    src="/assets/icons/cancel.svg"
                    className="sm:w-6 sm:h-6 lg:w-5 lg:h-5 esm:w-5 esm:h-5 text-mainGrey"
                    alt=""
                  />
                </button>
              </Modal>
            </div>
          </div>
        </div>

        <HeroSlider />
      </div>

      <div
        id="search"
        className="search 2xl:w-[1360px] xl:w-[1200px]  bg-white xl:mt-[-78px] xl:p-12 lg:w-[904px] lg:mt-[-84px] lg:p-8 md:w-[728px] md:p-8 sm:mt-[-60px] esm:w-[92%] esm:mt-[-80px] esm:p-6 rounded-[40px] mx-auto shadow-[0px_40px_60px_-32px_#777E901A]"
      >
        <SearchForm />
      </div>

      <div className="info mx-auto 2xl:w-[1600px] xl:px-[120px] xl:mt-[70px] lg:px-[60px] lg:mt-12 md:px-5 md:my-6 esm:px-[10px] esm:my-5 esm:w-full">
        <div className="text-center xl:mb-10 lg:mb-7 md:mb-5 esm:mb-3">
          <h1 className="xl:text-[32px] xl:mb-4 lg:text-[28px] lg:mb-3 md:text-2xl esm:text-xl esm:mb-3 font-bold font-fdeck text-mainDark">
            Простые 3 шага для вашего идеального путешествия
          </h1>
          <p className="xl:text-[18px] xl:leading-6 lg:text-base lg:leading-5 esm:text-sm esm:leading-4 font-onest text-mainGrey ">
            Упростите свои планы для путешествия – с нами это легко!
          </p>
        </div>

        <div className="flex lg:flex-nowrap esm:flex-wrap">
          <div className="relative lg:basis-[48%] esm:basis-full esm:mb-8">
            <div className="xl:w-[453px] xl:h-[644px] xl:ml-[85px] lg:w-[323px] lg:h-[460px] lg:ml-[60px] md:w-[80%] md:h-[400px] esm:h-[380px] esm:w-[86%] lg:mx-0 esm:mx-auto rounded-3xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/images/img.webp"
                alt=""
              />
            </div>

            <div className="absolute left-0 xl:bottom-[90px] xl:w-[364px] xl:h-64 lg:bottom-[64px] lg:w-[260px] lg:h-[182px] esm:bottom-[15%] md:w-[260px] md:h-[182px] esm:w-[186px] esm:h-[142px] rounded-3xl border-[10px] border-l-0 border-[#F8F8FA] overflow-hidden ">
              <img
                className="w-full h-full object-cover "
                src="/images/img2.webp"
                alt=""
              />
            </div>

            <div className="rating-card bg-white absolute flex items-center xl:top-12 xl:left-[23px] xl:w-52 xl:h-20 xl:p-[18px] xl:gap-4 lg:top-[34px] lg:left-4 lg:gap-2 md:top-[10%] md:left-[5%] md:w-[156px] md:h-14 md:p-[13px] md:gap-2 esm:top-[10%] esm:left-[0%] esm:w-[136px] esm:h-12 esm:p-2 esm:gap-1 rounded-2xl shadow-custom">
              <div className="xl:w-[44px] xl:h-[44px] lg:w-8 lg:h-8 esm:w-6 esm:h-6 overflow-hidden rounded-full">
                <img
                  className="xl:w-[140%] xl:h-[140%] esm:w-[120%] esm:h-[120%] object-cover"
                  src="/assets/avatar/a1.webp"
                  alt=""
                />
              </div>

              <div>
                <h2 className="xl:mb-2 md:text-[10px] esm:text-[9px] xl:text-xs esm:mb-1 text-mainDark italic">
                  Азиза Муминова
                </h2>
                <div className="star flex lg:gap-2 esm:gap-1">
                  <img
                    className="xl:w-4 esm:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 esm:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 esm:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 esm:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 esm:w-3"
                    src="/assets/icons/starDark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="rating-card bg-white absolute xl:top-[172px] xl:left-[364px] flex xl:w-52 xl:h-20 xl:p-[18px] xl:gap-4 lg:top-[123px] lg:left-[260px] md:w-[156px] md:h-14 md:gap-2 md:top-[30%] md:right-[5%] md:p-[13px] esm:top-[30%] esm:right-[0%] esm:w-[136px] esm:h-12 esm:p-2 esm:gap-1 rounded-2xl shadow-custom">
              <div className="xl:w-[44px] xl:h-[44px] lg:w-8 lg:h-8 esm:w-6 esm:h-6 overflow-hidden rounded-full">
                <img
                  className="xl:w-[140%] xl:h-[140%] md:w-[120%] md:h-[120%] object-cover"
                  src="/assets/avatar/a2.webp"
                  alt=""
                />
              </div>

              <div>
                <h2 className="xl:mb-2 md:text-[10px] esm:text-[9px] xl:text-xs esm:mb-1 text-mainDark italic">
                  Андрей Туйгунов
                </h2>
                <div className="star flex lg:gap-2 esm:gap-1">
                  <img
                    className="xl:w-4 esm:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 esm:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 esm:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 esm:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 esm:w-3"
                    src="/assets/icons/starDark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex xl:gap-6 esm:gap-4 flex-col flex-grow flex-shrink-0 lg:basis-[52%] esm:basis-full xl:pl-10 xl:py-14 xl:pr-[100px] lg:pl-7 lg:py-10 lg:pr-[72px] font-onest">
            <div className="xl:text-lg md:text-lg lg:text-sm esm:text-xs text-mainDark">
              <div className="bg-[#D3DFFB] xl:w-11 xl:h-[34px] xl:mb-4 md:w-11 md:h-[34px] md:mb-4 lg:mb-2 lg:w-7 lg:h-6 esm:w-7 esm:h-6 esm:mb-1 rounded-xl flex justify-center items-center  font-medium  text-mainBlue">
                01
              </div>

              <h1 className="font-fdeck font-medium text-mainDark xl:mb-2 esm:mb-[6px] esm:text-base">
                Регистрация
              </h1>
              <p className="xl:text-[16px] xl:leading-6 md:text-[16px] md:leading-6 lg:text-[10px] lg:leading-5 esm:text-[12px] esm:leading-4 text-mainGrey">
                Зарегистрируйтесь на нашем сайте, чтобы начать путешествие.
                Укажите свое имя, адрес электронной почты и пароль, чтобы
                создать учетную запись.
              </p>
            </div>

            <div className="xl:text-lg md:text-lg lg:text-sm esm:text-xs text-mainDark">
              <div className="bg-[#D3DFFB] xl:w-11 xl:h-[34px] xl:mb-4 md:w-11 md:h-[34px] md:mb-4 lg:mb-2 lg:w-7 lg:h-6 esm:w-7 esm:h-6 esm:mb-1 rounded-xl flex justify-center items-center  font-medium  text-mainBlue">
                02
              </div>

              <h1 className="font-fdeck font-medium text-mainDark xl:mb-2 esm:mb-[6px] esm:text-base">
                Выбор отели и даты
              </h1>
              <p className="xl:text-[16px] xl:leading-6 md:text-[16px] md:leading-6 lg:text-[10px] lg:leading-5 esm:text-[12px] esm:leading-4 text-mainGrey">
                Выберите желаемое место проживания и укажите даты вашего
                пребывания. Просматривайте доступные варианты и добавляйте их в
                корзину.
              </p>
            </div>

            <div className="xl:text-lg md:text-lg lg:text-sm esm:text-xs text-mainDark">
              <div className="bg-[#D3DFFB] xl:w-11 xl:h-[34px] xl:mb-4 md:w-11 md:h-[34px] md:mb-4 lg:mb-2 lg:w-7 lg:h-6 esm:w-7 esm:h-6 esm:mb-1 rounded-xl flex justify-center items-center  font-medium  text-mainBlue">
                03
              </div>

              <h1 className="font-fdeck font-medium text-mainDark xl:mb-2 esm:mb-[6px] esm:text-base">
                Бронирование и оплата
              </h1>
              <p className="xl:text-[16px] xl:leading-6 md:text-[16px] md:leading-6 lg:text-[10px] lg:leading-5 esm:text-[12px] esm:leading-4 text-mainGrey">
                Перейдите к корзине, где вы сможете проверить и подтвердить ваш
                выбор. Затем выберите удобный способ оплаты и завершите
                бронирование. Готово, ваше путешествие официально начато!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:w-[1600px] xl:px-[120px] xl:mt-[100px] mx-auto xl:mb-[100px] lg:mt-[72px] lg:px-[60px] lg:mb-[60px] md:mt-[50px] md:px-[20px] md:mb-7 esm:px-[10px] esm:mb-5">
        <div className="heading text-center xl:mb-10 md:mb-7 esm:mb-5">
          <h1 className="xl:text-[32px] md:text-[26px] esm:text-[24px] font-fdeck font-bold text-mainDark xl:mb-4 esm:mb-1">
            Дома, которые нравятся гостям
          </h1>
          <p className="xl:text-[18px] esm:text-sm font-onest  font-normal text-mainGrey">
            Упростите свои планы для путешествия – с нами это легко!
          </p>
        </div>
        <HotelList hotels={hotels} />
      </div>

      <WelcomeTeam className="xl:mb-[100px]" />

      <div id="place">
        <PlaceSlider />
      </div>

      <TestimonialSlider />

      <Footer />
    </div>
  );
};

export default Home;
