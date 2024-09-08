import { useState } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      passport_given_by: passportGiven,
      passport_sn: passportNumber,
    };
    console.log(formData);
    // Call an API or handle form submission here
  };

  const token = localStorage.getItem('token');

  const handleInput = async () => {
    try {
      const response = await axiosInstance.put(
        `/account/users/update_profile/`,
        { username: formData },
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
            <form onSubmit={handleSubmit}>
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
                  placeholder="Select a person"
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
                    placeholder="Select a person"
                    options={[
                      {
                        value: '1',
                        label: 'januar',
                      },
                      {
                        value: '2',
                        label: 'february',
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
                <label>
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                  />
                  Я соглашаюсь с условиями конфиденциальности
                </label>
              </div>

              <button
                type="submit"
                disabled={
                  !termsAccepted || !firstName || !lastName || !passportNumber
                }
              >
                Сохранить
              </button>
            </form>
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
            !formData ? 'text-[#777E90] cursor-not-allowed' : 'text-[#4DD282] '
          }`}
          disabled={!formData} // Disable the button if either field is empty
        >
          <span className="flex gap-2 items-center ">
            <FaRegCircleCheck /> Сохранить
          </span>
        </button>
      )}
    </div>
  );
};

export default PassportDataForm;
