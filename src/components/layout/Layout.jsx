import { useContext, useEffect, useState } from 'react';
import AccountManagement from '../account-management/AccountManagement';
import ProfileBreadCrumb from '../breadcrumb/ProfileBreadCrumb';
import { AuthContext } from '../../utils/AuthContext';

const Layout = () => {
  const { activeSectionDefault } = useContext(AuthContext);
  const [activeSection, setActiveSection] = useState(activeSectionDefault); // Default section
  const [activeDetail, setActiveDetail] = useState(null); // New state to track active detail
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    setActiveSection(activeSectionDefault);
  }, [activeSectionDefault]);

  const handleBreadcrumbBack = (section, detail) => {
    setActiveSection(section);
    setActiveDetail(detail);
    if (!detail) {
      setShowSidebar(true);
    }
  };

  const renderSection = () => {
    if (activeDetail) {
      return (
        <AccountManagement
          activeDetail={activeDetail}
          setActiveDetail={setActiveDetail}
          setShowSidebar={setShowSidebar}
        />
      );
    }

    switch (activeSection) {
      case 'account':
        return (
          <AccountManagement
            setShowSidebar={setShowSidebar}
            setActiveDetail={setActiveDetail}
          />
        );
      case 'notification':
        return <div className="text-2xl font-bold">notification</div>;
      case 'reservation':
        return <div className="text-2xl font-bold">reservation</div>;
      case 'houses':
        return <div className="text-2xl font-bold">houses</div>;
      case 'review':
        return <div className="text-2xl font-bold">review</div>;
      case 'saved':
        return <div className="text-2xl font-bold">saved</div>;
      // Add more cases for each section
      default:
        return (
          <AccountManagement
            setShowSidebar={setShowSidebar}
            setActiveDetail={setActiveDetail}
          />
        );
    }
  };

  return (
    <>
      <div className="mx-[120px] mt-[30px]">
        <ProfileBreadCrumb
          activeSection={activeSection}
          activeDetail={activeDetail}
          onBack={handleBreadcrumbBack}
        />
      </div>
      <div className="flex  mx-[120px] bg-[#FFFFFF] mt-[30px] mb-6 rounded-3xl">
        {showSidebar && (
          <aside className="p-6 border-r border-customBg text-mainDark font-onest font-medium">
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <button
                    onClick={() => setActiveSection('account')}
                    className={`w-full rounded-2xl ${
                      activeSection === 'account' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <svg
                        className="xl:w-6 xl:h-6 lg:w-5 lg:h-5 text-[#777E90]"
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
                      </svg>{' '}
                      Управление аккаунтом
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('notification')}
                    className={`w-full rounded-2xl ${
                      activeSection === 'notification' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Уведомления
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('reservation')}
                    className={`w-full rounded-2xl ${
                      activeSection === 'reservation' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.57956 8.62505C2.50886 8.03528 2.47351 7.74039 2.52323 7.499C2.6651 6.81015 3.27111 6.25159 4.07871 6.06529C4.36172 6 4.717 6 5.42757 6H18.5724C19.283 6 19.6383 6 19.9213 6.06529C20.7289 6.25159 21.3349 6.81015 21.4768 7.499C21.5265 7.74039 21.4911 8.03528 21.4204 8.62505C21.2584 9.97669 20.4991 10.716 19.0512 11.1423L14.88 12.3703C13.4541 12.7901 12.7411 13 12 13C11.2589 13 10.5459 12.7901 9.11996 12.3703L4.94882 11.1423C3.50094 10.7161 2.7416 9.97669 2.57956 8.62505Z"
                          stroke="#777E90"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M3.46283 10.5L3.26658 12.7757C2.91481 16.855 2.73892 18.8947 3.86734 20.1974C4.99576 21.5 6.93851 21.5 10.824 21.5H13.176C17.0615 21.5 19.0042 21.5 20.1327 20.1974C21.2611 18.8947 21.0852 16.855 20.7334 12.7757L20.5372 10.5"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.5 5.5L15.4227 5.23509C15.0377 3.91505 14.8452 3.25503 14.3869 2.87752C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 2.87752C9.15478 3.25503 8.96228 3.91505 8.57727 5.23509L8.5 5.5"
                          stroke="#777E90"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Бронирования
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('houses')}
                    className={`w-full rounded-2xl ${
                      activeSection === 'houses' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 4V20C3 20.9428 3 21.4142 3.29289 21.7071C3.58579 22 4.05719 22 5 22H19C19.9428 22 20.4142 22 20.7071 21.7071C21 21.4142 21 20.9428 21 20V4"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.5 8V9.5M10.5 11V9.5M13.5 8V9.5M13.5 11V9.5M10.5 9.5H13.5"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 22.0001L14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22.0001"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 4H8C8.6399 2.82727 10.1897 2 12 2C13.8103 2 15.3601 2.82727 16 4H22"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 8H7M6 12H7M6 16H7"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 8H18M17 12H18M17 16H18"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Мои объекты
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('review')}
                    className={`w-full rounded-2xl ${
                      activeSection === 'review' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 13.5H16M8 8.5H12"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      Отзывы
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('saved')}
                    className={`w-full rounded-2xl ${
                      activeSection === 'saved' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                          stroke="#777E90"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      Сохраненные
                    </span>
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
        )}
        <main className="p-6 w-full">{renderSection()}</main>
      </div>
    </>
  );
};

export default Layout;
