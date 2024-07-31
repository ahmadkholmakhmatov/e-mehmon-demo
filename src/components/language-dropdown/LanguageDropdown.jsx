// LanguageDropdown.js
import { Dropdown, Menu, Space } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const handleMenuClick = (e) => {
    i18n.changeLanguage(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="ru">Русский</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {i18n.language === 'en' ? 'English' : 'Русский'}
          <IoIosArrowDown />
        </Space>
      </a>
    </Dropdown>
  );
};

export default LanguageDropdown;
