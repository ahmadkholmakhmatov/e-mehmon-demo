import Card from '../card/Card';

const HotelList = ({ hotels }) => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 esm:grid-cols-2 place-items-center xl:gap-x-6 xl:gap-y-8 md:gap-x-7 sm:gap-x-6 sm:gap-y-7 esm:gap-x-4  md:gap-y-8 esm:gap-4">
        {hotels.map((hotel) => (
          <Card key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
