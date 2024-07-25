const WelcomeTeam = () => {
  return (
    <div className="flex mx-auto 2xl:w-[1380px] lg:w-[1200px] h-[408px] bg-[#D8DCE4] rounded-[40px] overflow-hidden mb-[100px]">
      <div className="flex-grow flex-shrink-0 basis-[calc(56%-80px)] ml-20 my-[60px]">
        <h1 className="text-[32px] font-bold text-[#232E40] mb-4">
          Добро пожаловать в нашу семью арендодателей!
        </h1>
        <p className="text-[18px] text-[#777E90] mb-4">
          Присоединяйтесь к нашей платформе и делайте свое жилье доступным для
          туристов. Создайте сотрудничество как в Airbnb и начните приключение
          без слов, станьте частью нашей гостеприимной семьи.
        </p>
        <button className="px-6 py-4 bg-[#3276FF] text-base font-medium text-white rounded-2xl">
          Присоединиться
        </button>
      </div>

      <div className="flex-grow flex-shrink-0 basis-[44%] bg-[url('/images/image.png')] bg-cover"></div>
    </div>
  );
};

export default WelcomeTeam;
