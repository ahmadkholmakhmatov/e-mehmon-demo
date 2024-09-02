import { FaRegUser } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { LuBellRing, LuSettings2 } from 'react-icons/lu';
import { MdLockOutline } from 'react-icons/md';
import { TbCreditCard } from 'react-icons/tb';
import { BiSolidUserRectangle } from 'react-icons/bi';
import PersonalData from '../personal-data/PersonalData';

// src/components/AccountManagement.js
const AccountManagement = ({ activeDetail, setActiveDetail }) => {
  const renderDetailSection = () => {
    if (activeDetail === 'personal') {
      return <PersonalData />;
    }
    // Add more detail sections if needed
    return null;
  };

  return (
    <div className="w-full">
      {activeDetail ? (
        <div>{renderDetailSection()}</div>
      ) : (
        <div className="mb-6">
          <h1 className="text-[#232E40] text-2xl font-bold mb-2">
            Управление аккаунтом
          </h1>
          <p className="text-[#777E90] text-sm">
            Настройте свой аккаунт под себя
          </p>
        </div>
      )}

      {!activeDetail && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
          <Card
            title="Персональные данные"
            description="Обновите свои данные и узнайте, как мы их используем."
            icon={FaRegUser}
            onClick={() => setActiveDetail('personal')}
          />
          <Card
            title="Предпочтения"
            description="Измените язык, валюту и требования к доступной среде."
            icon={LuSettings2}
          />
          <Card
            title="Безопасность"
            description="Настройте параметры безопасности и двухфакторную аутентификацию."
            icon={MdLockOutline}
          />
          <Card
            title="Платежные данные"
            description="Безопасно добавьте или удалите способы оплаты бронирований."
            icon={TbCreditCard}
          />
          <Card
            title="Конфиденциальность"
            description="Воспользуйтесь своими правами на конфиденциальность и управляйте использованием своих данных."
            icon={BiSolidUserRectangle}
          />
          <Card
            title="Электронная рассылка"
            description="Укажите, какие уведомления вы хотите получать по электронной почте, а какие — нет."
            icon={LuBellRing}
          />
        </div>
      )}
    </div>
  );
};

const Card = ({ title, description, icon: Icon, onClick }) => (
  <div className="flex gap-4 items-start w-full hover:bg-[#F8F8FA]/60 rounded-2xl p-4 border-[#F8F8FA] border">
    <div className="bg-[#F8F8FA] p-[10px] rounded-lg">
      <Icon className="w-6 h-6 text-[#777E90]" />
    </div>
    <div>
      <h3 className="text-[#232E40] font-semibold mb-1">{title}</h3>
      <p className="text-[#777E90] text-sm mb-3">{description}</p>
      <div
        onClick={onClick}
        className="flex items-center gap-2 text-sm text-[#3276FF] font-medium cursor-pointer"
      >
        Настроить <FiArrowUpRight />
      </div>
    </div>
  </div>
);

export default AccountManagement;
