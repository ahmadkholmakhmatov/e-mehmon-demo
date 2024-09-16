const HeroCard = () => {
  return (
    <div className="relative group 2xl:w-[526px] 2xl:h-[328px]  xl:w-[486px] xl:h-[310px] lg:w-[368px] lg:h-[232px] sm:w-[85%] sm:h-[232px] esm:w-[90%] esm:h-[150px] rounded-3xl overflow-hidden">
      <div className="absolute xl:top-6 xl:right-6 esm:top-3 esm:right-3 text-[#232E40] bg-[#FFC107] sm:p-1 esm:p-0.5 rounded-full text-[10px]">
        8.9
      </div>

      <div className="absolute hidden group-hover:flex w-full text-white justify-between sm:gap-0 esm:gap-2 bg-[#1C253480] backdrop-blur-[2px] xl:px-6 xl:py-4 lg:px-5 lg:py-4 sm:px-4 sm:py-3 esm:px-2.5 esm:py-1 bottom-0">
        <div>
          <div className="xl:text-base sm:text-xs esm:text-[10px] font-bold xl:mb-1 sm:mb-0.5">
            Hotel Neptun Tashkent Pool&Spa
          </div>
          <div className="xl:text-sm sm:text-[10px] esm:text-[8px] text-[#B7BFD5] font-medium">
            8 ул. Лянгар, Ташкент
          </div>
        </div>

        <div className="xl:text-lg sm:text-xs esm:text-[10px] w-fit text-white font-bold">
          от $120
        </div>
      </div>
      <img
        loading="lazy"
        className="w-full h-full object-cover"
        src="/assets/places/hotel1.png"
        alt=""
      />
    </div>
  );
};

export default HeroCard;
