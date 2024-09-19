const TestimonialCard = () => {
  return (
    <div className="bg-white md:w-[466px] esm:w-[100%] sm:py-[24px] sm:px-4  esm:px-3 esm:py-5 rounded-3xl">
      <svg
        className="mb-4"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3091_1798)">
          <path
            d="M6.88896 1.22079V3.89068C6.88896 4.25278 6.59543 4.54617 6.23333 4.54617C4.94143 4.54617 4.23869 5.87122 4.14129 8.48642H6.23333C6.59543 8.48642 6.88896 8.78009 6.88896 9.14205V14.7794C6.88896 15.1413 6.59543 15.4347 6.23333 15.4347H0.655487C0.293252 15.4347 0 15.1411 0 14.7794V9.14205C0 7.88837 0.12623 6.73791 0.375068 5.72225C0.630277 4.68083 1.02203 3.77028 1.53909 3.01579C2.07115 2.24039 2.73667 1.63193 3.51733 1.20805C4.30327 0.781603 5.21722 0.565308 6.23356 0.565308C6.59543 0.565308 6.88896 0.858698 6.88896 1.22079ZM15.3443 4.54622C15.7062 4.54622 16 4.25255 16 3.89073V1.22084C16 0.858743 15.7063 0.565353 15.3443 0.565353C14.3284 0.565353 13.4143 0.781695 12.6286 1.2081C11.8478 1.63198 11.182 2.24044 10.6498 3.01583C10.1329 3.77032 9.74118 4.68093 9.48593 5.72257C9.23722 6.73855 9.111 7.88901 9.111 9.14209V14.7794C9.111 15.1413 9.40461 15.4348 9.76662 15.4348H15.3443C15.7062 15.4348 15.9997 15.1411 15.9997 14.7794V9.14205C15.9997 8.78014 15.7062 8.48642 15.3443 8.48642H13.2821C13.378 5.87126 14.0705 4.54622 15.3443 4.54622Z"
            fill="#D3D5DA"
          />
        </g>
        <defs>
          <clipPath id="clip0_3091_1798">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>

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
