const SeasonCard = () => {
  return (
    <div>
      <div className="relative 2xl:w-[321.25px] 2xl:h-[321.25px] xl:w-[282px] xl:h-[282px] lg:w-[268px] lg:h-[268px] rounded-3xl overflow-hidden lg:mb-3">
        <div className="absolute lg:top-3 lg:left-3 xl:text-[10px] xl:p-2 lg:p-1.5  lg:text-[10px]  font-medium text-white bg-[#232E40]  rounded-3xl">
          Скидка 24%
        </div>
        <img
          className="w-full h-full object-cover"
          src="/assets/places/n1.png"
          alt=""
        />
      </div>

      <div className="lg:text-lg font-semibold text-[#232E40] lg:mb-3">
        Горы Кунгурбука
      </div>
      <div className="lg:text-base font-semibold text-[#777E90]">от $240</div>
    </div>
  );
};

export default SeasonCard;
