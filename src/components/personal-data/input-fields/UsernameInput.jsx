import { useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { LuPencilLine } from 'react-icons/lu';
import { FaRegCircleCheck } from 'react-icons/fa6';

const UsernameInput = ({ user, onUploadSuccess }) => {
  //input field visible
  const [isInput, setIsInput] = useState(null);
  const [username, setUsername] = useState(user?.first_name || '');

  const token = localStorage.getItem('token');

  const handleInput = async () => {
    try {
      const response = await axiosInstance.put(
        `/account/users/update_profile/`,
        { username: username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setIsInput(null);

      onUploadSuccess();
      setUsername('');
      console.log(response);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };
  return (
    <div className="flex mb-6 pb-6 border-b border-[#F8F8FA] justify-between">
      <div className="flex">
        <div className="font-medium w-[180px] mr-6">Отображаемое имя</div>
        {!isInput ? (
          <div>
            {user.username === user.email ? (
              <span className="text-[#777E90]">
                Укажите имя, которое будет отображаться на сайте
              </span>
            ) : (
              user.username
            )}
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Username"
              className="bg-[#F8F8FA] p-4 outline-none rounded-2xl"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
      </div>

      {!isInput && (
        <button onClick={() => setIsInput(true)} className="hover:scale-110">
          <span className="flex gap-2 items-center text-[#3276FF]">
            <LuPencilLine /> Изменить
          </span>
        </button>
      )}

      {isInput && (
        <button
          onClick={handleInput}
          className={`hover:scale-110 ${
            !username ? 'text-[#777E90] cursor-not-allowed' : 'text-[#4DD282] '
          }`}
          disabled={!username} // Disable the button if either field is empty
        >
          <span className="flex gap-2 items-center ">
            <FaRegCircleCheck /> Сохранить
          </span>
        </button>
      )}
    </div>
  );
};

export default UsernameInput;