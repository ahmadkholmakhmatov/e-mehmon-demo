import { useContext, useRef } from 'react';
import { AuthContext } from '../../utils/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import CurrencyDropDown from '../../components/currency-dropdown/CurrencyDropdown';
import LanguageDropdown from '../../components/language-dropdown/LanguageDropdown';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import Footer from '../../components/footer/Footer';
import Layout from '../../components/layout/Layout';
import AccountManagement from '../../components/account-management/AccountManagement';
import { useTranslation } from 'react-i18next';
import NotificationDropdown from '../../components/notification-dropdown/NotificationDropdown';
import AccountDropdown from '../../components/account-dropdown/AccountDropdown';

const Profile = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { t } = useTranslation();

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
          <div className="login flex items-center gap-6 text-black">
            <CurrencyDropDown />
            <LanguageDropdown />
            <NotificationDropdown />
            {isAuthenticated && <AccountDropdown />}

            {!isAuthenticated && (
              <button
                className="flex items-center gap-x-2 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded-2xl bg-[#232E40]"
                onClick={handleLogin}
              >
                <svg
                  className="xl:w-6 xl:h-6 lg:w-5 lg:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                {t('header.sixWord')}
              </button>
            )}
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
                <svg
                  className="xl:w-6 xl:h-6 lg:w-5 lg:h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
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

      <Footer />
    </div>
  );
};

export default Profile;
