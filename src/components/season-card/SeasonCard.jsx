const SeasonCard = () => {
  return (
    <div>
      <div className="relative 2xl:w-[321.25px] 2xl:h-[321.25px] w-[282px] h-[282px] rounded-3xl overflow-hidden mb-3">
        <div className="absolute top-3 left-3 text-[10px] font-medium text-white bg-[#232E40] p-2 rounded-3xl">
          Скидка 24%
        </div>
        <img
          className="w-full h-full object-cover"
          src="/assets/places/n1.png"
          alt=""
        />
      </div>

      <div className="text-lg font-semibold text-[#232E40] mb-3">
        Горы Кунгурбука
      </div>
      <div className=" text-base font-semibold text-[#777E90]">от $240</div>
    </div>
  );
};

export default SeasonCard;
