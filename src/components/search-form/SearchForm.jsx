import { Tabs, DatePicker, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './searchForm.css';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

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
  const [formattedDates, setFormattedDates] = useState(null);

  const [guests, setGuests] = useState(null);
  const navigate = useNavigate();

  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY/MM/DD';

  const handleSumbit = (e) => {
    e.preventDefault();
    const formData = {
      destination,
      formattedDates,
      guests,
    };

    navigate('/hotels', formData);
  };

  const onDateChange = (_, dateStrings) => {
    // Set the raw moment objects

    // Set the formatted date strings
    setFormattedDates(dateStrings);

    // Logging the selected dates
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
              suffixIcon={null}
              prefix={null}
              className="w-full h-14"
              value={destination}
              onChange={(value) => setDestination(value)}
              options={cityOption}
            />
          </div>

          <div className="lg:basis-[calc(40%-20px)] esm:basis-[calc(100%-8px)]">
            <div className="mb-3">Длительность пребывания</div>
            <RangePicker
              onChange={onDateChange}
              className="bg-[#F8F8FA] w-full text-[#1D2635] flex border-none rounded-2xl p-[17px]"
              // defaultValue={[dayjs(dateFormat), dayjs(dateFormat)]}
              suffixIcon={
                <span className="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2V4M6 2V4"
                      stroke="#B7BFD5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                      stroke="#B7BFD5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 8H20.5"
                      stroke="#B7BFD5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                      stroke="#B7BFD5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 8H21"
                      stroke="#B7BFD5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              }
              format={dateFormat}
              disabledDate={(current) =>
                current && current < moment().startOf('day')
              }
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
              className=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
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
