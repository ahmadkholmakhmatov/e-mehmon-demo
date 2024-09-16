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

  {
    id: 5,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel3.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 6,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel4.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 7,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel1.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 8,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel2.png',
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
    <div className="bg-[#fafafa] overflow-hidden">
      <div className="hero w-full xl:h-[848px] lg:h-[628px] md:h-[670px] sm:h-[680px] esm:h-[550px] text-white bg-[url('/images/heroBackground.png')] bg-no-repeat bg-cover">
        <nav className="lg:flex lg:justify-between lg:items-center 2xl:w-[1600px] lg:px-[60px] lg:py-[25px] xl:text-sm lg:text-xs xl:px-[120px] xl:py-[45px] esm:hidden font-medium  mx-auto ">
          <Link to="/">
            <img
              className="lg:w-40  xl:w-[184px]"
              src="/images/logoDark.svg"
              alt=""
            />
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
                className="flex items-center gap-x-2 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded-2xl bg-[#232E40]"
                onClick={handleLogin}
              >
                <LiaUserCircleSolid className="xl:w-6 xl:h-6 lg:w-5 lg:h-5" />
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
                className="hover:scale-110 transition-transform duration-500 flex items-center gap-x-2 px-6 py-4 rounded-2xl bg-[#232E40]"
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
          <h1 className="xl:max-w-[700px] xl:text-[49px] xl:leading-[68.6px] lg:max-w-[560px] lg:text-[32px] esm:basis-[100%] sm:text-[30px] esm:text-2xl lg:text-left sm:text-center">
            {t('packSuit')}
          </h1>
          <div className="xl:max-w-[384px] lg:max-w-[300px] esm:basis-[100%] lg:px-0 sm:px-10">
            <p className="xl:text-[16px] xl:leading-[25.6px] lg:text-xs sm:text-[20px] esm:text-[14px] text-[#B7BFD5] mb-4">
              {t('welcomePortal')}
            </p>
            <div className="flex lg:justify-between items-center xl:text-[16px] lg:text-xs sm:text-[18px] esm:text-[14px] esm:gap-4">
              <button
                onClick={() => {
                  setBasicModalOpen(true);
                  console.log(basicModal);
                }}
                className="hover:scale-110 transition-transform duration-500 flex items-center gap-x-2 xl:px-0 xl:py-4 esm:px-4 esm:py-3"
              >
                <img
                  src="/assets/icons/play.svg"
                  className="sm:w-6 sm:h-6 lg:w-4 lg:h-4 esm:w-5 esm:h-5"
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
                  ></video>
                </div>
                <button
                  onClick={() => {
                    setBasicModalOpen(false);
                  }}
                  className="absolute bg-white top-6 right-6 p-[10px] border border-[#B7BFD5]/20 rounded-2xl"
                >
                  <img
                    src="/assets/icons/cancel.svg"
                    className="sm:w-6 sm:h-6 lg:w-5 lg:h-5 esm:w-5 esm:h-5 text-[#777E90]"
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
          <h1 className="xl:text-[32px] xl:mb-4 lg:text-[28px] lg:mb-3 md:text-2xl esm:text-xl esm:mb-3 font-bold ">
            Простые 3 шага для вашего идеального путешествия
          </h1>
          <p className="xl:text-[18px] xl:leading-6 lg:text-base lg:leading-5 esm:text-sm esm:leading-4">
            Упростите свои планы для путешествия – с нами это легко!
          </p>
        </div>

        <div className="flex lg:flex-nowrap esm:flex-wrap">
          <div className="relative lg:basis-[48%] esm:basis-full esm:mb-8">
            <div className="xl:w-[453px] xl:h-[644px] xl:ml-[85px] lg:w-[323px] lg:h-[460px] lg:ml-[60px] md:w-[80%] md:h-[400px] esm:h-[380px] esm:w-[86%] lg:mx-0 esm:mx-auto rounded-3xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/images/img.png"
                alt=""
              />
            </div>

            <div className="absolute left-0 xl:bottom-[90px] xl:w-[364px] xl:h-64 lg:bottom-[64px] lg:w-[260px] lg:h-[182px] esm:bottom-[15%] md:w-[260px] md:h-[182px] esm:w-[186px] esm:h-[142px] rounded-3xl border-[10px] border-l-0 border-[#F8F8FA] overflow-hidden ">
              <img
                className="w-full h-full object-cover "
                src="/images/img2.png"
                alt=""
              />
            </div>

            <div className="rating-card bg-white absolute flex items-center xl:top-12 xl:left-[23px] xl:w-52 xl:h-20 xl:p-[18px] xl:gap-4 lg:top-[34px] lg:left-4 lg:gap-2 md:top-[10%] md:left-[5%] md:w-[156px] md:h-14 md:p-[13px] md:gap-2 esm:top-[10%] esm:left-[0%] esm:w-[136px] esm:h-12 esm:p-2 esm:gap-1 rounded-2xl shadow-custom">
              <div className="xl:w-[44px] xl:h-[44px] lg:w-8 lg:h-8 esm:w-6 esm:h-6 overflow-hidden rounded-full">
                <img
                  className="xl:w-[140%] xl:h-[140%] esm:w-[120%] esm:h-[120%] object-cover"
                  src="/assets/avatar/a1.png"
                  alt=""
                />
              </div>

              <div>
                <h2 className="xl:mb-2 md:text-[10px] esm:text-[9px] xl:text-xs esm:mb-1 ">
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
                  src="/assets/avatar/a2.png"
                  alt=""
                />
              </div>

              <div>
                <h2 className="xl:mb-2 md:text-[10px] esm:text-[9px] xl:text-xs esm:mb-1 ">
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

          <div className="flex xl:gap-6 esm:gap-4 flex-col flex-grow flex-shrink-0 lg:basis-[52%] esm:basis-full xl:pl-10 xl:py-14 xl:pr-[100px] lg:pl-7 lg:py-10 lg:pr-[72px]">
            <div className="xl:text-lg md:text-lg lg:text-sm esm:text-xs text-[#232E40]">
              <div className="bg-[#D3DFFB] xl:w-11 xl:h-[34px] xl:mb-4 md:w-11 md:h-[34px] md:mb-4 lg:mb-2 lg:w-7 lg:h-6 esm:w-7 esm:h-6 esm:mb-1 rounded-xl flex justify-center items-center  font-medium  text-[#3276FF]">
                01
              </div>

              <h1 className="font-medium xl:mb-2 esm:mb-[6px] esm:text-base">
                Регистрация
              </h1>
              <p className="xl:text-[16px] xl:leading-6 md:text-[16px] md:leading-6 lg:text-[10px] lg:leading-5 esm:text-[12px] esm:leading-4 text-[#777E90]">
                Зарегистрируйтесь на нашем сайте, чтобы начать путешествие.
                Укажите свое имя, адрес электронной почты и пароль, чтобы
                создать учетную запись.
              </p>
            </div>

            <div className="xl:text-lg md:text-lg lg:text-sm esm:text-xs text-[#232E40]">
              <div className="bg-[#D3DFFB] xl:w-11 xl:h-[34px] xl:mb-4 md:w-11 md:h-[34px] md:mb-4 lg:mb-2 lg:w-7 lg:h-6 esm:w-7 esm:h-6 esm:mb-1 rounded-xl flex justify-center items-center  font-medium  text-[#3276FF]">
                02
              </div>

              <h1 className="font-medium xl:mb-2 esm:mb-[6px] esm:text-base">
                Выбор отели и даты
              </h1>
              <p className="xl:text-[16px] xl:leading-6 md:text-[16px] md:leading-6 lg:text-[10px] lg:leading-5 esm:text-[12px] esm:leading-4 text-[#777E90]">
                Выберите желаемое место проживания и укажите даты вашего
                пребывания. Просматривайте доступные варианты и добавляйте их в
                корзину.
              </p>
            </div>

            <div className="xl:text-lg md:text-lg lg:text-sm esm:text-xs text-[#232E40]">
              <div className="bg-[#D3DFFB] xl:w-11 xl:h-[34px] xl:mb-4 md:w-11 md:h-[34px] md:mb-4 lg:mb-2 lg:w-7 lg:h-6 esm:w-7 esm:h-6 esm:mb-1 rounded-xl flex justify-center items-center  font-medium  text-[#3276FF]">
                03
              </div>

              <h1 className="font-medium xl:mb-2 esm:mb-[6px] esm:text-base">
                Бронирование и оплата
              </h1>
              <p className="xl:text-[16px] xl:leading-6 md:text-[16px] md:leading-6 lg:text-[10px] lg:leading-5 esm:text-[12px] esm:leading-4 text-[#777E90]">
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
          <h1 className="xl:text-[32px] md:text-[26px] esm:text-[24px] font-bold text-[#232E40] xl:mb-4 esm:mb-1">
            Дома, которые нравятся гостям
          </h1>
          <p className="xl:text-[18px] esm:text-sm  font-normal text-[#777E90]">
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
