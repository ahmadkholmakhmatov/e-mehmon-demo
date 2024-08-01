import { useCurrency } from '../../utils/CurrencyContext';
import { useNavigate } from 'react-router-dom';

const Card = ({ hotel }) => {
  const { currency } = useCurrency();
  const exchangeRates = {
    USD: 1,
    UZS: 11500, // Example conversion rate, adjust as needed
  };
  const convertedPrice = hotel.price * exchangeRates[currency];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/hotels/hotel', { state: hotel });
  };
  // console.log(convertedPrice);
  return (
    <div className="2xl:w-[316px] 2xl:h-[458px] w-[282px] h-[410px]">
      <div className="relative 2xl:w-[316px] 2xl:h-[316px] w-[282px] h-[282px] overflow-hidden rounded-[20px] mb-3">
        <div className="status absolute top-3 left-3 flex justify-center items-center w-[83px] h-[30px] backdrop-blur-2xl p-2 border border-[#3276FF] border-solid rounded-3xl text-xs text-white">
          {hotel.status}
        </div>

        <div className="rating absolute top-3 right-3 bg-[#FFC107] p-2 rounded-full text-xs">
          {hotel.rating}
        </div>
        <img className="w-full h-full object-cover" src={hotel.imgSrc} alt="" />
      </div>
      <div>
        <h4 className="text-[16px] text-[#232E40] font-bold mb-1">
          {hotel.name}
        </h4>
        <p className="text-sm text-[#777E90] mb-3">{hotel.address}</p>

        <div className="flex items-center justify-between gap-4">
          <button
            onClick={handleClick}
            className="bg-blue-20 px-6 py-4 text-base text-[#3276FF] rounded-2xl"
          >
            Забронировать
          </button>
          <div className="text-base font-bold">
            от $
            {currency === 'USD'
              ? `${convertedPrice.toFixed(0)}`
              : `${convertedPrice.toFixed(0)}`}
            <span className="text-xs font-normal text-[#777E90]">/ночь</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
