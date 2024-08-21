import { useContext, useState } from 'react';
import { AuthContext } from '../../utils/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { HiOutlineMail } from 'react-icons/hi';
import axiosInstance from '../../utils/axiosInstance';
import { MdLockOutline } from 'react-icons/md';
import { GoX } from 'react-icons/go';
import './login.css';

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

const Login = () => {
  const [isLogIn, setIsLogin] = useState(true);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeCame, setIsCodeCame] = useState(false);
  //const [isPassword, setIsPassword] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    code: null,
  });

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

  const accountCodeSentMutation = useMutation({ mutationFn: accountCodeSent });

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

          // You can do something with the response here
        },
        onError: (error) => {
          console.error('Error during registration', error.message);
        },
      }
    ); // Reset the input field after submission
  };

  const accountLoginMutation = useMutation({ mutationFn: login });

  const handleLogin = async (e) => {
    e.preventDefault();

    accountLoginMutation.mutate(
      { username: 'e_mehmon', password: 'psw12345' },
      {
        onSuccess: (data) => {
          console.log('Response from server:', data);
          const token = localStorage.getItem('token');

          setTimeout(() => {
            if (token !== null) {
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
  };

  return (
    <div className="flex bg-[#F8F8FA]">
      <div className="basis-[35%] h-screen bg-[url('/images/heroBackground.png')] flex justify-center items-start p-[45px]">
        <img className="w-[180px]" src="/images/logoDark.svg" alt="" />
      </div>
      {isLogIn && (
        <div className="basis-[65%] flex flex-col justify-center items-center">
          <div className="text-center w-[46%] mb-8">
            <h1 className="font-bold text-[32px] text-[#232E40] mb-4">
              Вход в аккаунт
            </h1>
            <p className="text-[18px] text-[#777E90]">
              Войдите в систему, если у вас есть здесь аккаунт, и наслаждайтесь
              своим путешествием
            </p>
          </div>
          <form
            onSubmit={(e) => handleLogin(e)}
            className="w-[46%] mb-6"
            action="sumbit"
          >
            <Input
              className="p-4 text-base text-[#777E90] border-none rounded-2xl mb-4"
              placeholder="Введите адрес почты"
              prefix={
                <HiOutlineMail className="w-6 h-6 text-[#B7BFD5] mr-[14px]" />
              }
            />
            <button className="block w-full bg-[#3276FF] p-4 rounded-2xl text-white text-base active:opacity-20 active:transition-opacity active:duration-200">
              Продолжить
            </button>
          </form>
          <div className="text-base p-4 font-medium text-[#777E90]">
            Нет аккаунта?{' '}
            <span
              className="text-[#3276FF]"
              onClick={() => {
                setIsLogin(!isLogIn);
              }}
            >
              Зарегистрироваться
            </span>
          </div>
        </div>
      )}
      {!isLogIn &&
        (!isCodeCame ? (
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
                className="block w-full bg-[#3276FF] p-4 rounded-2xl text-white text-base active:opacity-20 active:transition-opacity active:duration-200"
              >
                Продолжить
              </button>
            </form>
            <div className="text-base p-4 font-medium text-[#777E90]">
              Уже зарегистрированы?{' '}
              <span
                className="text-[#3276FF]"
                onClick={() => {
                  setIsLogin(!isLogIn);
                }}
              >
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
        ) : (
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
              <Input.OTP
                className="mb-6 border-none"
                length={4}
                {...sharedProps}
              />
              <button
                type="submit"
                className="block w-full bg-[#3276FF] p-4 rounded-2xl text-white text-base active:opacity-20 active:transition-opacity active:duration-200"
              >
                Продолжить
              </button>
            </form>
            <div className="text-base p-4 font-medium text-[#777E90]">
              Уже зарегистрированы?{' '}
              <span
                className="text-[#3276FF]"
                onClick={() => {
                  setIsLogin(!isLogIn);
                }}
              >
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
        ))}
    </div>
  );
};

export default Login;
