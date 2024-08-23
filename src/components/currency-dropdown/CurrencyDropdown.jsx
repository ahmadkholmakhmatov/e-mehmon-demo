// CurrencyDropDown.js
import { Dropdown, Menu, Space } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../../utils/CurrencyContext';

const CurrencyDropDown = () => {
  const { t } = useTranslation();
  const { currency, setCurrency } = useCurrency();

  const handleMenuClick = (e) => {
    setCurrency(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="USD">{t('usd')}</Menu.Item>
      <Menu.Item key="UZS">{t('uzs')}</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a
        onClick={(e) => e.preventDefault()}
        className="sm:text-base esm:text-xs"
      >
        <Space>
          {currency}
          <IoIosArrowDown />
        </Space>
      </a>
    </Dropdown>
  );
};

export default CurrencyDropDown;
