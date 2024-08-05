import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = () => {
  return (
    <div className="bg-[#232E40] 2xl:w-[536px] xl:w-[486px] xl:px-6 xl:py-8 md:px-5 md:py-7 esm:px-4 esm:py-5 rounded-3xl">
      <FaQuoteLeft className="text-[#777E90B2] text-opacity-70 xl:mb-6 md:mb-5 esm:mb-3" />

      <p className="xl:text-base lg:text-base md:text-sm esm:text-[13px] xl:mb-6 md:mb-5 esm:mb-3">
        Я осталась очень довольной сервисом бронирования этого сайта. Процесс
        регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла
        гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым
        благодаря этому удивительному сайту.
      </p>

      <hr className="border-0 border-b-[1px] border-[#777E9033] xl:mb-6 md:mb-5 esm:mb-3" />

      <div className="rating-car flex xl:gap-6 md:gap-4 esm:gap-3">
        <div className="md:w-10 md:h-10 esm:w-9 esm:h-9 overflow-hidden rounded-[27px]">
          <img
            className="w-[140%] h-[140%] object-cover"
            src="/assets/avatar/a1.png"
            alt=""
          />
        </div>

        <div>
          <h2 className="xl:text-xs lg:mb-2 esm:text-sm">Азиза Муминова</h2>
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
