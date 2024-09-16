import { Tabs, DatePicker, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { PiCalendarDotsLight } from 'react-icons/pi';
import './searchForm.css';
import { useNavigate } from 'react-router-dom';

const { TabPane } = Tabs;
const cityOption = [
  {
    value: 'tashkentG',
    label: 'г. Ташкент',
  },
  {
    value: 'andijan',
    label: 'Andijan',
  },
  {
    value: 'bukhara',
    label: 'Bukhara ',
  },
];
const reserveOption = [
  {
    value: '2взрослых',
    label: '2 взрослых',
  },
  {
    value: '1взрослых',
    label: '1 взрослых',
  },
];

const SearchForm = () => {
  const [destination, setDestination] = useState(null);
  const [firstDate, setFirstDate] = useState(null);
  const [secondDate, setSecondDate] = useState(null);
  const [guests, setGuests] = useState(null);
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    const formData = {
      destination,
      firstDate,
      secondDate,
      guests,
    };

    navigate('/hotels', formData);
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Отели" key="1">
        <form
          onSubmit={handleSumbit}
          className="flex lg:flex-nowrap esm:flex-wrap justify-between xl:gap-6 lg:gap-5 md:gap-3 esm:gap-2 items-end xl:mt-8 lg:mt-5 md:mt-4 text-[#777E90] xl:text-sm md:text-xs"
          action="sumbit"
        >
          <div className="home-selector lg:basis-[calc(20%-20px)] sm:basis-full esm:basis-full -mb-1">
            <div className="mb-3">Куда хотите поехать?</div>
            <Select
              placeholder="г. Ташкент"
              prefix={<UserOutlined />}
              className="w-full h-14"
              value={destination}
              onChange={(value) => setDestination(value)}
              options={cityOption}
            />
          </div>

          <div className="lg:basis-[calc(20%-20px)] esm:basis-[calc(50%-8px)]">
            <div className="mb-3">Заезд</div>
            <DatePicker
              onChange={(date, dateString) => setFirstDate(dateString)}
              suffixIcon={
                <PiCalendarDotsLight className="xl:w-6 xl:h-6 lg:w-4 lg:h-4" />
              }
              className="bg-[#F8F8FA] w-full text-[#1D2635] rounded-2xl flex border-none p-[17px]"
              placeholder="7/11/2023"
            />
          </div>

          <div className="lg:basis-[calc(20%-20px)] esm:basis-[calc(50%-8px)]">
            <div className="mb-3">Выезд</div>
            <DatePicker
              onChange={(date, dateString) => setSecondDate(dateString)}
              suffixIcon={
                <PiCalendarDotsLight className="xl:w-6 xl:h-6 lg:w-4 lg:h-4" />
              }
              className="bg-[#F8F8FA] w-full text-[#1D2635] flex border-none rounded-2xl p-[17px]"
              placeholder="6/11/2023"
            />
          </div>

          <div className="home-selector lg:basis-[calc(20%-20px)] esm:basis-[calc(50%-8px)] -mb-1">
            <div className="mb-3">Кол-во гостей</div>
            <Select
              placeholder="2 взрослых"
              prefix={<UserOutlined />}
              className="w-full h-14"
              value={guests}
              onChange={(value) => setGuests(value)}
              options={reserveOption}
            />
          </div>

          <button
            className="hover:scale-105 transition-transform duration-500 lg:basis-[calc(20%-20px)] esm:basis-[calc(50%-8px)] h-14 flex items-center justify-center gap-2 px-0 sm:px-2 bg-[#3276FF] text-white rounded-2xl cursor-pointer"
            type="submit"
          >
            <svg
              className="xl:w-6 xl:h-6 lg:w-4 lg:h-4 esm:w-4 esm:h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.5 17.5L22 22"
              ></path>
              <path
                stroke="#fff"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20 11a9 9 0 10-18 0 9 9 0 0018 0z"
              ></path>
            </svg>
            Начать поиск
          </button>
        </form>
      </TabPane>

      <TabPane tab="Туры" key="2">
        {/* Similar fields for Tours */}
      </TabPane>

      <TabPane tab="Авиабилеты" key="3">
        {/* Similar fields for Flights */}
      </TabPane>

      <TabPane tab="Транспорт" key="4">
        {/* Similar fields for Transport */}
      </TabPane>
    </Tabs>
  );
};

export default SearchForm;
