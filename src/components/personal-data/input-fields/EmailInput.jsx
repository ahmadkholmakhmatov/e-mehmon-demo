import { useState } from 'react';
import axiosInstance from '../../../utils/axiosInstance';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { Input, Statistic } from 'antd';
import styles from './emailInput.module.css';

const EmailInput = ({ user }) => {
  //input field visible
  const [isInput, setIsInput] = useState(null);
  const [isVerified, setIsVerified] = useState(true);
  const [oldEmail] = useState(user.email);
  const [code, setCode] = useState(null);
  const [isCodeReset, setIsCodeReset] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [formPassword, setFormPassword] = useState({});
  const token = localStorage.getItem('token');

  const { Countdown } = Statistic;

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`/account/verify-code/`, {
        email: newEmail,
        old_email: oldEmail,
        code: code,
      });
      setIsInput(null);
      setIsPassword(response.data.new_password);
      console.log(response.data.new_password);
      console.log(response);
    } catch (error) {
      console.error('Error', error);
      setIsInput(null);
      setIsVerified(false);
      throw error;
    }
  };

  const handleVerification = async () => {
    console.log(newEmail);
    try {
      const response = await axiosInstance.post(`/account/register/`, {
        email: newEmail,
      });
      setIsInput(null);
      setIsModalOpen(true);
      console.log(response);
    } catch (error) {
      toast.error(error.response.data.email[0]);
      console.error('Error', error);
      setIsInput(null);
      setIsVerified(false);
      throw error;
    }
  };

  const handleChangeEmail = async (e) => {
    e.preventDefault();
    if (formPassword.password === formPassword.confirmPassword) {
      try {
        const response = await axiosInstance.post(
          `/account/users/update_email/`,
          {
            email: newEmail,
            password: formPassword.password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setIsInput(null);
        setIsVerified(true);
        setIsModalOpen(false);
        console.log(response);
      } catch (error) {
        console.error('Error', error);
        setIsInput(null);
        setIsVerified(true);
        throw error;
      }
    }
  };

  const handleInput = () => {
    if (oldEmail === newEmail) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
    setIsInput(null);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const onChange = (text) => {
    console.log('OTP input:', text);
    setCode(Number(text));
  };
  const sharedProps = {
    onChange,
  };

  const onTimeChange = (val) => {
    if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
      setIsCodeReset(true);
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormPassword((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex mb-6 pb-6 border-b border-customBg justify-between">
        <div className="flex font-onest text-mainDark">
          <div className="font-medium w-[180px] mr-6">Email</div>
          {!isInput ? (
            <div>
              <span className={`${!isVerified && 'text-[#FF4E4E]'}`}>
                {newEmail ? newEmail : user.email}
              </span>
            </div>
          ) : (
            <div>
              <input
                type="email"
                placeholder="Email"
                className="mr-6 bg-customBg p-4 outline-none rounded-2xl w-[400px]"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
          )}
        </div>

        {!isInput && isVerified && (
          <button onClick={() => setIsInput(true)} className="hover:scale-110">
            <span className="flex font-onest font-medium gap-2 items-center text-mainBlue text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_8608_3529)">
                  <path
                    d="M9.38508 2.59095C9.88187 2.05271 10.1303 1.78358 10.3942 1.6266C11.0311 1.24782 11.8153 1.23605 12.4628 1.59553C12.7312 1.74452 12.9872 2.00606 13.4993 2.52916C14.0114 3.05225 14.2674 3.3138 14.4132 3.58794C14.7651 4.2494 14.7536 5.05051 14.3828 5.70112C14.2292 5.97076 13.9657 6.2245 13.4388 6.73199L7.16969 12.7702C6.17119 13.7319 5.67194 14.2128 5.04798 14.4565C4.42402 14.7002 3.73807 14.6822 2.36618 14.6464L2.17952 14.6415C1.76187 14.6306 1.55305 14.6251 1.43166 14.4873C1.31027 14.3496 1.32685 14.1369 1.35999 13.7114L1.37799 13.4804C1.47128 12.283 1.51792 11.6843 1.75174 11.1461C1.98556 10.608 2.38889 10.171 3.19556 9.29699L9.38508 2.59095Z"
                    stroke="#3276FF"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.67188 2.66797L13.3385 7.33464"
                    stroke="#3276FF"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33594 14.668L14.6693 14.668"
                    stroke="#3276FF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8608_3529">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>{' '}
              Изменить
            </span>
          </button>
        )}

        {!isInput && !isVerified && (
          <div className="flex gap-6">
            <button onClick={handleVerification} className=" text-mainBlue">
              <span className="flex font-medium items-center gap-2 text-sm">
                Проверить
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.90625 5.05078L10.6753 5.05078L10.6753 9.81982"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 11.7285L10.6114 5.11707"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <span className="bg-[#FF4E4E14] text-[#FF4E4E] rounded-[32px] py-1 px-2">
              <span className="flex items-center gap-2 text-sm font-medium">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4947_70856)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.835938 8.00065C0.835938 4.04261 4.04456 0.833984 8.0026 0.833984C11.9606 0.833984 15.1693 4.04261 15.1693 8.00065C15.1693 11.9587 11.9606 15.1673 8.0026 15.1673C4.04456 15.1673 0.835938 11.9587 0.835938 8.00065ZM7.33594 10.6673C7.33594 10.2991 7.63308 10.0007 7.99962 10.0007H8.00558C8.37213 10.0007 8.66927 10.2991 8.66927 10.6673C8.66927 11.0355 8.37213 11.334 8.00558 11.334H7.99962C7.63308 11.334 7.33594 11.0355 7.33594 10.6673ZM7.33594 8.00065C7.33594 8.36884 7.63441 8.66732 8.0026 8.66732C8.37079 8.66732 8.66927 8.36884 8.66927 8.00065V5.33398C8.66927 4.96579 8.37079 4.66732 8.0026 4.66732C7.63441 4.66732 7.33594 4.96579 7.33594 5.33398V8.00065Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4947_70856">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Не проверено
              </span>
            </span>
            <button
              onClick={() => setIsInput(true)}
              className="hover:scale-110"
            >
              <span className="flex font-onest font-medium gap-2 items-center text-mainBlue text-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8608_3529)">
                    <path
                      d="M9.38508 2.59095C9.88187 2.05271 10.1303 1.78358 10.3942 1.6266C11.0311 1.24782 11.8153 1.23605 12.4628 1.59553C12.7312 1.74452 12.9872 2.00606 13.4993 2.52916C14.0114 3.05225 14.2674 3.3138 14.4132 3.58794C14.7651 4.2494 14.7536 5.05051 14.3828 5.70112C14.2292 5.97076 13.9657 6.2245 13.4388 6.73199L7.16969 12.7702C6.17119 13.7319 5.67194 14.2128 5.04798 14.4565C4.42402 14.7002 3.73807 14.6822 2.36618 14.6464L2.17952 14.6415C1.76187 14.6306 1.55305 14.6251 1.43166 14.4873C1.31027 14.3496 1.32685 14.1369 1.35999 13.7114L1.37799 13.4804C1.47128 12.283 1.51792 11.6843 1.75174 11.1461C1.98556 10.608 2.38889 10.171 3.19556 9.29699L9.38508 2.59095Z"
                      stroke="#3276FF"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.67188 2.66797L13.3385 7.33464"
                      stroke="#3276FF"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.33594 14.668L14.6693 14.668"
                      stroke="#3276FF"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8608_3529">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Изменить
              </span>
            </button>

            <Modal
              isOpen={isModalOpen}
              onRequestClose={handleClose}
              contentLabel="Code"
              className="relative  mx-auto my-auto w-full max-w-fit p-10 bg-white rounded-[40px] outline-none"
              overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
              {!isPassword ? (
                <>
                  <div
                    className={`${styles.modalBody} flex flex-col items-center`}
                  >
                    <div className="p-4 bg-customBg rounded-3xl mb-8">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 17L19.884 20.4789C23.3144 22.507 24.6856 22.507 28.116 20.4789L34 17"
                          stroke="#777E90"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.03153 26.9512C4.16228 33.0823 4.22766 36.1478 6.48991 38.4187C8.75217 40.6896 11.9007 40.7687 18.1977 40.9269C22.0786 41.0244 25.9214 41.0244 29.8024 40.9269C36.0993 40.7687 39.2478 40.6896 41.5101 38.4187C43.7724 36.1478 43.8377 33.0823 43.9685 26.9512C44.0105 24.9799 44.0105 23.0202 43.9685 21.0488C43.8377 14.9177 43.7724 11.8522 41.5101 9.58132C39.2478 7.31046 36.0994 7.23135 29.8024 7.07314C25.9214 6.97563 22.0786 6.97562 18.1976 7.07312C11.9007 7.23133 8.75217 7.31043 6.48991 9.58129C4.22765 11.8522 4.16227 14.9177 4.03153 21.0488C3.98949 23.0201 3.98949 24.9799 4.03153 26.9512Z"
                          stroke="#777E90"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="text-center mb-4">
                      <p className="text-mainDark font-fdeck text-2xl font-bold mb-4">
                        Подтверждение почты
                      </p>
                      <p className="w-[486px] font-onest text-mainGrey">
                        Код подтверждения был отправлен на электронный адрес
                        {newEmail}
                      </p>
                    </div>
                    <Input.OTP
                      className={styles.antOtpInput}
                      length={4}
                      {...sharedProps}
                    />
                    {!isCodeReset ? (
                      <div className="flex font-onest justify-center items-center my-[10px] text-sm text-mainGrey font-medium">
                        <svg
                          className="mr-[3px]"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.6085 0.666016L11.0072 1.4112C11.2767 1.91499 11.4114 2.16689 11.3223 2.27477C11.2332 2.38265 10.9397 2.29552 10.3528 2.12127C9.76601 1.94705 9.14298 1.85332 8.4974 1.85332C4.99959 1.85332 2.16406 4.60499 2.16406 7.99935C2.16406 9.11881 2.47248 10.1684 3.01135 11.0724M6.38628 15.3327L5.98764 14.5875C5.71812 14.0837 5.58336 13.8318 5.67247 13.7239C5.76157 13.616 6.05506 13.7032 6.64199 13.8774C7.22879 14.0516 7.85181 14.1454 8.4974 14.1454C11.9952 14.1454 14.8307 11.3937 14.8307 7.99935C14.8307 6.87989 14.5223 5.83033 13.9834 4.92633"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Запросить код еще раз через
                        <Countdown
                          value={Date.now() + 2 * 60 * 1000}
                          format="mm:ss"
                          onChange={onTimeChange}
                        />
                      </div>
                    ) : (
                      <div className="my-[23px] flex justify-center">
                        <button
                          className="text-mainBlue font-onest font-medium text-sm"
                          onClick={handleVerification}
                        >
                          New Code
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex w-full gap-8 font-onest font-medium">
                    <button
                      onClick={handleClose}
                      className="py-4 w-full bg-customBg text-mainDark rounded-2xl hover:bg-gray-200"
                    >
                      Отмена
                    </button>

                    <button
                      onClick={handleVerifyCode}
                      disabled={!code}
                      className={`${code && ` bg-mainBlue  hover:bg-blue-600`} ${!code && ` bg-mainBlue/20`}  text-white rounded-2xl py-4 w-full `}
                    >
                      Подтвердить
                    </button>
                  </div>
                </>
              ) : (
                <div className={styles.modalBody + 'font-onest'}>
                  <div className="text-center mb-8 w-fit">
                    <h1 className="font-fdeck font-bold text-[32px] text-mainDark mb-4">
                      Создание пароля
                    </h1>
                    <p className="text-[18px] font-onest text-mainGrey w-[450px] mx-auto">
                      Придумайте пароль от {newEmail}, чтобы создать новый
                      аккаунт
                    </p>
                  </div>
                  <form
                    className="text-sm text-mainGrey mb-6"
                    onSubmit={handleChangeEmail}
                  >
                    <label
                      className="text-sm text-mainGrey block mb-3"
                      htmlFor=""
                    >
                      Придумайте пароль
                    </label>
                    <div className="flex items-center mb-4">
                      <div className="p-[17.5px] self-stretch bg-customBg rounded-l-2xl">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 16.5V14.5"
                            stroke="#B7BFD5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
                            stroke="#B7BFD5"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
                            stroke="#B7BFD5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Input.Password
                        className="py-[17.5px] pr-4 pl-0 border-none bg-customBg hover:bg-customBg text-base shadow-none text-mainDark rounded-l-none rounded-r-2xl"
                        placeholder="input password"
                        name="password"
                        value={formPassword.password}
                        onChange={(e) => handlePasswordChange(e)}
                        iconRender={(visible) =>
                          visible ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M15 13.5L16.5 16"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M20 11L22 13"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M2 13L4 11"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 13.5L7.5 16"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )
                        }
                      />
                    </div>

                    <label className="block mb-3" htmlFor="">
                      Подтвердите пароль
                    </label>
                    <div className="flex items-center mb-4">
                      <div className="p-[17.5px] self-stretch bg-customBg rounded-l-2xl">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 16.5V14.5"
                            stroke="#B7BFD5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
                            stroke="#B7BFD5"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
                            stroke="#B7BFD5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Input.Password
                        className="py-[17.5px] pr-4 pl-0 border-none bg-customBg hover:bg-customBg text-base shadow-none text-mainDark rounded-l-none rounded-r-2xl"
                        placeholder="input password"
                        name="confirmPassword"
                        value={formPassword.confirmPassword}
                        onChange={(e) => handlePasswordChange(e)}
                        iconRender={(visible) =>
                          visible ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M15 13.5L16.5 16"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M20 11L22 13"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M2 13L4 11"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 13.5L7.5 16"
                                stroke="#B7BFD5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )
                        }
                      />
                    </div>

                    <button
                      disabled={
                        !formPassword.password && !formPassword.confirmPassword
                      }
                      type="submit"
                      className={`${formPassword.password === formPassword.confirmPassword && formPassword.password && formPassword.confirmPassword ? ` bg-mainBlue  hover:bg-blue-600` : ` bg-mainBlue/20`}  text-white rounded-2xl py-4 w-full `}
                    >
                      Продолжить
                    </button>
                  </form>
                </div>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="absolute top-6 right-6 p-[10px] border border-[#B7BFD5]/20 rounded-2xl"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8307 4.66602L4.16406 16.3327M4.16406 4.66602L15.8307 16.3327"
                    stroke="#777E90"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Modal>
          </div>
        )}

        {isInput && (
          <button
            onClick={handleInput}
            className={`hover:scale-110 ${
              !newEmail
                ? 'text-mainGrey  cursor-not-allowed'
                : 'text-mainGreen '
            }`}
            disabled={!newEmail} // Disable the button if either field is empty
          >
            <span className="flex font-onest font-medium gap-2 text-sm items-center ">
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

export default EmailInput;
