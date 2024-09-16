import { useContext, useState } from 'react';
import { AuthContext } from '../../utils/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { HiOutlineMail } from 'react-icons/hi';
import './login.css';
import SignUp from '../../components/sign-up/SignUp';
import { MdLockOutline } from 'react-icons/md';
import { LuEye } from 'react-icons/lu';
import { TbEyeClosed } from 'react-icons/tb';
import { toast } from 'react-toastify';

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [isLogIn, setIsLogin] = useState(true);
  const [isPasswordField, setIsPasswordField] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const accountLoginMutation = useMutation({ mutationFn: login });

  const handleEmail = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFormEmail = (e) => {
    e.preventDefault();
    setIsPasswordField(true);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      console.log(formData.password);
      accountLoginMutation.mutate(
        { username: formData.email, password: formData.password },
        {
          onSuccess: (data) => {
            const { access, user } = data;
            toast.success('Login successful! Redirecting...');

            if (user) {
              setIsPasswordField(true); // Indicate that the password field can be hidden if necessary
            }

            setIsAuthenticated(true);

            setTimeout(() => {
              if (access) {
                navigate('/'); // Redirect to the homepage after a short delay
              }
            }, 1000);
          },
          onError: (error) => {
            console.error(
              'Error during login:',
              error.response?.data.message || error.message
            );
            toast.error('Login failed. Please check your credentials.');
          },
        }
      );
    } else {
      toast.error('Please enter both email and password');
    }
  };

  return (
    <div className="flex bg-[#F8F8FA]">
      <div className="basis-[35%] h-screen bg-[url('/images/heroBackground.png')] bg-cover flex justify-center items-start p-[45px]">
        <Link to={'/'}>
          <img className="w-[180px]" src="/images/logoDark.svg" alt="" />
        </Link>
      </div>
      {isLogIn &&
        (!isPasswordField ? (
          <div className="basis-[65%] flex flex-col justify-center items-center">
            <div className="text-center w-[46%] mb-8">
              <h1 className="font-bold text-[32px] text-[#232E40] mb-4">
                Вход в аккаунт
              </h1>
              <p className="text-[18px] text-[#777E90]">
                Войдите в систему, если у вас есть здесь аккаунт, и
                наслаждайтесь своим путешествием
              </p>
            </div>
            <form
              onSubmit={handleFormEmail}
              className="w-[46%] mb-6"
              action="sumbit"
            >
              <Input
                className="p-4 text-base text-[#777E90] border-none rounded-2xl mb-4"
                placeholder="Введите адрес почты"
                name="email"
                value={formData.email}
                onChange={handleEmail}
                prefix={
                  <HiOutlineMail className="w-6 h-6 text-[#B7BFD5] mr-[14px]" />
                }
              />
              <button
                disabled={!formData.email}
                type="sumbit"
                className="block w-full bg-[#3276FF] p-4 rounded-2xl text-white text-base active:opacity-20 active:transition-opacity active:duration-200"
              >
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
        ) : (
          <div className="basis-[65%] flex flex-col justify-center items-center">
            <div className="text-center w-[46%] mb-8">
              <h1 className="font-bold text-[32px] text-[#232E40] mb-4">
                Вход в аккаунт
              </h1>
              <p className="text-[18px] text-[#777E90]">
                Введите пароль от аккаунта {formData.email}, чтобы войти в
                систему
              </p>
            </div>
            <form
              className="w-[46%] text-sm text-[#777E90] mb-6"
              onSubmit={handleLogin}
            >
              <div className="flex items-center mb-4 ">
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
              <button
                disabled={!formData.password}
                type="submit"
                className="block w-full bg-[#3276FF] p-4 rounded-2xl text-white text-base active:opacity-20 active:transition-opacity active:duration-200"
              >
                Продолжить
              </button>
            </form>
          </div>
        ))}
      {!isLogIn && <SignUp setIsLogin={() => setIsLogin(!isLogIn)} />}
    </div>
  );
};

export default Login;
