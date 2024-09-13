import { useCallback, useContext, useEffect, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { LuBellRing, LuHeart } from 'react-icons/lu';
import { SlHandbag } from 'react-icons/sl';
import { FaHospital } from 'react-icons/fa6';
import { MdOutlineRateReview } from 'react-icons/md';
import { LogoutOutlined } from '@ant-design/icons'; // For the logout icon
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import './accountDropdown.css';
import axiosInstance from '../../utils/axiosInstance';
import { t } from 'i18next';
const AccountDropdown = () => {
  const [user, setUser] = useState({});
  const { userData, setUserData } = useContext(AuthContext);
  const { logout, handleSelectSection } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoAccountManagement = () => {
    handleSelectSection('account');
    navigate('/profile');
  };

  const handleNotifications = () => {
    handleSelectSection('notification');
    navigate('/profile');
  };
  const handleReservation = () => {
    handleSelectSection('reservation');
    navigate('/profile');
  };
  const handleHouses = () => {
    handleSelectSection('houses');
    navigate('/profile');
  };
  const handleReview = () => {
    handleSelectSection('review');
    navigate('/profile');
  };
  const handleSaved = () => {
    handleSelectSection('saved');
    navigate('/profile');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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

  //   useEffect(() => {
  //     getUserData();
  //   }, [getUserData, user.avatar, user.first_name]);

  const menu = (
    <div className="account-dropdown">
      <Menu>
        <Menu.Item
          key="1"
          icon={<LiaUserCircleSolid className="w-4 h-4" />}
          onClick={handleGoAccountManagement}
        >
          <span>Управление аккаунтом</span>
        </Menu.Item>
        <Menu.Item
          onClick={handleReservation}
          key="2"
          icon={<SlHandbag className="w-4 h-4" />}
        >
          <span>Бронирования</span>
        </Menu.Item>
        <Menu.Item
          onClick={handleHouses}
          key="3"
          icon={<FaHospital className="w-4 h-4" />}
        >
          <span>Мои объекты</span>
        </Menu.Item>
        <Menu.Item
          onClick={handleNotifications}
          key="4"
          icon={<LuBellRing className="w-4 h-4" />}
        >
          <span>Уведомления</span>
        </Menu.Item>
        <Menu.Item
          onClick={handleReview}
          key="5"
          icon={<MdOutlineRateReview className="w-4 h-4" />}
        >
          <span>Отзывы</span>
        </Menu.Item>
        <Menu.Item
          onClick={handleSaved}
          key="6"
          icon={<LuHeart className="w-4 h-4" />}
        >
          <span>Сохраненные</span>
        </Menu.Item>

        <Menu.Item
          key="7"
          icon={<LogoutOutlined className="text-[#FF4E4E] w-4 h-4" />}
          onClick={handleLogout}
        >
          <span className="text-[#FF4E4E]">Выйти с аккаунта</span>
        </Menu.Item>
      </Menu>
    </div>
  );

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
