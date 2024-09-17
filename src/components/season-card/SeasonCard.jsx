const SeasonCard = () => {
  return (
    <div>
      <div className=" relative 2xl:w-[321.25px] 2xl:h-[321.25px] xl:w-full xl:h-[262px] lg:w-full lg:h-[220px] md:w-full md:h-[246px] sm:h-[262px] esm:w-full esm:h-[180px] rounded-3xl overflow-hidden lg:mb-3 md:mb-2 esm:mb-1">
        <div className="absolute xl:top-3 xl:left-3 xl:text-[12px] esm:top-3 esm:left-3 md:text-[12px]  xl:p-2 md:p-1.5 esm:p-1 esm:text-[10px] lg:text-[10px] font-medium text-white bg-mainDark  rounded-3xl">
          Скидка 24%
        </div>
        <img
          className="w-full h-full object-cover"
          src="/assets/places/n1.webp"
          alt=""
        />
      </div>

      <div className="md:text-lg esm:text-base font-onest font-semibold text-mainDark lg:mb-3 md:mb-2 esm:mb-1">
        Горы Кунгурбука
      </div>
      <div className="md:text-base esm:text-sm font-onest font-medium text-mainGrey">
        от $240
      </div>
    </div>
  );
};

export default SeasonCard;
