import Card from '../card/Card';
const hotels = [
  {
    id: 1,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel1.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 2,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel2.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 3,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel3.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 4,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel4.png',
    rating: 8.9,
    status: 'Популярно',
  },

  {
    id: 5,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel3.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 6,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel4.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 7,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel1.png',
    rating: 8.9,
    status: 'Популярно',
  },
  {
    id: 8,
    name: 'Hotel Neptun Tashkent Pool&Spa',
    address: '8 ул. Лянгар, Ташкент',
    price: 120,
    imgSrc: '/assets/places/hotel2.png',
    rating: 8.9,
    status: 'Популярно',
  },
];

const HotelList = () => {
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
