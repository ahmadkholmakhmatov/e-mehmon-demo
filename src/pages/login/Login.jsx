import { useContext, useState } from 'react';
import { AuthContext } from '../../utils/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { HiOutlineMail } from 'react-icons/hi';
import './login.css';
import SignUp from '../../components/sign-up/SignUp';

const Login = () => {
  const [isLogIn, setIsLogin] = useState(true);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const accountLoginMutation = useMutation({ mutationFn: login });

  const handleLogin = async (e) => {
    e.preventDefault();

    accountLoginMutation.mutate(
      { username: 'ahmadxolmaxmatov@gmail.com', password: '12345' },
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
      {!isLogIn && <SignUp setIsLogin={() => setIsLogin(!isLogIn)} />}
    </div>
  );
};

export default Login;
