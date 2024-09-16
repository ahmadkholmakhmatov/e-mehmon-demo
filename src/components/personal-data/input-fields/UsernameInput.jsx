import { useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { LuPencilLine } from 'react-icons/lu';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { toast } from 'react-toastify';

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

      setIsInput(null); // Hides the input field after successful update
      onUploadSuccess(); // Calls the parent callback function to update the UI
      toast.success(response && 'Username changed successfully!');
    } catch (error) {
      console.error('Error updating username:', error);
      toast.error('Failed to update username. Please try again.');
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
              <span className="italic">{`@${user.username}`}</span>
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

      {!isInput ? (
        <button onClick={() => setIsInput(true)} className="hover:scale-110">
          <span className="flex gap-2 items-center text-[#3276FF] text-sm">
            <LuPencilLine /> Изменить
          </span>
        </button>
      ) : (
        <button
          onClick={handleInput}
          className={`hover:scale-110 ${
            !username
              ? 'text-[#777E90] text-sm cursor-not-allowed'
              : 'text-[#4DD282] '
          }`}
          disabled={!username} // Disable the button if the username field is empty
        >
          <span className="flex gap-2 items-center">
            <FaRegCircleCheck /> Сохранить
          </span>
        </button>
      )}
    </div>
  );
};

export default UsernameInput;
