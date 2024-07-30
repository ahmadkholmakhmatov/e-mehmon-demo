import { Tabs, DatePicker, Select, Space } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { PiCalendarDotsLight } from 'react-icons/pi';
import './searchForm.css';

const { TabPane } = Tabs;

const SearchForm = () => {
  const [destination, setDestination] = useState('г. Ташкент');
  const [dates, setDates] = useState(['2023-11-06', '2023-11-16']);
  const [guests, setGuests] = useState('2 взрослых');

  // Function to disable dates outside the desired range

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Отели" key="1">
        <form className=" text-[#777E90] text-sm" action="sumbit">
          <Space className="flex justify-between gap-6 items-end mt-8">
            <div className="home-selector w-full -mb-1">
              <div className="mb-3">Куда хотите поехать?</div>
              <Select
                placeholder="г. Ташкент"
                prefix={<UserOutlined />}
                // suffixIcon={<UserOutlined />}
                className="w-full h-14"
                onChange={(e) => setDestination(e.target.value)}
                options={[
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
                ]}
              />
            </div>

            <div className="w-full">
              <div className="mb-3">Заезд</div>
              <DatePicker
                onChange={(value) => setDates(dates.push(value))}
                suffixIcon={<PiCalendarDotsLight className=" -order-1" />}
                className="bg-[#F8F8FA] w-full text-[#1D2635] rounded-2xl flex border-none p-[17px]"
                // onChange={(value) => setDates(dates.push(value))}
                placeholder="7/11/2023"
              />
            </div>

            <div className="w-full">
              <div className="mb-3">Выезд</div>
              <DatePicker
                className="bg-[#F8F8FA] w-full text-[#1D2635] flex border-none rounded-2xl p-[17px]"
                // suffixIcon={<PiCalendarDotsLight className=" -order-1" />}
                placeholder="6/11/2023"
                onChange={(value) => setDates(dates.push(value))}
                // onChange={(value) => setDates(dates.push(value))}
              />
            </div>

            <div className="home-selector w-full -mb-1">
              <div className="mb-3">Кол-во гостей</div>
              <Select
                placeholder="2 взрослых"
                prefix={<UserOutlined />}
                // suffixIcon={<UserOutlined />}
                className="w-full h-14"
                onChange={(e) => setGuests(e.target.value)}
                options={[
                  {
                    value: '2взрослых',
                    label: '2 взрослых',
                  },
                  {
                    value: '1взрослых',
                    label: '1 взрослых',
                  },
                ]}
              />
            </div>

            <button type="sumbit" icon={<SearchOutlined />}>
              Начать поиск
            </button>
          </Space>
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
