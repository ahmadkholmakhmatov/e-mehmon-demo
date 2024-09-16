import PersonalData from '../personal-data/PersonalData';

// src/components/AccountManagement.js
const AccountManagement = ({
  activeDetail,
  setActiveDetail,
  setShowSidebar,
}) => {
  const cardData = [
    {
      key: 'personal',
      title: 'Персональные данные',
      description: 'Обновите свои данные и узнайте, как мы их используем.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
            stroke="#777E90"
            strokeWidth="1.5"
          />
        </svg>
      ),
      onClick: () => setActiveDetail('personal'),
    },
    {
      key: 'preferences',
      title: 'Предпочтения',
      description: 'Измените язык, валюту и требования к доступной среде.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7H6"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 17H9"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 17L21 17"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 7L21 7"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 7C6 6.06812 6 5.60218 6.15224 5.23463C6.35523 4.74458 6.74458 4.35523 7.23463 4.15224C7.60218 4 8.06812 4 9 4C9.93188 4 10.3978 4 10.7654 4.15224C11.2554 4.35523 11.6448 4.74458 11.8478 5.23463C12 5.60218 12 6.06812 12 7C12 7.93188 12 8.39782 11.8478 8.76537C11.6448 9.25542 11.2554 9.64477 10.7654 9.84776C10.3978 10 9.93188 10 9 10C8.06812 10 7.60218 10 7.23463 9.84776C6.74458 9.64477 6.35523 9.25542 6.15224 8.76537C6 8.39782 6 7.93188 6 7Z"
            stroke="#777E90"
            strokeWidth="1.5"
          />
          <path
            d="M12 17C12 16.0681 12 15.6022 12.1522 15.2346C12.3552 14.7446 12.7446 14.3552 13.2346 14.1522C13.6022 14 14.0681 14 15 14C15.9319 14 16.3978 14 16.7654 14.1522C17.2554 14.3552 17.6448 14.7446 17.8478 15.2346C18 15.6022 18 16.0681 18 17C18 17.9319 18 18.3978 17.8478 18.7654C17.6448 19.2554 17.2554 19.6448 16.7654 19.8478C16.3978 20 15.9319 20 15 20C14.0681 20 13.6022 20 13.2346 19.8478C12.7446 19.6448 12.3552 19.2554 12.1522 18.7654C12 18.3978 12 17.9319 12 17Z"
            stroke="#777E90"
            strokeWidth="1.5"
          />
        </svg>
      ),
      onClick: () => setActiveDetail('notification'),
    },
    {
      key: 'security',
      title: 'Безопасность',
      description:
        'Настройте параметры безопасности и двухфакторную аутентификацию.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16.5V14.5"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z"
            stroke="#777E90"
            strokeWidth="1.5"
          />
          <path
            d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: 'payment',
      title: 'Платежные данные',
      description:
        'Безопасно добавьте или удалите способы оплаты бронирований.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 16H11.5"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 16L18 16"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 9H22"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: 'privacy',
      title: 'Конфиденциальность',
      description:
        'Воспользуйтесь своими правами на конфиденциальность и управляйте использованием своих данных.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 18C10.3135 16.0463 13.667 15.9543 15.5 18M13.9406 12C13.9406 13.1046 13.0688 14 11.9934 14C10.918 14 10.0462 13.1046 10.0462 12C10.0462 10.8954 10.918 10 11.9934 10C13.0688 10 13.9406 10.8954 13.9406 12Z"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9.5 4.00195C6.85561 4.01181 5.44101 4.10427 4.52513 4.97195C3.5 5.94312 3.5 7.5062 3.5 10.6324V15.3692C3.5 18.4954 3.5 20.0584 4.52513 21.0296C5.55025 22.0008 7.20017 22.0008 10.5 22.0008H13.5C16.7998 22.0008 18.4497 22.0008 19.4749 21.0296C20.5 20.0584 20.5 18.4954 20.5 15.3692V10.6324C20.5 7.5062 20.5 5.94312 19.4749 4.97195C18.559 4.10427 17.1444 4.01181 14.5 4.00195"
            stroke="#777E90"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.77216 3.63163C9.8681 3.21682 9.91608 3.00942 10.0082 2.84004C10.2229 2.44546 10.6188 2.15548 11.0914 2.0467C11.2943 2 11.5296 2 12 2C12.4704 2 12.7057 2 12.9086 2.0467C13.3812 2.15548 13.7771 2.44545 13.9918 2.84004C14.0839 3.00942 14.1319 3.21682 14.2278 3.63163L14.3111 3.99176C14.4813 4.72744 14.5664 5.09528 14.438 5.37824C14.3549 5.5615 14.2132 5.71842 14.031 5.82911C13.7496 6 13.3324 6 12.4981 6H11.5019C10.6676 6 10.2504 6 9.96901 5.82911C9.78677 5.71842 9.6451 5.5615 9.56197 5.37824C9.43361 5.09528 9.51869 4.72744 9.68886 3.99176L9.77216 3.63163Z"
            stroke="#777E90"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      key: 'newsletter',
      title: 'Электронная рассылка',
      description:
        'Укажите, какие уведомления вы хотите получать по электронной почте, а какие — нет.',
      icon: (
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
      ),
    },
  ];

  const renderDetailSection = () => {
    if (activeDetail === 'personal') {
      setShowSidebar(false);
      return <PersonalData setActiveDetail={setActiveDetail} />;
    } else if (activeDetail === 'preferences') {
      setShowSidebar(false);
      return <div>Hello</div>;
    }
    return null;
  };

  return (
    <div className="w-full">
      {activeDetail ? (
        <div>{renderDetailSection()}</div>
      ) : (
        <>
          <div className="mb-6">
            <h1 className="text-[#1a1c1e] text-2xl font-bold mb-2">
              Управление аккаунтом
            </h1>
            <p className="text-[#777E90] text-sm">
              Настройте свой аккаунт под себя
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
            {cardData.map(({ key, title, description, icon, onClick }) => (
              <Card
                key={key}
                title={title}
                description={description}
                icon={icon}
                onClick={onClick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Card = ({ title, description, icon, onClick }) => (
  <div
    className="flex gap-4 items-start w-full hover:bg-[#F8F8FA]/60 rounded-2xl p-4 border-[#F8F8FA] border cursor-pointer"
    onClick={onClick}
  >
    <div className="bg-[#F8F8FA] p-[10px] rounded-lg">{icon}</div>
    <div>
      <h3 className="text-[#232E40] font-semibold mb-1">{title}</h3>
      <p className="text-[#777E90] text-sm mb-3">{description}</p>
      <div className="flex items-center gap-2 text-sm text-[#3276FF] font-medium">
        Настроить{' '}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.91016 5.05078L10.6792 5.05078L10.6792 9.81982"
            stroke="#3276FF"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 11.7285L10.6114 5.11707"
            stroke="#3276FF"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default AccountManagement;
