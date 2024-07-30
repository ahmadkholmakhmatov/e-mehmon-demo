import Card from '../card/Card';

const HotelList = ({ hotels }) => {
  return (
    <div>
      <div className="grid grid-cols-4 place-items-center gap-x-6 gap-y-8">
        {hotels.map((hotel) => (
          <Card key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
