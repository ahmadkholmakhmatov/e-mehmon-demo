import { useState } from 'react';
import { Dropdown, Menu } from 'antd';
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="20"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1.109 12.307c-.177 1.162.615 1.968 1.585 2.37 3.719 1.54 8.894 1.54 12.613 0 .97-.402 1.763-1.208 1.585-2.37-.108-.714-.647-1.308-1.046-1.889-.523-.77-.575-1.609-.575-2.502 0-3.452-2.807-6.25-6.27-6.25-3.464 0-6.271 2.798-6.271 6.25 0 .893-.052 1.733-.575 2.502-.399.581-.937 1.175-1.046 1.89z"
          ></path>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.668 15.832c.382 1.438 1.73 2.5 3.333 2.5 1.604 0 2.952-1.062 3.334-2.5"
          ></path>
        </svg>
      </div>
    </Dropdown>
  );
};

export default NotificationDropdown;
