import { useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { toast } from 'react-toastify';

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

      toast.success(response.status && 'Name changed');
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
  };
  return (
    <>
      <div className="flex mb-6 pb-6 border-b border-customBg justify-between">
        <div className="flex items-center text-mainDark font-onest">
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
                className="mr-6 bg-customBg p-4 outline-none rounded-2xl"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="bg-customBg p-4 outline-none rounded-2xl"
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
            <span className="flex gap-2 items-cente font-onest font-medium text-mainBlue text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_8521_2512)">
                  <path
                    d="M9.38117 2.59095C9.87796 2.05271 10.1264 1.78358 10.3903 1.6266C11.0272 1.24782 11.8114 1.23605 12.4589 1.59553C12.7273 1.74452 12.9833 2.00606 13.4954 2.52916C14.0075 3.05225 14.2635 3.3138 14.4093 3.58794C14.7612 4.2494 14.7497 5.05051 14.3789 5.70112C14.2252 5.97076 13.9618 6.2245 13.4349 6.73199L7.16578 12.7702C6.16728 13.7319 5.66803 14.2128 5.04407 14.4565C4.42011 14.7002 3.73417 14.6822 2.36227 14.6464L2.17562 14.6415C1.75797 14.6306 1.54914 14.6251 1.42776 14.4873C1.30637 14.3496 1.32294 14.1369 1.35608 13.7114L1.37408 13.4804C1.46737 12.283 1.51401 11.6843 1.74784 11.1461C1.98166 10.608 2.38499 10.171 3.19165 9.29699L9.38117 2.59095Z"
                    stroke="#3276FF"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.66406 2.66797L13.3307 7.33464"
                    stroke="#3276FF"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33203 14.668L14.6654 14.668"
                    stroke="#3276FF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8521_2512">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Изменить
            </span>
          </button>
        )}

        {isInputName && (
          <button
            onClick={handleName}
            className={`hover:scale-110 ${
              !firstName || !lastName
                ? 'text-mainGrey cursor-not-allowed'
                : 'text-mainGreen '
            }`}
            disabled={!firstName || !lastName} // Disable the button if either field is empty
          >
            <span className="flex font-onest font-medium gap-2 items-center text-sm">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6693 8.5013C14.6693 4.8194 11.6845 1.83464 8.0026 1.83464C4.32071 1.83464 1.33594 4.8194 1.33594 8.5013C1.33594 12.1832 4.32071 15.168 8.0026 15.168C11.6845 15.168 14.6693 12.1832 14.6693 8.5013Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M5.33594 8.83333L7.0026 10.5L10.6693 6.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Сохранить
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default NameInput;
