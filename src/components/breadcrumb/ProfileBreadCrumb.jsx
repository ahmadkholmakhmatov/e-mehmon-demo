import { useNavigate } from 'react-router-dom';
import './profilebread.css';
// src/components/Breadcrumb.js
const ProfileBreadCrumb = ({ activeSection, activeDetail, onBack }) => {
  const navigate = useNavigate();

  const sectionNames = {
    account: 'Управление аккаунтом',
    notification: 'Уведомления',
    reservation: 'Бронирования',
    houses: 'Мои объекты',
    review: 'Отзывы',
    saved: 'Сохраненные',
  };

  const detailNames = {
    personal: 'Персональные данные',
    preferences: 'Предпочтения',
    // Add other details if needed
  };

  const breadcrumbItems = [
    {
      name: 'Главная',
      onClick: () => {
        navigate('/');
      },
    },
  ];

  if (activeSection && sectionNames[activeSection]) {
    breadcrumbItems.push({
      name: sectionNames[activeSection],
      onClick: () => onBack(activeSection, null),
    });
  }

  if (activeDetail && detailNames[activeDetail]) {
    breadcrumbItems.push({
      name: detailNames[activeDetail],
      onClick: () => onBack(activeSection, activeDetail),
    });
  }

  return (
    <nav className="flex items-center gap-3 mb-4 text-sm">
      {breadcrumbItems.map((item, index) => (
        <span key={index}>
          <button
            onClick={item.onClick}
            className={` text-[#232E40] ${index === breadcrumbItems.length - 1 ? 'important-text' : ''}`}
          >
            {item.name}
          </button>
          {index < breadcrumbItems.length - 1 && (
            <span className="ml-3 important-text">
              <svg
                className="inline-block text-[#B7BFD5]"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke=""
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 18L15.2929 12.7071C15.6262 12.3738 15.7929 12.2071 15.7929 12C15.7929 11.7929 15.6262 11.6262 15.2929 11.2929L10 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default ProfileBreadCrumb;
