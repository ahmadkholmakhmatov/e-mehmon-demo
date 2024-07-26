import { IoIosArrowDown } from 'react-icons/io';
import { Dropdown, Space, Menu } from 'antd';
import { useState } from 'react';

const items = [
  {
    label: 'USD',
    key: '0',
  },
  {
    label: 'UZS',
    key: '1',
  },
];

const CurrencyDropDown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleMenuClick = (e) => {
    const selected = items.find((item) => item.key === e.key);
    setSelectedCurrency(selected.label);
  };

  const menu = <Menu onClick={handleMenuClick} items={items} />;

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {selectedCurrency}
          <IoIosArrowDown />
        </Space>
      </a>
    </Dropdown>
  );
};

export default CurrencyDropDown;
