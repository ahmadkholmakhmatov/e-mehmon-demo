import { useContext, useRef } from 'react';
import { AuthContext } from '../../utils/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CurrencyDropDown from '../../components/currency-dropdown/CurrencyDropdown';
import LanguageDropdown from '../../components/language-dropdown/LanguageDropdown';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import Footer from '../../components/footer/Footer';
import Layout from '../../components/layout/Layout';
import AccountManagement from '../../components/account-management/AccountManagement';

const Profile = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navRef = useRef();

  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const handleLogin = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const { logout, userData } = useContext(AuthContext);
  const handleClick = () => {
    logout();
    navigate('/');
  };
  console.log(userData);
  return (
    <div className="bg-[#fafafa] ">
      <div className="bg-white">
        <nav className="lg:flex lg:justify-between lg:items-center 2xl:w-[1600px] lg:px-[60px] lg:py-[25px] xl:text-sm lg:text-xs xl:px-[120px] xl:py-[21px] esm:hidden font-medium  mx-auto ">
          <Link to="/">
            <img
              className="lg:w-40  xl:w-[184px]"
              src="/images/logoLight.svg"
              alt=""
            />
          </Link>
          <ul className="flex  gap-x-6">
            <a href="#search">
              <li className="xl:text-sm lg:text-xs">Найти жилье</li>
            </a>

            <a href="#search">
              <li className="xl:text-sm lg:text-xs">Куда сходить?</li>
            </a>
            <a href="#place">
              <li className="xl:text-sm lg:text-xs">Туры</li>
            </a>

            <a href="">
              <li className="xl:text-sm lg:text-xs">Транспорт</li>
            </a>
          </ul>
          <div className="login flex items-center gap-6">
            <CurrencyDropDown />
            <LanguageDropdown />
            <button
              className="flex items-center gap-x-2 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded-2xl text-white bg-[#232E40]"
              onClick={handleLogin}
            >
              <LiaUserCircleSolid className="xl:w-6 xl:h-6 lg:w-5 lg:h-5" />
              {isAuthenticated ? 'Профиль' : 'Войти'}
            </button>
          </div>
        </nav>

        <header
          x
          className="esm:flex items-center justify-between py-5 text-[#232E40] sm:px-[20px] esm:px-[10px] lg:hidden"
        >
          <Link to="/">
            <img
              className="sm:w-[142px] esm:w-[120px]"
              src="/images/logoLight.svg"
              alt=""
            />
          </Link>

          <div className="h-div flex sm:gap-4 esm:gap-2">
            <div className="h-div login flex items-center sm:gap-6 esm:gap-2">
              <CurrencyDropDown />
              <LanguageDropdown />
            </div>
            <nav ref={navRef} className="mobile-nav z-20 flex flex-col">
              <ul className="flex flex-col gap-x-6">
                <a href="#search">
                  <li>Найти жилье</li>
                </a>

                <a href="#search">
                  <li>Куда сходить?</li>
                </a>
                <a href="#place">
                  <li>Туры</li>
                </a>
                <a href="#place">
                  <li>Транспорт</li>
                </a>
              </ul>
              <button
                className="flex items-center gap-x-2 px-6 py-4 rounded-2xl bg-[#232E40] text-white"
                onClick={handleLogin}
              >
                <LiaUserCircleSolid className="w-6 h-6" />
                {isAuthenticated ? 'Профиль' : 'Войти'}
              </button>
              <button className="nav-btn close-btn p-0" onClick={showNavbar}>
                <FaTimes className="sm:w-6 sm:h-6 esm:w-5 esm:h-5 text-black" />
              </button>
            </nav>
            <button className="nav-btn close-btn p-0" onClick={showNavbar}>
              <FaBars className="sm:w-6 sm:h-6 esm:w-5 esm:h-5 text-black" />
            </button>
          </div>
        </header>
      </div>

      <Layout>
        <AccountManagement />
      </Layout>

      <button onClick={handleClick}>logout</button>
      <Footer />
    </div>
  );
};

export default Profile;
