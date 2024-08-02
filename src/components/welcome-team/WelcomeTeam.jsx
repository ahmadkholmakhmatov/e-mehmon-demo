const WelcomeTeam = () => {
  return (
    <div className="flex mx-auto 2xl:w-[1360px] xl:w-[1200px] xl:h-[408px] lg:w-[904px] lg:h-[314px] bg-[#D8DCE4] rounded-[40px] overflow-hidden xl:mb-[100px] lg:mb-[60px]">
      <div className="flex-grow flex-shrink-0 lg:basis-[50%] xl:ml-20 xl:my-[60px] lg:ml-14 lg:my-[42px]">
        <h1 className="xl:text-[32px] lg:text-[26px] font-bold text-[#232E40] xl:mb-4 lg:mb-3">
          Добро пожаловать в нашу семью арендодателей!
        </h1>
        <p className="xl:text-[18px] lg:text-sm  text-[#777E90] xl:mb-4 lg:mb-3">
          Присоединяйтесь к нашей платформе и делайте свое жилье доступным для
          туристов. Создайте сотрудничество как в Airbnb и начните приключение
          без слов, станьте частью нашей гостеприимной семьи.
        </p>
        <button className="xl:px-6 xl:py-4 lg:px-5 lg:py-3 bg-[#3276FF] xl:text-base lg:text-sm font-medium text-white rounded-2xl">
          Присоединиться
        </button>
      </div>

      <div className="flex-grow flex-shrink-0 lg:basis-[50%] bg-[url('/images/image.png')] bg-cover"></div>
    </div>
  );
};

export default WelcomeTeam;
