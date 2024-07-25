const Footer = () => {
  return (
    <div className="text-[15px] text-[#777E90]">
      <div className="flex gap-[145px] px-[120px] py-[60px] ">
        <div>
          <img className="mb-4" src="/images/logoLight.svg" alt="" />
          <h5 className="text-[14px] mb-12">
            Лучшая платформа для бронирования отелей в Узбекистане
          </h5>
          <div className="socials flex gap-6 ">
            <img src="/assets/icons/facebook.svg" alt="" />
            <img src="/assets/icons/instagram.svg" alt="" />
            <img src="/assets/icons/telegram.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-16">
          <div>Регионы</div>
          <div>Города</div>
          <div>Районы</div>
          <div>Аэропорты</div>
          <div>Ориентиры</div>
        </div>

        <div className="flex flex-col gap-3 pt-16 min-w-fit">
          <div>Отели</div>
          <div>Дома и апартаменты</div>
          <div>Апартаменты/квартиры</div>
          <div>Курортные отели</div>
          <div>Хостелы</div>
          <div>Гостевые дома</div>
        </div>

        <div className="flex flex-col gap-3 pt-16 min-w-fit">
          <div>Уникальное жилье</div>
          <div>Отзывы</div>
          <div>Сообщество путешественников</div>
          <div>Сезонные спецпредложения</div>
          <div>Поиск автомобилей</div>
          <div>Управлять бронированиями</div>
        </div>
      </div>
      <hr className="border-[0px] border-b-[1px]" />

      <p className="py-[60px] text-center">
        E-Mehmon © 2023. Все права защищены.
      </p>
    </div>
  );
};

export default Footer;
