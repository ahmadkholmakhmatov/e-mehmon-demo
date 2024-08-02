import { PiPlayCircleFill } from 'react-icons/pi';
import { LiaUserCircleSolid } from 'react-icons/lia';
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
import { useTranslation } from 'react-i18next';

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

const Home = ({ auth }) => {
  const { t } = useTranslation();
  const authentication = auth;
  const navigate = useNavigate();

  const handleLogin = () => {
    if (authentication.token) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-[#fafafa] overflow-hidden">
      <div className="hero w-full xl:h-[848px] lg:h-[628px] text-white bg-[url('/images/heroBackground.png')] bg-no-repeat bg-cover">
        <nav className="flex justify-between items-center 2xl:w-[1600px] lg:px-[60px] lg:py-[25px] lg:text-xs xl:px-[120px] xl:py-[45px] xl:text-sm  font-medium  mx-auto ">
          <Link to="/">
            <img
              className="lg:w-40 xl:w-[184px]"
              src="/images/logoDark.svg"
              alt=""
            />
          </Link>
          <ul className="flex gap-x-6">
            <a href="#search">
              <li>Найти жилье</li>
            </a>

            <a href="#search">
              <li>Куда сходить?</li>
            </a>
            <a href="#place">
              <li>Туры</li>
            </a>

            <li>Транспорт</li>
          </ul>
          <div className="login flex items-center gap-6">
            <CurrencyDropDown />
            <LanguageDropdown />
            <button
              className="flex items-center gap-x-2 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded-2xl bg-[#232E40]"
              onClick={handleLogin}
            >
              <LiaUserCircleSolid className="xl:w-6 xl:h-6 lg:w-5 lg:h-5" />
              {authentication.token ? 'Профиль' : 'Войти'}
            </button>
          </div>
        </nav>

        <div className="flex justify-between 2xl:w-[1600px] xl:gap-x-28 xl:px-[120px] xl:w-[1440px] xl:my-[50px] lg:gap-x-20 lg:px-[60px] lg:my-[40px] sm:w-full mx-auto ">
          <h1 className="xl:max-w-[700px] xl:text-[49px] lg:max-w-[560px] lg:text-[32px]">
            {t('packSuit')}
          </h1>
          <div className="xl:max-w-[384px] lg:max-w-[300px]">
            <p className="xl:text-[16px] lg:text-xs mb-4">
              {t('welcomePortal')}
            </p>
            <div className="flex justify-between items-center xl:text-[16px] lg:text-xs">
              <button className="xl:px-6 xl:py-4 lg:px-4 lg:py-3 bg-[#3276FF] rounded-2xl">
                Все отели
              </button>
              <button className="flex items-center gap-x-2 xl:px-6 xl:py-4 lg:px-4 lg:py-3 ">
                <PiPlayCircleFill className="xl:w-6 xl:h-6 lg:w-4 lg:h-4" />
                Посмотреть видео
              </button>
            </div>
          </div>
        </div>

        <HeroSlider />
      </div>

      <div
        id="search"
        className="search 2xl:w-[1360px] xl:w-[1200px]  bg-white xl:mt-[-78px] xl:p-12 sm:w-[904px] lg:mt-[-84px] lg:p-8 rounded-[40px] mx-auto shadow-[0px_40px_60px_-32px_#777E901A]"
      >
        <SearchForm />
      </div>

      <div className="info mx-auto 2xl:w-[1600px] xl:px-[120px] xl:mt-[70px] lg:px-[60px] lg:mt-12">
        <div className="text-center xl:mb-10 lg:mb-7">
          <h1 className="xl:text-[32px] xl:mb-4 lg:text-[28px] lg:mb-3 font-bold ">
            Простые 3 шага для вашего идеального путешествия
          </h1>
          <p className="xl:text-[18px] xl:leading-6 lg:text-base lg:leading-5">
            Упростите свои планы для путешествия – с нами это легко!
          </p>
        </div>

        <div className="flex">
          <div className="relative lg:basis-[48%]">
            <div className="xl:w-[453px] xl:h-[644px] xl:ml-[85px] lg:w-[323px] lg:h-[460px] lg:ml-[60px] rounded-3xl overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="/images/img.png"
                alt=""
              />
            </div>

            <div className="absolute left-0 xl:bottom-[90px] xl:w-[364px] xl:h-64 lg:bottom-[64px] lg:w-[260px] lg:h-[182px] rounded-3xl border-[10px] border-l-0 border-[#F8F8FA] overflow-hidden ">
              <img
                className="w-full h-full object-cover "
                src="/images/img2.png"
                alt=""
              />
            </div>

            <div className="rating-card bg-white absolute flex xl:top-12 xl:left-[23px] xl:w-52 xl:h-20 xl:p-[18px] xl:gap-4 lg:top-[34px] lg:left-4 lg:w-[156px] lg:h-14 lg:p-[13px] lg:gap-2 rounded-2xl shadow-custom">
              <div className="xl:w-[44px] xl:h-[44px] lg:w-8 lg:h-8 overflow-hidden rounded-full">
                <img
                  className="xl:w-[140%] xl:h-[140%] lg:w-[120%] lg:h-[120%] object-cover"
                  src="/assets/avatar/a1.png"
                  alt=""
                />
              </div>

              <div>
                <h2 className="xl:text-xs xl:mb-2 lg:text-[10px] lg:mb-1">
                  Азиза Муминова
                </h2>
                <div className="star flex gap-2">
                  <img
                    className="xl:w-4 lg:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 lg:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 lg:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 lg:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 lg:w-3"
                    src="/assets/icons/starDark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="rating-card bg-white absolute xl:top-[172px] xl:left-[364px] flex xl:w-52 xl:h-20 xl:p-[18px] xl:gap-4 lg:top-[123px] lg:left-[260px] lg:w-[156px] lg:h-14 lg:p-[13px] lg:gap-2 rounded-2xl shadow-custom">
              <div className="xl:w-[44px] xl:h-[44px] lg:w-8 lg:h-8 overflow-hidden rounded-full">
                <img
                  className="xl:w-[140%] xl:h-[140%] lg:w-[120%] lg:h-[120%] object-cover"
                  src="/assets/avatar/a2.png"
                  alt=""
                />
              </div>

              <div>
                <h2 className="xl:text-xs xl:mb-2 lg:text-[10px] lg:mb-1">
                  Андрей Туйгунов
                </h2>
                <div className="star flex gap-2">
                  <img
                    className="xl:w-4 lg:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 lg:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 lg:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 lg:w-3"
                    src="/assets/icons/star.svg"
                    alt=""
                  />
                  <img
                    className="xl:w-4 lg:w-3"
                    src="/assets/icons/starDark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex xl:gap-6 lg:gap-4 flex-col flex-grow flex-shrink-0 lg:basis-[52%] xl:pl-10 xl:py-14 xl:pr-[100px] lg:pl-7 lg:py-10 lg:pr-[72px]">
            <div className="xl:text-lg lg:text-xs">
              <div className="bg-[#D3DFFB] xl:w-11 xl:h-[34px] xl:mb-4 lg:mb-2 lg:w-7 lg:h-6 rounded-xl flex justify-center items-center  font-medium  text-[#3276FF]">
                01
              </div>

              <h1 className="font-medium xl:mb-2 lg:mb-[6px]">Регистрация</h1>
              <p className="xl:text-[16px] xl:leading-6 lg:text-[10px] lg:leading-5">
                Зарегистрируйтесь на нашем сайте, чтобы начать путешествие.
                Укажите свое имя, адрес электронной почты и пароль, чтобы
                создать учетную запись.
              </p>
            </div>

            <div className="xl:text-lg lg:text-xs">
              <div className="bg-[#D3DFFB] xl:w-11 xl:h-[34px] xl:mb-4 lg:mb-2 lg:w-7 lg:h-6 rounded-xl flex justify-center items-center  font-medium  text-[#3276FF]">
                02
              </div>

              <h1 className="font-medium xl:mb-2 lg:mb-[6px]">
                Выбор отели и даты
              </h1>
              <p className="xl:text-[16px] xl:leading-6 lg:text-[10px] lg:leading-5">
                Выберите желаемое место проживания и укажите даты вашего
                пребывания. Просматривайте доступные варианты и добавляйте их в
                корзину.
              </p>
            </div>

            <div className="xl:text-lg lg:text-xs">
              <div className="bg-[#D3DFFB] xl:w-11 xl:h-[34px] xl:mb-4 lg:mb-2 lg:w-7 lg:h-6 rounded-xl flex justify-center items-center  font-medium  text-[#3276FF]">
                03
              </div>

              <h1 className="font-medium xl:mb-2 lg:mb-[6px]">
                Бронирование и оплата
              </h1>
              <p className="xl:text-[16px] xl:leading-6 lg:text-[10px] lg:leading-5">
                Перейдите к корзине, где вы сможете проверить и подтвердить ваш
                выбор. Затем выберите удобный способ оплаты и завершите
                бронирование. Готово, ваше путешествие официально начато!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:w-[1600px] xl:px-[120px] xl:mt-[100px] mx-auto xl:mb-[100px] lg:mt-[72px] lg:px-[60px] lg:mb-[60px]">
        <div className="heading text-center xl:mb-10 lg:mb-7">
          <h1 className="xl:text-[32px] lg:text-[26px] font-bold text-[#232E40] xl:mb-4 lg:mb-1">
            Дома, которые нравятся гостям
          </h1>
          <p className="xl:text-[18px] lg:text-sm font-normal text-[#777E90]">
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
