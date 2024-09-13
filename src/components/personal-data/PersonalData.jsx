// src/components/PersonalData.js
import { useCallback, useContext, useEffect, useState } from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { LuBellRing, LuSettings2 } from 'react-icons/lu';
import { MdLockOutline } from 'react-icons/md';
import { TbCreditCard } from 'react-icons/tb';

import axiosInstance from '../../utils/axiosInstance';
import AvatarUploader from '../account-management/avatar-uploader/AvatarUploader';
import AvatarEditUploader from '../account-management/avatar-uploader/AvatarEditUploader';
import NameInput from './input-fields/NameInput';
import UsernameInput from './input-fields/UsernameInput';
import GenderInput from './input-fields/GenderInput';
import PassportDataForm from './input-fields/PassportDataForm';
import PhoneNumberInput from './input-fields/PhoneNumberInput';
import { AuthContext } from '../../utils/AuthContext';
import EmailInput from './input-fields/EmailInput';

const PersonalData = ({ setActiveDetail }) => {
  const [user, setUser] = useState({});
  const { setUserData } = useContext(AuthContext);
  const [isAvatarAvailable, setIsAvatarAvailable] = useState(null);

  const id = localStorage.getItem('id');
  const handleSectionClick = (section) => {
    setActiveDetail(section);
  };

  const getUserData = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`account/users/${id}/`);
      console.log(response.data);
      setUser(response.data);
      setUserData(response.data);
      setIsAvatarAvailable(response.data.avatar !== 'users/default.png');
    } catch (error) {
      console.error('Login failed', error);
    }
  }, [id, setUserData]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const handleInputField = () => {
    getUserData();
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
          <img
            className="w-16 h-16 rounded-full"
            src={`https://api.emehmon.xdevs.uz/media/${user.avatar}`}
            alt=""
          />
          <div>
            <p className="text-[#777E90] mb-3">
              Выберите изображение для загрузки
            </p>
            {isAvatarAvailable ? (
              <AvatarEditUploader onUploadSuccess={handleInputField} />
            ) : (
              <AvatarUploader onUploadSuccess={handleInputField} />
            )}
          </div>
        </div>

        <div className="w-full text-[#232E40]">
          <NameInput user={user} onUploadSuccess={handleInputField} />

          <UsernameInput user={user} onUploadSuccess={handleInputField} />

          <EmailInput user={user} onUploadSuccess={handleInputField} />

          <PhoneNumberInput user={user} onUploadSuccess={handleInputField} />

          <GenderInput user={user} onUploadSuccess={handleInputField} />

          <PassportDataForm user={user} onUploadSuccess={handleInputField} />
        </div>
      </main>
    </div>
  );
};

export default PersonalData;
