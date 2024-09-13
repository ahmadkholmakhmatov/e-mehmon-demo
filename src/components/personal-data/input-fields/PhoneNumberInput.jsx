import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { LuPencilLine } from 'react-icons/lu';
import { FaRegCircleCheck } from 'react-icons/fa6';
import './phoneNumberInput.css';
import { toast, ToastContainer } from 'react-toastify';

function PhoneNumberInput({ user, onUploadSuccess }) {
  const [isInput, setIsInput] = useState(null);
  const [value, setValue] = useState();

  const token = localStorage.getItem('token');

  const handleInput = async () => {
    try {
      const response = await axiosInstance.put(
        `/account/users/update_profile/`,
        { phone: value },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setIsInput(null);

      onUploadSuccess();
      setValue('');
      toast.success(response.status && 'Phone number changed');
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
  };
  return (
    <>
      <div className="flex mb-6 pb-6 border-b border-[#F8F8FA] justify-between">
        <div className="flex">
          <div className="font-medium w-[180px] mr-6">Номер телефона</div>
          {!isInput ? (
            <div>
              {!user.phone ? (
                <span className="text-[#777E90]">
                  Номер телефона, по которому с вами смогут связаться
                </span>
              ) : (
                user.phone
              )}
            </div>
          ) : (
            <div className="phone-input">
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
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
              !value
                ? 'text-[#777E90] text-sm cursor-not-allowed'
                : 'text-[#4DD282] '
            }`}
            disabled={!value} // Disable the button if either field is empty
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
}

export default PhoneNumberInput;
