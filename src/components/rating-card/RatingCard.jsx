import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = () => {
  return (
    <div className="bg-[#FFFFFF] md:w-[486px] esm:w-[100%] sm:py-[24px] sm:px-4  esm:px-3 esm:py-5 rounded-3xl">
      <FaQuoteLeft className="text-[#777E90B2] w-4 h-4 text-opacity-70 mb-4" />

      <p className="md:text-base md:mb-4 esm:text-sm esm:mb-3">
        Я осталась очень довольной сервисом бронирования этого сайта. Процесс
        регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла
        гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым
        благодаря этому удивительному сайту.
      </p>

      <hr className="border-0 border-b-[1px] border-[#777E9033] mb-4" />

      <div className="rating-car flex md:gap-6 esm:gap-4">
        <div className="md:w-10 md:h-10 esm:w-9 esm:h-9 overflow-hidden rounded-[27px]">
          <img
            className="w-[140%] h-[140%] object-cover"
            src="/assets/avatar/a1.png"
            alt=""
          />
        </div>

        <div>
          <h2 className="text-xs md:mb-2 esm:mb-1">Азиза Муминова</h2>
          <div className="star flex esm:gap-1">
            <img
              className="xl:h-4 xl:w-4 esm:h-3 esm:w-3"
              src="/assets/icons/star.svg"
              alt=""
            />
            <img
              className="xl:h-4 xl:w-4 esm:h-3 esm:w-3"
              src="/assets/icons/star.svg"
              alt=""
            />
            <img
              className="xl:h-4 xl:w-4 esm:h-3 esm:w-3"
              src="/assets/icons/star.svg"
              alt=""
            />
            <img
              className="xl:h-4 xl:w-4 esm:h-3 esm:w-3"
              src="/assets/icons/star.svg"
              alt=""
            />
            <img
              className="xl:h-4 xl:w-4 esm:h-3 esm:w-3"
              src="/assets/icons/starDark.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
