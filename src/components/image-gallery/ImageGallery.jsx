import { useState } from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
import './imageGallery.css';
import CustomModal from '../custom-modal/customModal';

const ImageGallery = ({ imgSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(imgSrc);
  return (
    <div className="custom-grid">
      <div className="sm:col-span-1 sm:row-span-3 esm:col-span-3 esm:row-start-1">
        <img
          className="2xl:max-h-[573px] w-full h-full object-cover rounded-2xl"
          src={imgSrc}
          alt="Main"
        />
      </div>

      <div className="sm:col-start-2 sm:row-start-1 esm:col-start-1 esm:row-start-2">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="/assets/places/hotel1.png"
          alt="Side 1"
        />
      </div>

      <div className="sm:col-start-2 sm:row-start-2 esm:col-start-2 esm:row-start-2">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="/assets/places/hotel1.png"
          alt="Side 2"
        />
      </div>

      <div
        className="sm:col-start-2 sm:row-start-3 esm:col-start-3 esm:row-start-2"
        onClick={showModal}
      >
        <div className="relative rounded-2xl overflow-hidden">
          <img
            className="w-full h-full lg:max-h-[150px] 2xl:max-h-[175px] esm:max-h-[166px] object-cover rounded-2xl"
            src="/assets/places/hotel4.png"
            alt="Side 3"
          />
          <div className="absolute inset-0 bg-[#1C2534] bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
            <div className="flex items-center justify-center px-6 py-4 gap-2 bg-[#181C32] bg-opacity-20 border-[1px] border-[#181C32] border-opacity-20 rounded-2xl">
              <MdRemoveRedEye className="text-[#2F3138] w-5 h-5" />
              <span className="text-white text-base font-medium bg-opacity-50 rounded">
                +25
              </span>
            </div>
          </div>
        </div>
      </div>

      <CustomModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  );
};

export default ImageGallery;
