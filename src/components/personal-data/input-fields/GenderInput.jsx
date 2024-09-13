import { useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { LuPencilLine } from 'react-icons/lu';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { Select } from 'antd';
import { toast, ToastContainer } from 'react-toastify';

const GenderInput = ({ user, onUploadSuccess }) => {
  //input field visible
  const [isInput, setIsInput] = useState(null);
  const [gender, setGender] = useState(user?.gender || '');

  const token = localStorage.getItem('token');

  const onChange = (value) => {
    setGender(value);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };

  const handleInput = async () => {
    try {
      const response = await axiosInstance.put(
        `/account/users/update_profile/`,
        { gender: gender },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setIsInput(null);
      setGender('');
      onUploadSuccess();
      toast.success(response.status && 'Gender changed');
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };
  return (
    <>
      <div className="flex mb-6 pb-6 border-b border-[#F8F8FA] justify-between">
        <div className="flex">
          <div className="font-medium w-[180px] mr-6">Пол</div>
          {!isInput ? (
            <div>
              {!user.gender ? (
                <span className="text-[#777E90]">Укажите ваш пол</span>
              ) : (
                <span>{user.gender === 'man' ? 'мужчина' : 'женщина'}</span>
              )}
            </div>
          ) : (
            <div>
              <Select
                showSearch
                placeholder="Select a gender"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  {
                    value: 'man',
                    label: 'мужчина',
                  },
                  {
                    value: 'woman',
                    label: 'женщина',
                  },
                ]}
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
            onClick={handleInput}
            className={`hover:scale-110 ${
              !gender
                ? 'text-[#777E90] text-sm cursor-not-allowed'
                : 'text-[#4DD282] '
            }`}
            disabled={!gender} // Disable the button if either field is empty
          >
            <span className="flex gap-2 items-center ">
              <FaRegCircleCheck /> Сохранить
            </span>
          </button>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000} // Close toast after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default GenderInput;
