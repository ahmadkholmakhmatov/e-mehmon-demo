import RU from 'country-flag-icons/react/3x2/RU';
import GB from 'country-flag-icons/react/3x2/GB';
import US from 'country-flag-icons/react/3x2/US';
import { IoIosArrowDown } from 'react-icons/io';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineClose } from 'react-icons/md';

const LanguageModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState('');
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'en') {
      setLanguage('English');
    } else if (i18n.language === 'ru') {
      setLanguage('Русский');
    }
  }, [i18n.language]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectLanguage = (key) => {
    i18n.changeLanguage(key);
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className="flex items-center gap-2 bg-transparent border-none"
      >
        {language} <IoIosArrowDown />
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Currency Selection"
        className="relative mx-auto my-auto w-full max-w-fit p-10 bg-white rounded-[40px] outline-none z-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
      >
        <div className="max-w-[994px] text-center mb-6">
          <h3 className="text-[#232E40] text-2xl font-bold mb-4">
            Выберите язык
          </h3>
          <p className="text-[#777E90]">
            Для вашего удобства мы предлагаем несколько основных языков,
            рекомендуемых для использования на нашем сайте.
            <span className="block">
              Некоторые переводы выполнены с помощью Google Переводчика, могут
              не всегда быть идеальными.
            </span>
          </p>
        </div>

        <div className="modal-body">
          <div className="mb-6">
            <h3 className="text-[#232E40] text-lg font-bold mb-6">
              Рекомендуемый язык и регион
            </h3>
            <div className="grid grid-cols-5 gap-4">
              <button
                className="p-4 border border-[#FFFFFF] hover:border hover:border-[#3276FF] rounded-lg group"
                onClick={() => selectLanguage('ru')}
              >
                <span className="flex items-center gap-2 font-medium group-hover:text-[#3276FF]">
                  <RU className="w-8 h-6 rounded-md" />
                  Русский
                </span>
              </button>

              <button
                className="p-4 border border-[#FFFFFF] hover:border hover:border-[#3276FF] rounded-lg group"
                onClick={() => selectLanguage('en')}
              >
                <span className="flex items-center gap-2 font-medium group-hover:text-[#3276FF]">
                  <GB className="w-8 h-6 rounded-md" />
                  English (UK)
                </span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-[#232E40] text-lg font-bold mb-6">Все языки</h3>
            <div className="grid grid-cols-5 gap-4 ">
              <button
                className="p-4 rounded-lg hover:bg-[#F8F8FA]"
                onClick={() => selectLanguage('ru')}
              >
                <span className="flex items-center gap-2 font-medium">
                  <RU className="w-8 h-6 rounded-md" />
                  Русский
                </span>
              </button>
              <button
                className="p-4 rounded-lg hover:bg-[#F8F8FA]"
                onClick={() => selectLanguage('en')}
              >
                <span className="flex items-center gap-2 font-medium">
                  <GB className="w-8 h-6 rounded-md" />
                  English (UK)
                </span>
              </button>
              <button
                className="p-4 rounded-lg hover:bg-[#F8F8FA]"
                onClick={() => selectLanguage('en')}
              >
                <span className="flex items-center gap-2 font-medium">
                  <US className="w-8 h-6 rounded-md" />
                  English (US)
                </span>
              </button>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-6 right-6 p-[10px] border border-[#B7BFD5]/20 rounded-2xl"
          >
            <MdOutlineClose className="w-5 h-5" />
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LanguageModal;
