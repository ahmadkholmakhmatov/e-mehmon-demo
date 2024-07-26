import CurrencyDropDown from '../../components/currency-dropdown/CurrencyDropdown';
import LanguageDropdown from '../../components/language-dropdown/LanguageDropdown';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { PiMapPinArea } from 'react-icons/pi';
import { FaRegBookmark } from 'react-icons/fa';
import CustomBreadCrumb from '../../components/breadcrumb/customBreadCrumb';
import ImageGallery from '../../components/image-gallery/ImageGallery';
import HotelList from '../../components/hotel-list/HotelList';
import WelcomeTeam from '../../components/welcome-team/WelcomeTeam';
import PlaceSlider from '../../components/place-slider/PlaceSlider';
import TestimonialSlider from '../../components/testimonial-slider/TestimonialSlider';
import Footer from '../../components/footer/Footer';

const HotelSingle = () => {
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

          <div className="flex gap-6">
            <div className="basis-[68%]">
              <ImageGallery />
            </div>

            <div className="basis-[33%] p-6 bg-[#FFFFFF] shadow-custom rounded-2xl">
              <div className="flex justify-between">
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

              <div>от$120/ночь</div>
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

      <WelcomeTeam className="mb-[100px]" />

      <PlaceSlider />

      <TestimonialSlider />

      <Footer />
    </div>
  );
};

export default HotelSingle;
