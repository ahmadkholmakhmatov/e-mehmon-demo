const HeroCard = () => {
  return (
    <div className="relative group 2xl:w-[546px]  w-[486px] h-[310px] rounded-3xl overflow-hidden">
      <div className="absolute top-6 right-6 text-[#232E40] bg-[#FFC107] p-2 rounded-full text-xs">
        8.9
      </div>

      <div className="absolute hidden group-hover:flex w-full text-white justify-between bg-[#1C253480] backdrop-blur-[2px] px-6 py-4 bottom-0">
        <div>
          <div className="text-base font-bold mb-1">
            Hotel Neptun Tashkent Pool&Spa
          </div>
          <div className="text-sm text-[#B7BFD5] font-medium">
            8 ул. Лянгар, Ташкент
          </div>
        </div>

        <div className="text-lg text-white font-bold">от $120</div>
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
