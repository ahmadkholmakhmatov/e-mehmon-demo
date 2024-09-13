import { useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { LuPencilLine } from 'react-icons/lu';
import { FaRegCircleCheck } from 'react-icons/fa6';

const EmailInput = ({ user, onUploadSuccess }) => {
  //input field visible
  const [isInput, setIsInput] = useState(null);
  const [email, setEmail] = useState(user?.email || '');
  const token = localStorage.getItem('token');

  const handleName = async () => {
    try {
      const response = await axiosInstance.put(
        `/account/users/update_profile/`,
        { email: email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setIsInput(null);
      onUploadSuccess();
      setEmail('');
      console.log(response);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };
  return (
    <div className="flex mb-6 pb-6 border-b border-[#F8F8FA] justify-between">
      <div className="flex">
        <div className="font-medium w-[180px] mr-6">Email</div>
        {!isInput ? (
          <div>
            <span>{user.first_name ? user.email : 'Enter email'}</span>
          </div>
        ) : (
          <div>
            <input
              type="email"
              placeholder="Имя"
              className="mr-6 bg-[#F8F8FA] p-4 outline-none rounded-2xl max-w-fit"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
      </div>

      {!isInput && (
        <button onClick={() => setIsInput(true)} className="hover:scale-110">
          <span className="flex gap-2 items-center text-[#3276FF] text-sm">
            <LuPencilLine /> Изменить
          </span>
        </button>
      )}

      {isInput && (
        <button
          onClick={handleName}
          className={`hover:scale-110 ${
            !email
              ? 'text-[#777E90] text-sm cursor-not-allowed'
              : 'text-[#4DD282] '
          }`}
          disabled={!email} // Disable the button if either field is empty
        >
          <span className="flex gap-2 items-center ">
            <FaRegCircleCheck /> Сохранить
          </span>
        </button>
      )}
    </div>
  );
};

export default EmailInput;
