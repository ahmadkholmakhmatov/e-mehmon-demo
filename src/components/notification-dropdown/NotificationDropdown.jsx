import { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { BiBell } from 'react-icons/bi';
import './notificationDropdown.css';
import { FaCircleExclamation } from 'react-icons/fa6';
import { FaRegFile } from 'react-icons/fa6';
import { RiUser3Fill } from 'react-icons/ri';

const NotificationDropdown = () => {
  const [notifications] = useState([
    {
      icon: <FaCircleExclamation className="text-[#777E90] w-6 h-6" />,
      message:
        'Зарабатывайте деньги, разместив свою недвижимость на E-mehmon.uz, будь то дом, гостиница или что-то между ними.',
    },
    {
      icon: <FaRegFile className="text-[#777E90] w-6 h-6" />,
      message:
        'Ищете низкие цены? У нас есть страница, посвященная поиску фантастических предложений в ваших любимых местах.',
    },
    {
      icon: <RiUser3Fill className="text-[#777E90] w-6 h-6" />,
      message: 'Необходимо пройти идентификацию личности своего профиля.',
    },
  ]);

  const menu = (
    <div className="notification-menu">
      <Menu>
        {notifications.map((notification, index) => (
          <>
            <Menu.Item key={index}>
              <div className="flex items-start">
                <div className="bg-[#F8F8FA] rounded-lg p-2 mr-2">
                  {notification.icon}
                </div>
                <div className="text-sm">{notification.message}</div>
              </div>
            </Menu.Item>
            <hr className="border-[#F8F8FA]" />
          </>
        ))}

        <Menu.Item>
          <div className="text-center text-[#232E40] hover:text-indigo-400 ">
            <a href="#" className="text-base font-semibold">
              Посмотреть все уведомления
            </a>
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );

  return (
    <Dropdown overlay={menu} placement="bottomCenter" arrow trigger={['hover']}>
      <div className="cursor-pointer">
        <BiBell className=" h-[22px] w-[22px]" />
      </div>
    </Dropdown>
  );
};

export default NotificationDropdown;
