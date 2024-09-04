import { useState } from 'react';
import AccountManagement from '../account-management/AccountManagement';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { LuBellRing, LuHeart } from 'react-icons/lu';
import { SlHandbag } from 'react-icons/sl';
import { FaHospital } from 'react-icons/fa6';
import { MdOutlineRateReview } from 'react-icons/md';
import ProfileBreadCrumb from '../breadcrumb/ProfileBreadCrumb';

const Layout = () => {
  const [activeSection, setActiveSection] = useState('account'); // Default section
  const [activeDetail, setActiveDetail] = useState(null); // New state to track active detail
  const [showSidebar, setShowSidebar] = useState(true);

  console.log(showSidebar);

  const handleBreadcrumbBack = (section, detail) => {
    setActiveSection(section);
    setActiveDetail(detail);
    if (!detail) {
      // If returning to a main section, show the sidebar
      setShowSidebar(true);
    }
  };

  const renderSection = () => {
    if (activeDetail) {
      // Render details when activeDetail is set
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
          <aside className="p-6 border-r border-[#F8F8FA]">
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <button
                    onClick={() => setActiveSection('account')}
                    className={`text-[#232E40] rounded-2xl ${
                      activeSection === 'account' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <LiaUserCircleSolid className=" w-6 h-6" /> Управление
                      аккаунтом
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('notification')}
                    className={`text-[#232E40] rounded-2xl ${
                      activeSection === 'notification' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <LuBellRing className=" w-6 h-6" /> Уведомления
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('reservation')}
                    className={`text-[#232E40] rounded-2xl ${
                      activeSection === 'reservation' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <SlHandbag className=" w-6 h-6" /> Бронирования
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('houses')}
                    className={`text-[#232E40] rounded-2xl ${
                      activeSection === 'houses' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <FaHospital className=" w-6 h-6" /> Мои объекты
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('review')}
                    className={`text-[#232E40] rounded-2xl ${
                      activeSection === 'review' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <MdOutlineRateReview className=" w-6 h-6" /> Отзывы
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('saved')}
                    className={`text-[#232E40] rounded-2xl ${
                      activeSection === 'saved' ? 'bg-[#F8F8FA]' : ''
                    }`}
                  >
                    <span className="flex items-center whitespace-nowrap gap-3 p-4 ">
                      <LuHeart className=" w-6 h-6" /> Сохраненные
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
