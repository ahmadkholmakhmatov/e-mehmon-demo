import { Tabs, DatePicker, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LuSearch } from 'react-icons/lu';
import { useState } from 'react';
import { PiCalendarDotsLight } from 'react-icons/pi';
import './searchForm.css';

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
  const [destination, setDestination] = useState('г. Ташкент');
  const [dates, setDates] = useState(['2023-11-06', '2023-11-16']);
  const [guests, setGuests] = useState('2 взрослых');

  const handleSumbit = (e) => {
    e.preventDefault();
  };
  // Function to disable dates outside the desired range

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Отели" key="1">
        <form
          onSubmit={handleSumbit}
          className="flex justify-between gap-6 items-end mt-8 text-[#777E90] text-sm"
          action="sumbit"
        >
          <div className="home-selector   basis-[calc(20%-24px)] -mb-1">
            <div className="mb-3">Куда хотите поехать?</div>
            <Select
              placeholder="г. Ташкент"
              prefix={<UserOutlined />}
              // suffixIcon={<UserOutlined />}
              className="w-full h-14"
              onChange={(e) => setDestination(e.target.value)}
              options={cityOption}
            />
          </div>

          <div className="  basis-[calc(20%-24px)]">
            <div className="mb-3">Заезд</div>
            <DatePicker
              onChange={(value) => setDates(dates.push(value))}
              suffixIcon={<PiCalendarDotsLight className="w-6 h-6" />}
              className="bg-[#F8F8FA] w-full text-[#1D2635] rounded-2xl flex border-none p-[17px]"
              // onChange={(value) => setDates(dates.push(value))}
              placeholder="7/11/2023"
            />
          </div>

          <div className="  basis-[calc(20%-24px)]">
            <div className="mb-3">Выезд</div>
            <DatePicker
              suffixIcon={<PiCalendarDotsLight className="w-6 h-6" />}
              className="bg-[#F8F8FA] w-full text-[#1D2635] flex border-none rounded-2xl p-[17px]"
              // suffixIcon={<PiCalendarDotsLight className=" -order-1" />}
              placeholder="6/11/2023"
              onChange={(value) => setDates(dates.push(value))}
              // onChange={(value) => setDates(dates.push(value))}
            />
          </div>

          <div className="home-selector  basis-[calc(20%-24px)] -mb-1">
            <div className="mb-3">Кол-во гостей</div>
            <Select
              placeholder="2 взрослых"
              prefix={<UserOutlined />}
              // suffixIcon={<UserOutlined />}
              className="w-full h-14"
              onChange={(e) => setGuests(e.target.value)}
              options={reserveOption}
            />
          </div>

          <button
            className="basis-[calc(20%-24px)] h-14 flex items-center justify-center gap-2 bg-[#3276FF] text-white rounded-2xl cursor-pointer"
            type="sumbit"
          >
            <LuSearch className="w-6 h-6" /> Начать поиск
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
