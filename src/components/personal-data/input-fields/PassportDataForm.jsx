import { useState, useRef } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import { LuPencilLine } from 'react-icons/lu';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { Select } from 'antd';
import './passportDataForm.css';

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
      console.log(response);
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
    <div className="flex mb-6 pb-6 border-b border-[#F8F8FA] justify-between">
      <div className="flex">
        <div className="font-medium w-[180px] mr-6">Паспортные данные</div>
        {!isInput ? (
          <div>
            {!user.passport_sn ? (
              <span className="text-[#777E90]">Не указано</span>
            ) : (
              user.passport_sn
            )}
          </div>
        ) : (
          <div>
            <div className="mb-4 text-[#777E90] text-sm">
              Сохраните ваши паспортные данные для использования в следующий раз
              при бронировании проживания, перелета или варианта досуга.
            </div>
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="flex gap-4 mb-4">
                <input
                  className="bg-[#F8F8FA] p-4 outline-none rounded-2xl w-full"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="Имя"
                />

                <input
                  className="bg-[#F8F8FA] p-4 outline-none rounded-2xl w-full"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Фамилия"
                />
              </div>

              <div className="flex gap-4 passport-given-selector mb-4">
                <Select
                  className="bg-[#F8F8FA] basis-2/4 h-14"
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
                  className="bg-[#F8F8FA] p-4 outline-none rounded-2xl basis-2/4"
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
                    className="bg-[#F8F8FA] p-4 outline-none rounded-2xl max-w-20"
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    required
                    placeholder="ДД"
                    maxLength="2"
                  />

                  <Select
                    className="bg-[#F8F8FA] basis-2/4 h-14"
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
                    className="bg-[#F8F8FA] p-4 outline-none rounded-2xl max-w-[150px]"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    required
                    placeholder="ГГГГ"
                    maxLength="4"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#777E90]">
                  <input
                    className="color-[#4DD282]"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                  />{' '}
                  Я соглашаюсь с тем, что Booking.com будет хранить мои
                  паспортные данные в соответствии с{' '}
                  <a className="text-[#3276FF]">
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
          <span className="flex gap-2 items-center text-[#3276FF] text-sm">
            <LuPencilLine /> Изменить
          </span>
        </button>
      )}

      {isInput && (
        <button
          onClick={handleInput}
          className={`ml-6 hover:scale-110 ${
            !formData
              ? 'text-[#777E90] text-sm cursor-not-allowed'
              : 'text-[#4DD282] '
          }`}
          disabled={!formData} // Disable the button if either field is empty
        >
          <span className="flex gap-2 items-center">
            <FaRegCircleCheck /> Сохранить
          </span>
        </button>
      )}
    </div>
  );
};

export default PassportDataForm;
