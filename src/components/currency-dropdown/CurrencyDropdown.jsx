import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IoIosArrowDown } from 'react-icons/io';
import { useCurrency } from '../../utils/CurrencyContext';
import { MdOutlineClose } from 'react-icons/md';

// Set app element for accessibility
Modal.setAppElement('#root');

const CurrencyDropDown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const savedCurreny = localStorage.getItem('curreny');

  useEffect(() => {
    if (savedCurreny) {
      setCurrency(savedCurreny);
    }
  }, [setCurrency, savedCurreny]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectCurrency = (key) => {
    setCurrency(key);
    localStorage.setItem('currency', key);
    closeModal();
  };

  return (
    <>
      {/* Button to open the modal */}
      <button
        onClick={showModal}
        className="flex items-center gap-2 bg-transparent border-none"
      >
        {currency} <IoIosArrowDown />
      </button>

      {/* Modal structure */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Currency Selection"
        className="relative mx-auto my-auto w-full max-w-fit p-10 bg-white rounded-[40px] outline-none z-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
      >
        {/* Modal header */}
        <div className="max-w-[994px] text-center mb-6">
          <h3 className="text-[#232E40] text-2xl font-bold mb-4">
            Выберите валюту
          </h3>
          <p className="text-[#777E90]">
            Там, где это необходимо, цены будут конвертированы и отображены в
            выбранной вами валюте.
            <span className="block">
              Валюта, в которой вы заплатите, зависит от вашего бронирования.
              Кроме того, может взиматься сервисный сбор.
            </span>
          </p>
        </div>

        {/* Modal body */}
        <div className="modal-body">
          <div className="">
            <h3 className="text-[#232E40] text-lg font-bold mb-6">
              Рекомендуемые валюты
            </h3>
            <div className="grid grid-cols-5 gap-4 text-[#3276FF]">
              <button
                className={`p-4 border  hover:border hover:border-[#3276FF] rounded-lg group ${currency === 'USD' ? 'border-grey-400' : 'border-[#FFFFFF]'}`}
                onClick={() => selectCurrency('USD')}
              >
                <span className="text-left">
                  <p className="mb-1 text-[#777E90] group-hover:text-[#3276FF]">
                    Доллар США
                  </p>
                  <p className="text-[#232E40] font-medium group-hover:text-[#3276FF]">
                    USD
                  </p>
                </span>
              </button>

              <button
                className={`p-4 border  hover:border hover:border-[#3276FF] rounded-lg group ${currency === 'UZS' ? 'border-grey-400' : 'border-[#FFFFFF]'}`}
                onClick={() => selectCurrency('UZS')}
              >
                <span className="text-left">
                  <p className="mb-1 text-[#777E90] group-hover:text-[#3276FF]">
                    Узбекский сум
                  </p>
                  <p className="text-[#232E40] font-medium group-hover:text-[#3276FF]">
                    UZS
                  </p>
                </span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-[#232E40] text-lg font-bold mb-6">
              Все валюты
            </h3>
            <div className="grid grid-cols-5 gap-4 text-[#3276FF]">
              <button
                className={`p-4 border  hover:border hover:border-[#3276FF] rounded-lg group ${currency === 'BGN' ? 'border-grey-400' : 'border-[#FFFFFF]'}`}
                onClick={() => selectCurrency('BGN')}
              >
                <span className="text-left">
                  <p className="mb-1 text-[#777E90] ">Болгарский лев</p>
                  <p className="text-[#232E40] font-medium">BGN</p>
                </span>
              </button>
              <button
                className={`p-4 border  hover:border hover:border-[#3276FF] rounded-lg group ${currency === 'BGN' ? 'border-grey-400' : 'border-[#FFFFFF]'}`}
                onClick={() => selectCurrency('BGN')}
              >
                <span className="text-left">
                  <p className="mb-1 text-[#777E90] ">Болгарский лев</p>
                  <p className="text-[#232E40] font-medium">BGN</p>
                </span>
              </button>
            </div>
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
      </Modal>
    </>
  );
};

export default CurrencyDropDown;
