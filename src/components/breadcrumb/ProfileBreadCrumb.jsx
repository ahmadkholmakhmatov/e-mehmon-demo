import { useNavigate } from 'react-router-dom';

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
    <nav className="mb-4 text-sm">
      {breadcrumbItems.map((item, index) => (
        <span key={index}>
          <button onClick={item.onClick} className="text-[#3276FF]">
            {item.name}
          </button>
          {index < breadcrumbItems.length - 1 && <span> &gt; </span>}
        </span>
      ))}
    </nav>
  );
};

export default ProfileBreadCrumb;
