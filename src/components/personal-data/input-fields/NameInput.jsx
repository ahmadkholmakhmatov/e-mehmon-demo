import { useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { LuPencilLine } from 'react-icons/lu';
import { FaRegCircleCheck } from 'react-icons/fa6';

const NameInput = ({ user, onUploadSuccess }) => {
  //input field visible
  const [isInputName, setIsInputName] = useState(null);
  const [firstName, setFirstName] = useState(user?.first_name || '');
  const [lastName, setLastName] = useState(user?.last_name || '');
  const token = localStorage.getItem('token');

  const handleName = async () => {
    try {
      const response = await axiosInstance.put(
        `/account/users/update_profile/`,
        { first_name: firstName, last_name: lastName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setIsInputName(null);
      onUploadSuccess();
      setFirstName('');
      setLastName('');
      console.log(response);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };
  return (
    <div className="flex mb-6 pb-6 border-b border-[#F8F8FA] justify-between">
      <div className="flex">
        <div className="font-medium w-[180px] mr-6">Имя</div>
        {!isInputName ? (
          <div>
            <span>{user.first_name ? user.first_name : 'Enter name'}</span>{' '}
            <span>{user.last_name ? user.last_name : 'Enter lastname'}</span>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Имя"
              className="mr-6 bg-[#F8F8FA] p-4 outline-none rounded-2xl"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="bg-[#F8F8FA] p-4 outline-none rounded-2xl"
              placeholder="Фамилья"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        )}
      </div>

      {!isInputName && (
        <button
          onClick={() => setIsInputName(true)}
          className="hover:scale-110"
        >
          <span className="flex gap-2 items-center text-[#3276FF] text-sm">
            <LuPencilLine /> Изменить
          </span>
        </button>
      )}

      {isInputName && (
        <button
          onClick={handleName}
          className={`hover:scale-110 ${
            !firstName || !lastName
              ? 'text-[#777E90] text-sm cursor-not-allowed'
              : 'text-[#4DD282] '
          }`}
          disabled={!firstName || !lastName} // Disable the button if either field is empty
        >
          <span className="flex gap-2 items-center ">
            <FaRegCircleCheck /> Сохранить
          </span>
        </button>
      )}
    </div>
  );
};

export default NameInput;
