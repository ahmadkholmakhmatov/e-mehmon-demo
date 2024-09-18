import { useState, useRef } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { Select } from 'antd';
import './passportDataForm.css';
import { toast } from 'react-toastify';

const PassportDataForm = ({ user, onUploadSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passportGiven, setPasswordGiven] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const formRef = useRef(null);
  //input field visible
  const [isInput, setIsInput] = useState(null);
  const [formData, setFormData] = useState(
    {
      first_name: user.first_name,
      last_name: user.last_name,
      passport_given_by: user.passport_given_by,
      passport_sn: user.passport_sn,
    } || {}
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      passport_given_by: passportGiven,
      passport_sn: passportNumber,
      birthDay,
      birthMonth,
      birthYear,
    };

    console.log({
      first_name: formData.first_name,
      last_name: formData.last_name,
      passport_given_by: formData.passport_given_by,
      passport_sn: formData.passport_sn,
      birth_date: `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`,
    });
    try {
      const response = await axiosInstance.put(
        `/account/users/update_profile/`,
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          passport_given_by: formData.passport_given_by,
          passport_sn: formData.passport_sn,
          birth_date: `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setIsInput(null);

      onUploadSuccess();
      setFormData('');
      toast.success(response.status && 'Passport datas changed');
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const token = localStorage.getItem('token');

  const handleInput = () => {
    // Check if form data is valid before submitting
    if (
      firstName &&
      lastName &&
      passportGiven &&
      passportNumber &&
      birthDay &&
      birthMonth &&
      birthYear &&
      termsAccepted
    ) {
      handleSubmit(new Event('submit')); // Call handleSubmit with a synthetic event
    } else {
      console.log('Form is incomplete!');
    }
  };
  const onChange = (value) => {
    setPasswordGiven(value);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };

  const onChangeMonth = (value) => {
    setBirthMonth(value);
    console.log(birthMonth);
  };
  return (
    <div className="flex mb-6 pb-6 font-onest border-b border-customBg justify-between">
      <div className="flex">
        <div className="font-medium text-mainDark w-[180px] mr-6">
          Паспортные данные
        </div>
        {!isInput ? (
          <div>
            {!user.passport_sn ? (
              <span className="text-mainGrey">Не указано</span>
            ) : (
              user.passport_sn
            )}
          </div>
        ) : (
          <div>
            <div className="mb-4 text-mainGrey text-sm">
              Сохраните ваши паспортные данные для использования в следующий раз
              при бронировании проживания, перелета или варианта досуга.
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="flex gap-4 mb-4">
                <input
                  className="bg-customBg p-4 outline-none rounded-2xl w-full"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="Имя"
                />

                <input
                  className="bg-customBg p-4 outline-none rounded-2xl w-full"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Фамилия"
                />
              </div>

              <div className="flex gap-4 passport-given-selector mb-4">
                <Select
                  className="bg-customBg basis-2/4 h-14"
                  showSearch
                  onChange={onChange}
                  onSearch={onSearch}
                  placeholder="Выберите страну"
                  options={[
                    {
                      value: 'uzbekistan',
                      label: 'Узбекистан',
                    },
                    {
                      value: 'russia',
                      label: 'Россия',
                    },
                  ]}
                />

                <input
                  className="bg-customBg p-4 outline-none rounded-2xl basis-2/4"
                  type="text"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                  required
                  placeholder="Номер паспорта"
                />
              </div>

              <div>
                <div className="flex gap-4 date-picker mb-4">
                  <input
                    type="text"
                    className="bg-customBg p-4 outline-none rounded-2xl max-w-20"
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    required
                    placeholder="ДД"
                    maxLength="2"
                  />

                  <Select
                    className="bg-customBg basis-2/4 h-14"
                    showSearch
                    onChange={onChangeMonth}
                    placeholder="Выберите месяц"
                    options={[
                      {
                        value: '01',
                        label: 'январь',
                      },
                      {
                        value: '02',
                        label: 'февраль',
                      },
                      {
                        value: '03',
                        label: 'март',
                      },
                      {
                        value: '04',
                        label: 'апрель',
                      },
                      {
                        value: '05',
                        label: 'май',
                      },
                      {
                        value: '06',
                        label: 'июнь',
                      },
                      {
                        value: '07',
                        label: 'июль',
                      },
                      {
                        value: '08',
                        label: 'август',
                      },
                      {
                        value: '09',
                        label: 'сентябрь',
                      },
                      {
                        value: '10',
                        label: 'октябрь',
                      },
                      {
                        value: '11',
                        label: 'ноябрь',
                      },
                      {
                        value: '12',
                        label: 'декабрь',
                      },
                    ]}
                  />
                  <input
                    type="text"
                    className="bg-customBg p-4 outline-none rounded-2xl max-w-[150px]"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    required
                    placeholder="ГГГГ"
                    maxLength="4"
                  />
                </div>
              </div>

              <div>
                <label className="text-mainGrey">
                  <input
                    className="color-[#4DD282]"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                  />{' '}
                  Я соглашаюсь с тем, что Booking.com будет хранить мои
                  паспортные данные в соответствии с{' '}
                  <a className="text-mainBlue">
                    {' '}
                    Положением о конфиденциальности.
                  </a>
                </label>
              </div>
            </form>
          </div>
        )}
      </div>

      {!isInput && (
        <button onClick={() => setIsInput(true)} className="hover:scale-110">
          <span className="flex font-onest font-medium gap-2 items-center text-mainBlue text-sm">
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
            </svg>{' '}
            Изменить
          </span>
        </button>
      )}

      {isInput && (
        <button
          onClick={handleInput}
          className={`ml-6 hover:scale-110 ${
            !formData ? 'text-mainGrey  cursor-not-allowed' : 'text-mainGreen '
          }`}
          disabled={!formData} // Disable the button if either field is empty
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
            </svg>{' '}
            Сохранить
          </span>
        </button>
      )}
    </div>
  );
};

export default PassportDataForm;
