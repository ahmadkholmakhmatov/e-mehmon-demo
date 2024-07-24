import { PiPlayCircleFill } from 'react-icons/pi';
import { LiaUserCircleSolid } from 'react-icons/lia';
import HotelList from '../../components/hotel-list/HotelList';
import WelcomeTeam from '../../components/welcome-team/WelcomeTeam';

const Home = () => {
  return (
    <div className="bg-[#fafafa] ">
      <div className="hero w-full h-[848px] text-white bg-[url('/images/heroBackground.png')] bg-no-repeat bg-cover">
        <nav className="flex justify-between items-center px-[120px] py-[45px]">
          <img src="/images/logoDark.svg" alt="" />
          <ul className="flex gap-x-6">
            <li>Найти жилье</li>
            <li>Куда сходить?</li>
            <li>Туры</li>
            <li>Транспорт</li>
          </ul>

          <div className="login">
            <button className="flex gap-x-2 px-6 py-4 rounded-2xl bg-[#232E40]">
              <LiaUserCircleSolid className="w-6 h-6" /> Войти
            </button>
          </div>
        </nav>

        <div className="flex justify-between gap-x-28 max-w-[1200px] mx-auto my-[50px]">
          <h1 className="max-w-[700px] text-[49px]">
            Собирай чемодан, остальное мы возьмем на себя
          </h1>
          <div className="max-w-[384px]">
            <p className="text-[16px] mb-4">
              Добро пожаловать на наш уникальный портал, который предоставляет
              полный спектр услуг для туристов в Узбекистане!
            </p>
            <div className="flex justify-between items-center text-[16px]">
              <button className="px-6 py-4 bg-[#3276FF] rounded-2xl">
                Все отели
              </button>
              <button className="flex gap-x-2 px-6 py-4">
                <PiPlayCircleFill className="w-6 h-6" />
                Посмотреть видео
              </button>
            </div>
          </div>
        </div>

        <div className="slider w-full h-[310px]"></div>
      </div>

      <div className="search w-[1200px] h-[279px] mx-auto bg-white mt-[-98px] rounded-[40px] p-12 shadow-[0px_40px_60px_-32px_#777E901A]"></div>

      <div className="info px-[120px] mt-[50px] mb-[100px]">
        <div className="text-center mb-10">
          <h1 className="text-[32px] font-bold mb-4">
            Простые 3 шага для вашего идеального путешествия
          </h1>
          <p className="text-[18px] leading-6">
            Упростите свои планы для путешествия – с нами это легко!
          </p>
        </div>

        <div className="flex">
          <div className="relative basis-[48%]">
            <div className="w-[453px] h-[644px] rounded-3xl overflow-hidden ml-[85px]">
              <img
                className="w-full h-full object-cover"
                src="/images/img.png"
                alt=""
              />
            </div>

            <div className="absolute bottom-[90px] left-0 w-[364px] h-64 rounded-3xl border-[10px] border-l-0 border-[#F8F8FA] overflow-hidden ">
              <img
                className="w-full h-full object-cover "
                src="/images/img2.png"
                alt=""
              />
            </div>

            <div className="rating-card bg-white absolute top-12 left-[23px] flex w-52 h-20 p-[18px] gap-4 rounded-2xl shadow-custom">
              <div className="w-[44px] h-[44px] overflow-hidden rounded-[27px]">
                <img
                  className="w-[140%] h-[140%] object-cover"
                  src="/assets/avatar/a1.png"
                  alt=""
                />
              </div>

              <div>
                <h2 className="text-xs mb-2">Азиза Муминова</h2>
                <div className="star flex gap-2">
                  <img src="/assets/icons/star.svg" alt="" />
                  <img src="/assets/icons/star.svg" alt="" />
                  <img src="/assets/icons/star.svg" alt="" />
                  <img src="/assets/icons/star.svg" alt="" />
                  <img src="/assets/icons/starDark.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="rating-card bg-white absolute top-[172px] left-[364px] flex w-52 h-20 p-[18px] gap-4 rounded-2xl shadow-custom">
              <div className="w-[44px] h-[44px] overflow-hidden rounded-[27px]">
                <img
                  className="w-[140%] h-[140%] object-cover"
                  src="/assets/avatar/a2.png"
                  alt=""
                />
              </div>

              <div>
                <h2 className="text-xs mb-2">Андрей Туйгунов</h2>
                <div className="star flex gap-2">
                  <img src="/assets/icons/star.svg" alt="" />
                  <img src="/assets/icons/star.svg" alt="" />
                  <img src="/assets/icons/star.svg" alt="" />
                  <img src="/assets/icons/star.svg" alt="" />
                  <img src="/assets/icons/starDark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 flex-col flex-grow flex-shrink-0 basis-[52%] pl-10 py-14 pr-[100px]">
            <div className="text-lg">
              <div className="bg-[#D3DFFB] w-11 h-[34px] rounded-xl flex justify-center items-center mb-4 font-medium  text-[#3276FF]">
                01
              </div>

              <h1 className="font-medium mb-2">Регистрация</h1>
              <p className="text-[16px] leading-6">
                Зарегистрируйтесь на нашем сайте, чтобы начать путешествие.
                Укажите свое имя, адрес электронной почты и пароль, чтобы
                создать учетную запись.
              </p>
            </div>

            <div className="text-lg">
              <div className="bg-[#D3DFFB] w-11 h-[34px] rounded-xl flex justify-center items-center mb-4 font-medium  text-[#3276FF]">
                02
              </div>

              <h1 className="font-medium mb-2">Выбор отели и даты</h1>
              <p className="text-[16px] leading-6">
                Выберите желаемое место проживания и укажите даты вашего
                пребывания. Просматривайте доступные варианты и добавляйте их в
                корзину.
              </p>
            </div>
            <div className="text-lg">
              <div className="bg-[#D3DFFB] w-11 h-[34px] rounded-xl flex justify-center items-center mb-4 font-medium  text-[#3276FF]">
                03
              </div>

              <h1 className="font-medium mb-2">Бронирование и оплата</h1>
              <p className="text-[16px] leading-6">
                Перейдите к корзине, где вы сможете проверить и подтвердить ваш
                выбор. Затем выберите удобный способ оплаты и завершите
                бронирование. Готово, ваше путешествие официально начато!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[120px] mb-[100px]">
        <div className="heading text-center mb-10">
          <h1 className="text-[32px] font-bold text-[#232E40] mb-4">
            Дома, которые нравятся гостям
          </h1>
          <p className="text-[18px] font-normal text-[#777E90]">
            Упростите свои планы для путешествия – с нами это легко!
          </p>
        </div>
        <HotelList />
      </div>

      <div>
        <WelcomeTeam />
      </div>
    </div>
  );
};

export default Home;
