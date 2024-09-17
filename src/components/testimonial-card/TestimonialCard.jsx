const TestimonialCard = () => {
  return (
    <div className="bg-mainDark 2xl:w-[536px] xl:w-[486px] xl:px-6 xl:py-8 md:px-5 md:py-7 esm:px-4 esm:py-5 rounded-3xl">
      <svg
        className="xl:mb-6 md:mb-5 esm:mb-3"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4987 2.83757V6.24912C10.4987 6.7118 10.1153 7.08669 9.64229 7.08669C7.95474 7.08669 7.03678 8.77981 6.90956 12.1215H9.64229C10.1153 12.1215 10.4987 12.4967 10.4987 12.9592V20.1625C10.4987 20.625 10.1153 20.9999 9.64229 20.9999H2.35623C1.88306 20.9999 1.5 20.6247 1.5 20.1625V12.9592C1.5 11.3573 1.66489 9.88726 1.98993 8.58947C2.3233 7.25876 2.83503 6.09526 3.51044 5.13118C4.20544 4.1404 5.07478 3.36292 6.09452 2.82129C7.12114 2.27638 8.31499 2 9.64259 2C10.1153 2 10.4987 2.37489 10.4987 2.83757ZM21.5435 7.08675C22.0163 7.08675 22.4 6.71151 22.4 6.24918V2.83763C22.4 2.37495 22.0163 2.00006 21.5435 2.00006C20.2165 2.00006 19.0224 2.2765 17.9962 2.82135C16.9763 3.36298 16.1064 4.14046 15.4113 5.13124C14.7361 6.09532 14.2244 7.25888 13.891 8.58988C13.5661 9.88808 13.4012 11.3581 13.4012 12.9593V20.1626C13.4012 20.6251 13.7848 21 14.2576 21H21.5435C22.0162 21 22.3996 20.6248 22.3996 20.1626V12.9592C22.3996 12.4968 22.0163 12.1215 21.5435 12.1215H18.8497C18.975 8.77987 19.8796 7.08675 21.5435 7.08675Z"
          fill="#777E90"
          fillOpacity="0.7"
        />
      </svg>

      <p className="xl:text-base lg:text-base md:text-sm esm:text-[13px] xl:mb-6 md:mb-5 esm:mb-3 font-onest">
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
