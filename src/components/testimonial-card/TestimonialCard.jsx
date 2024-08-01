import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = () => {
  return (
    <div className="bg-[#232E40] 2xl:w-[536px] w-[486px] px-6 py-8 rounded-3xl">
      <FaQuoteLeft className="text-[#777E90B2] text-opacity-70 mb-6" />

      <p className="text-base mb-6">
        Я осталась очень довольной сервисом бронирования этого сайта. Процесс
        регистрации был мгновенным, выбор отеля и дат - простым, а оплата прошла
        гладко. Мое путешествие в Узбекистан стало по-настоящему незабываемым
        благодаря этому удивительному сайту.
      </p>

      <hr className="border-0 border-b-[1px] border-[#777E9033] mb-6" />

      <div className="rating-car flex gap-6">
        <div className="w-10 h-10 overflow-hidden rounded-[27px]">
          <img
            className="w-[140%] h-[140%] object-cover"
            src="/assets/avatar/a1.png"
            alt=""
          />
        </div>

        <div>
          <h2 className="text-xs mb-2">Азиза Муминова</h2>
          <div className="star flex gap-1">
            <img src="/assets/icons/star.svg" alt="" />
            <img src="/assets/icons/star.svg" alt="" />
            <img src="/assets/icons/star.svg" alt="" />
            <img src="/assets/icons/star.svg" alt="" />
            <img src="/assets/icons/starDark.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
