import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Input, Statistic } from 'antd';
import { HiOutlineMail } from 'react-icons/hi';
import axiosInstance from '../../utils/axiosInstance';
import { MdLockOutline } from 'react-icons/md';
import { LuRefreshCw } from 'react-icons/lu';
import { LuEye } from 'react-icons/lu';
import { TbEyeClosed } from 'react-icons/tb';
import { GoX } from 'react-icons/go';
import './signUp.css';

const accountRegister = async (email) => {
  try {
    const response = await axiosInstance.post('/account/register/', email);
    return response;
  } catch (error) {
    console.error('Login failed', error);
  }
};

const accountCodeSent = async (data) => {
  try {
    const response = await axiosInstance.post('/account/verify-code/', data);
    return response;
  } catch (error) {
    console.error('Login failed', error);
  }
};

const accountConfirmRegister = async (data) => {
  try {
    const response = await axiosInstance.post(
      '/account/confirm-register/',
      data
    );
    return response;
  } catch (error) {
    console.error('Login failed', error);
  }
};

const SignUp = ({ setIsLogin }) => {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeCame, setIsCodeCame] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    confirmPassword: null,
    code: null,
  });

  const { Countdown } = Statistic;

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setFormData({ ...formData, email: e.target.value });
  };

  const accountRegisterMutation = useMutation({
    mutationFn: accountRegister,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    accountRegisterMutation.mutate(
      { email },
      {
        onSuccess: (data) => {
          console.log('Response from server:', data);
          setIsCodeSent(true);
          setIsCodeCame(true);

          // You can do something with the response here
        },
        onError: (error) => {
          console.error('Error during registration', error.message);
        },
      }
    ); // Reset the input field after submission

    setEmail('');
  };

  const accountCodeSentMutation = useMutation({
    mutationFn: accountCodeSent,
  });

  const onChange = (text) => {
    console.log('OTP input:', text);
    setFormData((prevFormData) => ({
      ...prevFormData,
      code: Number(text),
    }));
  };
  const sharedProps = {
    onChange,
  };

  const handleSentCode = async (e) => {
    e.preventDefault();
    {
      console.log({ email: formData.email, code: formData.code });
    }
    accountCodeSentMutation.mutate(
      { email: formData.email, code: formData.code },

      {
        onSuccess: (data) => {
          console.log('Response from server:', data);
          setIsPassword(true);
          // You can do something with the response here
        },
        onError: (error) => {
          console.error('Error during registration', error.message);
        },
      }
    ); // Reset the input field after submission
  };

  const accountConfirmRegisterMutation = useMutation({
    mutationFn: accountConfirmRegister,
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConfirmRegister = async (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      accountConfirmRegisterMutation.mutate(
        { email: formData.email, password: formData.password },
        {
          onSuccess: (data) => {
            const { access } = data.data;
            console.log(data);
            // const token = localStorage.getItem('token');
            localStorage.setItem('token', access);

            setTimeout(() => {
              if (access === localStorage.getItem('token')) {
                navigate('/');
              }
            }, 2000);
            // You can do something with the response here
          },
          onError: (error) => {
            console.error('Error during registration', error.message);
          },
        }
      );
    }
  };

  const onTimeChange = (val) => {
    if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  };

  return (
    <>
      {!isCodeCame && (
        <div className="basis-[65%] flex flex-col justify-center items-center">
          <div className="text-center w-[46%] mb-8">
            <h1 className="font-bold text-[32px] text-[#232E40] mb-4">
              Создание аккаунта
            </h1>
            <p className="text-[18px] text-[#777E90]">
              Введите почтовый адрес для создания аккаунта
            </p>
          </div>
          <form className="w-[46%] mb-6" onSubmit={handleSubmit}>
            <Input
              className="p-4 text-base text-[#777E90] border-none rounded-2xl mb-4"
              type="email"
              placeholder="Введите адрес почты"
              prefix={
                <HiOutlineMail className="w-6 h-6 text-[#B7BFD5] mr-[14px]" />
              }
              value={email}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              disabled={!email}
              className="block w-full bg-[#3276FF] p-4 rounded-2xl text-white text-base active:opacity-20 active:transition-opacity active:duration-200"
            >
              Продолжить
            </button>
          </form>
          <div className="text-base p-4 font-medium text-[#777E90]">
            Уже зарегистрированы?{' '}
            <span className="text-[#3276FF]" onClick={setIsLogin}>
              Войти в аккаунт
            </span>
          </div>
          <div
            onClick={() => setIsCodeSent(false)}
            className={`fixed z-10 inset-0 flex justify-center items-center transition-colors ${isCodeSent ? 'visible bg-[#232E40]/20 ' : 'invisible'}`}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`relative flex flex-col items-center w-[566px] p-10 bg-white rounded-[40px] shadow transition-all ${isCodeSent ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
            >
              <div className="bg-[#F8F8FA] rounded-3xl p-4 mb-8">
                <MdLockOutline className="w-12 h-12 text-[#777E90]" />
              </div>
              <div className="mb-8 text-center">
                <p className="text-[#232E40] font-bold text-2xl mb-2">
                  Код отправлен!
                </p>
                <p className="text-base text-[#777E90]">
                  Мы отправили код верификации для подтверждения электронный
                  почты {formData.email}
                </p>
              </div>

              <button
                onClick={() => setIsCodeSent(false)}
                className="bg-[#3276FF] w-full text-white p-4 rounded-2xl"
              >
                Продолжить
              </button>

              <button
                className="absolute top-6 right-6 border p-[6px] border-[#B7BFD5] border-opacity-20 rounded-2xl"
                onClick={() => setIsCodeSent(false)}
              >
                <GoX className="w-6 h-6 text-[#777E90]" />
              </button>
            </div>
          </div>
        </div>
      )}
      {isCodeCame && !isPassword && (
        <div className="basis-[65%] flex flex-col justify-center items-center">
          <div className="text-center w-[46%] mb-8">
            <h1 className="font-bold text-[32px] text-[#232E40] mb-4">
              Подтверждение почты
            </h1>
            <p className="text-[18px] text-[#777E90]">
              Код подтверждения был отправлен на электронный адрес
              {formData.email}
            </p>
          </div>
          <form className="w-[46%] mb-6" onSubmit={handleSentCode}>
            <Input.OTP className="border-none" length={4} {...sharedProps} />
            <div className="flex justify-center items-center mb-0.5 text-sm text-[#777E90] font-medium">
              <LuRefreshCw className="w-[14px] h-[14px] mr-[3px]" /> Запросить
              код еще раз через
              <Countdown
                value={Date.now() + 2 * 60 * 1000}
                format="mm:ss"
                onChange={onTimeChange}
              />
            </div>
            <button
              disabled={!formData.code}
              type="submit"
              className="block w-full bg-[#3276FF] p-4 rounded-2xl text-white text-base active:opacity-20 active:transition-opacity active:duration-200"
            >
              Продолжить
            </button>
          </form>
        </div>
      )}
      {isCodeCame && isPassword && (
        <div className="basis-[65%] flex flex-col justify-center items-center">
          <div className="text-center w-[46%] mb-8">
            <h1 className="font-bold text-[32px] text-[#232E40] mb-4">
              Создание пароля
            </h1>
            <p className="text-[18px] text-[#777E90]">
              Придумайте пароль от {formData.email}, чтобы создать новый аккаунт
            </p>
          </div>
          <form
            className="w-[46%] text-sm text-[#777E90] mb-6"
            onSubmit={handleConfirmRegister}
          >
            <label className="text-sm text-[#777E90] block mb-3" htmlFor="">
              Придумайте пароль
            </label>
            <div className="flex items-center mb-4">
              <div className="p-[17.5px] self-stretch bg-white rounded-l-2xl">
                <MdLockOutline className="w-6 h-6 text-[#B7BFD5]" />
              </div>
              <Input.Password
                className="py-[17.5px] pr-4 pl-0 border-none text-base shadow-none text-[#232E40] rounded-l-none rounded-r-2xl"
                placeholder="input password"
                name="password"
                value={formData.password}
                onChange={(e) => handlePasswordChange(e)}
                iconRender={(visible) =>
                  visible ? (
                    <LuEye className="w-6 h-6" style={{ color: '#B7BFD5' }} />
                  ) : (
                    <TbEyeClosed
                      className="w-6 h-6"
                      style={{ color: '#B7BFD5' }}
                    />
                  )
                }
              />
            </div>

            <label className="block mb-3" htmlFor="">
              Подтвердите пароль
            </label>
            <div className="flex items-center mb-4">
              <div className="p-[17.5px] self-stretch bg-white rounded-l-2xl">
                <MdLockOutline className="w-6 h-6 text-[#B7BFD5]" />
              </div>
              <Input.Password
                className="py-[17.5px] pr-4 pl-0 border-none text-base shadow-none text-[#232E40] rounded-l-none rounded-r-2xl"
                placeholder="input password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => handlePasswordChange(e)}
                iconRender={(visible) =>
                  visible ? (
                    <LuEye className="w-6 h-6" style={{ color: '#B7BFD5' }} />
                  ) : (
                    <TbEyeClosed
                      className="w-6 h-6"
                      style={{ color: '#B7BFD5' }}
                    />
                  )
                }
              />
            </div>

            <button
              disabled={!formData.password && !formData.confirmPassword}
              type="submit"
              className="block w-full bg-[#3276FF] p-4 rounded-2xl text-white text-base active:opacity-20 active:transition-opacity active:duration-200"
            >
              Продолжить
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUp;
