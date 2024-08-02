import Card from '../card/Card';

const HotelList = ({ hotels }) => {
  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 place-items-center xl:gap-x-6 lg:gap-x-7 xl:gap-y-8 lg:gap-y-8">
        {hotels.map((hotel) => (
          <Card key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
