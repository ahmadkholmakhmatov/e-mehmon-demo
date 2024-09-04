// src/components/PersonalData.js
import { useEffect, useState } from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { LuBellRing, LuPencilLine, LuSettings2 } from 'react-icons/lu';
import { MdLockOutline } from 'react-icons/md';
import { TbCreditCard } from 'react-icons/tb';

import axiosInstance from '../../utils/axiosInstance';
import AvatarUploader from '../account-management/AvatarUploader';

const PersonalData = ({ setActiveDetail }) => {
  const [user, setUser] = useState({});
  const handleSectionClick = (section) => {
    setActiveDetail(section);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get(`account/users/74/`);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const [users, setUsers] = useState({
    avatar: 'initial-avatar-url', // replace with the initial avatar URL or default image
  });

  const handleAvatarSave = (newAvatar) => {
    setUsers((prevUser) => ({
      ...prevUser,
      avatar: newAvatar,
    }));
  };

  return (
    <div className="flex">
      <aside className="pr-6 border-r border-[#F8F8FA]">
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <button
                onClick={() => handleSectionClick('personal')}
                className="text-[#232E40] rounded-2xl bg-[#F8F8FA]"
              >
                <span className="flex items-center whitespace-nowrap gap-3 p-4">
                  <FaRegUser className="w-6 h-6" /> Персональные данные
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionClick('notification')}
                className="text-[#232E40] rounded-2xl"
              >
                <span className="flex items-center whitespace-nowrap gap-3 p-4">
                  <LuBellRing className="w-6 h-6" /> Уведомления
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionClick('security')}
                className="text-[#232E40] rounded-2xl"
              >
                <span className="flex items-center whitespace-nowrap gap-3 p-4">
                  <MdLockOutline className="w-6 h-6" /> Безопасность
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionClick('payment')}
                className="text-[#232E40] rounded-2xl"
              >
                <span className="flex items-center whitespace-nowrap gap-3 p-4">
                  <TbCreditCard className="w-6 h-6" /> Платежи
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionClick('settings')}
                className="text-[#232E40] rounded-2xl"
              >
                <span className="flex items-center whitespace-nowrap gap-3 p-4">
                  <LuSettings2 className="w-6 h-6" /> Настройки
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="pl-6 w-full">
        <div className="mb-6">
          <h1 className="text-[#232E40] text-2xl font-bold mb-2">
            Персональные данные
          </h1>
          <p className="text-[#777E90] text-sm">
            Обновите свои данные и узнайте, как мы их используем.
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <img className="w-16 h-16 rounded-full" src={users.avatar} alt="" />

          <div>
            <p className="text-[#777E90] mb-3">
              Выберите изображение для загрузки
            </p>
            <AvatarUploader onSave={handleAvatarSave} />
          </div>
        </div>

        <div className="w-full text-[#232E40]">
          <div className="flex mb-6 pb-6 border-b border-[#F8F8FA] justify-between">
            <div className="flex">
              <div className="font-medium w-[180px] mr-6">Имя</div>
              <div>{user.first_name ? user.first_name : 'Enter name'}</div>
            </div>

            <button className="hover:scale-110">
              <span className="flex gap-2 items-center text-[#3276FF]">
                <LuPencilLine /> Изменить
              </span>
            </button>
          </div>

          <div className="flex mb-6 pb-6 border-b border-[#F8F8FA] justify-between">
            <div className="flex">
              <div className="font-medium w-[180px] mr-6">Отображаемое имя</div>
              <div>
                {user.username === user.email ? (
                  <span className="text-[#777E90]">
                    Укажите имя, которое будет отображаться на сайте
                  </span>
                ) : (
                  user.name
                )}
              </div>
            </div>

            <button className="hover:scale-110">
              <span className="flex gap-2 items-center text-[#3276FF]">
                <LuPencilLine /> Изменить
              </span>
            </button>
          </div>

          <div className="flex mb-6 pb-6 border-b border-[#F8F8FA] justify-between">
            <div className="flex">
              <div className="font-medium w-[180px] mr-6">Email</div>
              <div>{user.username}</div>
            </div>

            <button className="hover:scale-110">
              <span className="flex gap-2 items-center text-[#3276FF]">
                <LuPencilLine /> Изменить
              </span>
            </button>
          </div>

          <div className="flex mb-6 pb-6 border-b border-[#F8F8FA] justify-between">
            <div className="flex">
              <div className="font-medium w-[180px] mr-6">Номер телефона</div>
              <div>
                {user.phone ? (
                  user.phone
                ) : (
                  <span className="text-[#777E90]">
                    Номер телефона, по которому с вами смогут связаться
                  </span>
                )}
              </div>
            </div>

            <button className="hover:scale-110">
              <span className="flex gap-2 items-center text-[#3276FF]">
                <LuPencilLine /> Изменить
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PersonalData;
