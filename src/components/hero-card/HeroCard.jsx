const HeroCard = () => {
  return (
    <div className="relative group 2xl:w-[526px] 2xl:h-[328px]  xl:w-[486px] xl:h-[310px] lg:w-[368px] lg:h-[232px] rounded-3xl overflow-hidden">
      <div className="absolute xl:top-6 xl:right-6 lg:top-3 lg:right-3 text-[#232E40] bg-[#FFC107] p-1 rounded-full text-[10px]">
        8.9
      </div>

      <div className="absolute hidden group-hover:flex w-full text-white justify-between bg-[#1C253480] backdrop-blur-[2px] xl:px-6 xl:py-4 lg:px-5 lg:py-4 bottom-0">
        <div>
          <div className="xl:text-base lg:text-xs font-bold xl:mb-1 lg:mb-0.5">
            Hotel Neptun Tashkent Pool&Spa
          </div>
          <div className="xl:text-sm lg:text-[10px] text-[#B7BFD5] font-medium">
            8 ул. Лянгар, Ташкент
          </div>
        </div>

        <div className="xl:text-lg lg:text-xs text-white font-bold">
          от $120
        </div>
      </div>
      <img
        className="w-full h-full object-cover"
        src="/assets/places/hotel1.png"
        alt=""
      />
    </div>
  );
};

export default HeroCard;
