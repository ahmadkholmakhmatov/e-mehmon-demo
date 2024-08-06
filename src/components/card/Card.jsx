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
    <div className="2xl:w-[316px] 2xl:h-[458px] xl:w-full xl:h-fit lg:w-[282px] lg:h-[410px] md:w-[320px] md:h-[450px] esm:w-full esm:h-fit">
      <div className="relative 2xl:w-[316px] 2xl:h-[316px] xl:w-full lg:w-[282px] lg:h-[282px] md:w-[320px] md:h-[320px] sm:h-[262px] esm:w-full esm:h-[180px] overflow-hidden rounded-[20px] lg:mb-3 md:mb-2 esm:mb-1">
        <div className="status absolute top-3 left-3 flex justify-center items-center w-[83px] h-[30px] backdrop-blur-2xl p-2 border border-[#3276FF] border-solid rounded-3xl text-xs text-white">
          {hotel.status}
        </div>

        <div className="rating absolute top-3 right-3 bg-[#FFC107] p-2 rounded-full text-xs">
          {hotel.rating}
        </div>
        <img className="w-full h-full object-cover" src={hotel.imgSrc} alt="" />
      </div>
      <div>
        <h4 className="lg:text-[16px] md:text-lg esm:text-sm text-[#232E40] font-bold esm:mb-1">
          {hotel.name}
        </h4>
        <p className="md:text-sm esm:text-xs text-[#777E90] lg:mb-3 md:mb-2 esm:mb-1">
          {hotel.address}
        </p>

        <div className="flex md:flex-nowrap esm:flex-wrap items-center justify-between md:gap-4 esm:gap-2">
          <button
            onClick={handleClick}
            className="bg-blue-20 md:px-6 md:py-4 esm:px-2 esm:py-3 md:order-1 esm:order-2 md:text-base hover:bg-blue-600 hover:text-white transition-colors duration-500  text-[#3276FF] rounded-2xl"
          >
            Забронировать
          </button>
          <div className="esm:w-full md:text-base esm:text-sm font-bold md:order-2 esm:order-1">
            от{' '}
            {currency === 'USD'
              ? `$${convertedPrice.toFixed(0)}`
              : `${convertedPrice.toFixed(0)}`}
            <span className="esm:text-xs font-normal text-[#777E90]">
              /ночь
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
