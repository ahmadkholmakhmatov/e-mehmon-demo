const WelcomeTeam = () => {
  return (
    <div className="flex lg:flex-nowrap sm:flex-wrap mx-auto 2xl:w-[1360px] xl:w-[1200px] xl:h-[408px] lg:w-[904px] lg:h-[314px] md:w-[728px] esm:w-[94%] bg-[#D8DCE4] rounded-[40px] overflow-hidden xl:mb-[100px] lg:mb-[60px] md:mb-8">
      <div className="flex-grow flex-shrink-0 lg:basis-[50%] lg:w-full esm:w-fit xl:ml-20 xl:my-[60px] lg:ml-14 lg:my-[42px] md:ml-14 lg:mr-0 md:mr-14 md:my-[42px] esm:mx-6 esm:my-[24px]">
        <h1 className="xl:text-[32px] md:text-[32px] lg:text-[26px] esm:text-[20px] font-bold text-[#232E40] xl:mb-4 esm:mb-3">
          Добро пожаловать в нашу семью арендодателей!
        </h1>
        <p className="xl:text-[18px] md:text-[18px] lg:text-sm esm:text-xs text-[#777E90] xl:mb-4 esm:mb-3">
          Присоединяйтесь к нашей платформе и делайте свое жилье доступным для
          туристов. Создайте сотрудничество как в Airbnb и начните приключение
          без слов, станьте частью нашей гостеприимной семьи.
        </p>
        <button className="hover:bg-blue-800 hover:text-white transition-colors duration-500 xl:px-6 xl:py-4 md:px-5 md:py-3 esm:px-4 esm:py-3 bg-[#3276FF] xl:text-base esm:text-sm font-medium text-white rounded-2xl">
          Присоединиться
        </button>
      </div>

      <div className="flex-grow flex-shrink-0 lg:basis-[50%] lg:inline-block esm:hidden bg-[url('/images/image.png')] bg-cover"></div>
    </div>
  );
};

export default WelcomeTeam;
