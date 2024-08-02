import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = () => {
  return (
    <div className="bg-[#232E40] 2xl:w-[536px] xl:w-[486px] xl:px-6 xl:py-8 lg:px-5 lg:py-7  rounded-3xl">
      <FaQuoteLeft className="text-[#777E90B2] text-opacity-70 mb-6" />

      <p className="xl:text-base lg:text-base xl:mb-6 lg:mb-5">
        Я осталась очень довольной сервисом бронирования этого сайта. Процесс
        регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла
        гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым
        благодаря этому удивительному сайту.
      </p>

      <hr className="border-0 border-b-[1px] border-[#777E9033] xl:mb-6 lg:mb-5" />

      <div className="rating-car flex xl:gap-6 lg:gap-4">
        <div className=" lg:w-10 lg:h-10 overflow-hidden rounded-[27px]">
          <img
            className="w-[140%] h-[140%] object-cover"
            src="/assets/avatar/a1.png"
            alt=""
          />
        </div>

        <div>
          <h2 className="xl:text-xs lg:mb-2 lg:text-sm">Азиза Муминова</h2>
          <div className="star flex lg:gap-1">
            <img
              className="xl:h-4 xl:w-4 lg:h-3 lg:w-3"
              src="/assets/icons/star.svg"
              alt=""
            />
            <img
              className="xl:h-4 xl:w-4 lg:h-3 lg:w-3"
              src="/assets/icons/star.svg"
              alt=""
            />
            <img
              className="xl:h-4 xl:w-4 lg:h-3 lg:w-3"
              src="/assets/icons/star.svg"
              alt=""
            />
            <img
              className="xl:h-4 xl:w-4 lg:h-3 lg:w-3"
              src="/assets/icons/star.svg"
              alt=""
            />
            <img
              className="xl:h-4 xl:w-4 lg:h-3 lg:w-3"
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
