import { useCallback, useContext, useEffect, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import './accountDropdown.css';
import axiosInstance from '../../utils/axiosInstance';
import { t } from 'i18next';

const menuItems = [
  {
    key: '1',
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    text: 'Управление аккаунтом',
    section: 'account',
    route: '/profile',
  },
  {
    key: '2',
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.57956 8.62505C2.50886 8.03528 2.47351 7.74039 2.52323 7.499C2.6651 6.81015 3.27111 6.25159 4.07871 6.06529C4.36172 6 4.717 6 5.42757 6H18.5724C19.283 6 19.6383 6 19.9213 6.06529C20.7289 6.25159 21.3349 6.81015 21.4768 7.499C21.5265 7.74039 21.4911 8.03528 21.4204 8.62505C21.2584 9.97669 20.4991 10.716 19.0512 11.1423L14.88 12.3703C13.4541 12.7901 12.7411 13 12 13C11.2589 13 10.5459 12.7901 9.11996 12.3703L4.94882 11.1423C3.50094 10.7161 2.7416 9.97669 2.57956 8.62505Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3.46283 10.5L3.26658 12.7757C2.91481 16.855 2.73892 18.8947 3.86734 20.1974C4.99576 21.5 6.93851 21.5 10.824 21.5H13.176C17.0615 21.5 19.0042 21.5 20.1327 20.1974C21.2611 18.8947 21.0852 16.855 20.7334 12.7757L20.5372 10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 5.5L15.4227 5.23509C15.0377 3.91505 14.8452 3.25503 14.3869 2.87752C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 2.87752C9.15478 3.25503 8.96228 3.91505 8.57727 5.23509L8.5 5.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),

    text: 'Бронирования',
    section: 'reservation',
    route: '/profile',
  },
  {
    key: '3',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_8511_49310)">
          <path
            d="M2 2.66797V13.3346C2 13.9632 2 14.2774 2.19526 14.4727C2.39052 14.668 2.70479 14.668 3.33333 14.668H12.6667C13.2952 14.668 13.6095 14.668 13.8047 14.4727C14 14.2774 14 13.9632 14 13.3346V2.66797"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 5.33398V6.33398M7 7.33398V6.33398M9 5.33398V6.33398M9 7.33398V6.33398M7 6.33398H9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.33073 14.668L9.33073 12.0013C9.33073 11.2649 8.73378 10.668 7.9974 10.668C7.26102 10.668 6.66406 11.2649 6.66406 12.0013V14.668"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33203 2.66732H5.33203C5.75863 1.8855 6.79185 1.33398 7.9987 1.33398C9.20555 1.33398 10.2388 1.8855 10.6654 2.66732H14.6654"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 5.33398H4.66667M4 8.00065H4.66667M4 10.6673H4.66667"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.332 5.33398H11.9987M11.332 8.00065H11.9987M11.332 10.6673H11.9987"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_8511_49310">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: 'Мои объекты',
    section: 'houses',
    route: '/profile',
  },
  {
    key: '4',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.68792 9.84707C1.54615 10.7764 2.17997 11.4215 2.956 11.743C5.93117 12.9754 10.0714 12.9754 13.0466 11.743C13.8226 11.4215 14.4565 10.7764 14.3147 9.84707C14.2276 9.27592 13.7967 8.80034 13.4776 8.33593C13.0595 7.72016 13.0179 7.04854 13.0179 6.33398C13.0179 3.57256 10.7719 1.33398 8.0013 1.33398C5.23072 1.33398 2.98472 3.57256 2.98472 6.33398C2.98466 7.04854 2.94312 7.72016 2.52504 8.33593C2.20586 8.80033 1.77504 9.27592 1.68792 9.84707Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33594 12.668C5.6416 13.8181 6.71962 14.668 8.0026 14.668C9.28558 14.668 10.3636 13.8181 10.6693 12.668"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: 'Уведомления',
    section: 'notification',
    route: '/profile',
  },
  {
    key: '5',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.33073 9H10.6641M5.33073 5.66667H7.9974"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.06457 12.666C3.19783 12.5808 2.54853 12.3204 2.11308 11.885C1.33203 11.1039 1.33203 9.84684 1.33203 7.33268V6.99935C1.33203 4.48519 1.33203 3.22811 2.11308 2.44706C2.89413 1.66602 4.15121 1.66602 6.66536 1.66602H9.33203C11.8462 1.66602 13.1033 1.66602 13.8843 2.44706C14.6654 3.22811 14.6654 4.48519 14.6654 6.99935V7.33268C14.6654 9.84684 14.6654 11.1039 13.8843 11.885C13.1033 12.666 11.8462 12.666 9.33203 12.666C8.95839 12.6743 8.66079 12.7028 8.36843 12.7694C7.56951 12.9533 6.82971 13.3621 6.09861 13.7186C5.05689 14.2266 4.53603 14.4805 4.20916 14.2428C3.58383 13.777 4.19506 12.3339 4.33203 11.666"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    text: 'Отзывы',
    section: 'review',
    route: '/profile',
  },
  {
    key: '6',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9737 2.66277C11.186 1.56615 9.62562 2.00808 8.68827 2.71201L8.68826 2.71201C8.30393 3.00064 8.11176 3.14495 7.9987 3.14495C7.88563 3.14495 7.69347 3.00064 7.30913 2.71201C6.37178 2.00808 4.81142 1.56615 3.02366 2.66277C0.67741 4.10196 0.146512 8.8499 5.55838 12.8556C6.58918 13.6185 7.10457 14 7.9987 14C8.89282 14 9.40822 13.6185 10.439 12.8556C15.8509 8.8499 15.32 4.10196 12.9737 2.66277Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    text: 'Сохраненные',
    section: 'saved',
    route: '/profile',
  },
  {
    key: '7',
    icon: (
      <svg
        className="text-[#FF4E4E]"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 11.75C9.95093 12.9846 8.92206 14.0329 7.54376 13.9992C7.2231 13.9914 6.82675 13.8796 6.03408 13.656C4.12641 13.1179 2.47037 12.2136 2.07304 10.1877C2 9.8153 2 9.39626 2 8.55817L2 7.44183C2 6.60374 2 6.1847 2.07304 5.81231C2.47037 3.78644 4.12641 2.88211 6.03408 2.34402C6.82676 2.12043 7.2231 2.00864 7.54376 2.00079C8.92206 1.96707 9.95093 3.01538 10 4.25"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M14.0013 8.00065H6.66797M14.0013 8.00065C14.0013 7.53383 12.6718 6.66167 12.3346 6.33398M14.0013 8.00065C14.0013 8.46747 12.6718 9.33963 12.3346 9.66732"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: 'Выйти с аккаунта',
    section: 'logout',
    route: '/',
    isLogout: true,
  },
];

const AccountDropdown = () => {
  const [user, setUser] = useState({});
  const { userData, setUserData } = useContext(AuthContext);
  const { logout, handleSelectSection } = useContext(AuthContext);
  const navigate = useNavigate();

  const id = localStorage.getItem('id');

  const getUserData = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`account/users/${id}/`);
      setUser(response.data);
      setUserData(userData);
    } catch (error) {
      console.error('Login failed', error);
    }
  }, [id, userData, setUserData]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const handleMenuClick = (section, route) => {
    handleSelectSection(section);
    navigate(route);
  };

  const menu = (
    <div className="account-dropdown">
      <Menu>
        {menuItems.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            onClick={() =>
              item.isLogout
                ? handleLogout()
                : handleMenuClick(item.section, item.route)
            }
          >
            <span className={item.isLogout ? 'text-[#FF4E4E]' : ''}>
              {item.text}
            </span>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Dropdown overlay={menu} placement="bottomCenter" arrow>
      <div className="flex items-center cursor-pointer">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src={`https://api.emehmon.xdevs.uz/media/${user.avatar}`}
          alt=""
        />
        <span className="ml-2">
          {user.first_name ? user.first_name : t('header.fifthWord')}
        </span>
      </div>
    </Dropdown>
  );
};

export default AccountDropdown;
