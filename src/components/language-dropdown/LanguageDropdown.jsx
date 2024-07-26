import { IoIosArrowDown } from 'react-icons/io';
import { Dropdown, Space, Menu } from 'antd';
import { useState } from 'react';

const items = [
  {
    label: 'Русский',
    key: '0',
  },
  {
    label: 'Uzbek',
    key: '1',
  },
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Русский');

  const handleMenuClick = (e) => {
    const selected = items.find((item) => item.key === e.key);
    setSelectedLanguage(selected.label);
  };

  const menu = <Menu onClick={handleMenuClick} items={items} />;

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {selectedLanguage}
          <IoIosArrowDown />
        </Space>
      </a>
    </Dropdown>
  );
};

export default LanguageDropdown;
