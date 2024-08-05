const Footer = () => {
  return (
    <div className="lg:text-[15px] text-[#777E90]">
      <div className="flex esm:items-center esm:justify-center xl:gap-[145px] 2xl:w-[1600px] xl:px-[120px] mx-auto xl:py-[60px] lg:gap-[70px] lg:px-[60px] lg:py-[40px] md:px-5 md:py-8 esm:px-4 esm:py-6">
        <div>
          <img
            className="lg:mb-4 sm:mb-3 sm:w-[184px] esm:mb-2 esm:w-[154px] lg:mx-0 esm:mx-auto"
            src="/images/logoLight.svg"
            alt=""
          />
          <h5 className="esm:text-sm lg:mb-12 md:mb-10 esm:mb-6">
            Лучшая платформа для бронирования отелей в Узбекистане
          </h5>
          <div className="socials flex lg:justify-start esm:justify-center xl:gap-6 lg:gap-4 esm:gap-3">
            <img src="/assets/icons/facebook.svg" alt="" />
            <img src="/assets/icons/instagram.svg" alt="" />
            <img src="/assets/icons/telegram.svg" alt="" />
          </div>
        </div>
        <div className="lg:flex esm:hidden flex-col xl:gap-3 lg:gap-2 lg:pt-16">
          <div>Регионы</div>
          <div>Города</div>
          <div>Районы</div>
          <div>Аэропорты</div>
          <div>Ориентиры</div>
        </div>

        <div className="lg:flex esm:hidden flex-col xl:gap-3 lg:gap-2 lg:pt-16 min-w-fit">
          <div>Отели</div>
          <div>Дома и апартаменты</div>
          <div>Апартаменты/квартиры</div>
          <div>Курортные отели</div>
          <div>Хостелы</div>
          <div>Гостевые дома</div>
        </div>

        <div className="lg:flex esm:hidden flex-col xl:gap-3 lg:gap-2 lg:pt-16 min-w-fit">
          <div>Уникальное жилье</div>
          <div>Отзывы</div>
          <div>Сообщество путешественников</div>
          <div>Сезонные спецпредложения</div>
          <div>Поиск автомобилей</div>
          <div>Управлять бронированиями</div>
        </div>
      </div>
      <hr className="border-[0px] border-b-[1px]" />

      <p className="xl:py-[60px] lg:py-[30px] md:py-5 esm:py-[10px] text-center">
        E-Mehmon © 2023. Все права защищены.
      </p>
    </div>
  );
};

export default Footer;
