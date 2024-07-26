import { Tabs, DatePicker, Input, Button, Space } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { PiCalendarDotsLight } from 'react-icons/pi';

const { TabPane } = Tabs;

const SearchForm = () => {
  const [destination, setDestination] = useState('г. Ташкент');
  const [dates, setDates] = useState(['2023-11-06', '2023-11-16']);
  const [guests, setGuests] = useState('2 взрослых');

  // Function to disable dates outside the desired range

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Отели" key="1">
        <Space className="flex justify-between items-end mt-12">
          <div className="input">
            <div>Куда хотите поехать?</div>
            <Input
              size="large"
              placeholder="Куда хотите поехать?"
              prefix={<UserOutlined />}
              suffixIcon={<UserOutlined />}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div>
            <div>Заезд</div>
            <DatePicker
              className="bg-[#F8F8FA] flex"
              suffixIcon={<PiCalendarDotsLight className=" -order-1" />}
              placeholder=""
              onChange={(value) => setDates(dates.push(value))}
            />
          </div>

          <div>
            <div>Выезд</div>
            <DatePicker onChange={(value) => setDates(dates.push(value))} />
          </div>

          <div>
            <div>Кол-во гостей</div>
            <Input
              size="large"
              placeholder="Кол-во гостей"
              prefix={<UserOutlined />}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          <Button type="primary" icon={<SearchOutlined />} size="large">
            Начать поиск
          </Button>
        </Space>
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
