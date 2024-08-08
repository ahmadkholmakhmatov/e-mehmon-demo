import { MdRemoveRedEye } from 'react-icons/md';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './imageGallery.css';
import { useState } from 'react';

const images = [
  { src: '/assets/places/hotel1.png' },
  { src: '/assets/places/hotel2.png' },
  { src: '/assets/places/hotel3.png' },
  { src: '/assets/places/hotel4.png' },
]; // Your image URLs

const ImageGallery = () => {
  const [basicExampleOpen, setBasicExampleOpen] = useState(false);
  return (
    <div className="custom-grid">
      <div className="md:col-span-1 md:row-span-3 esm:col-span-3 esm:row-start-1">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={images[0].src}
          alt="Main"
        />
      </div>

      <div className="md:col-start-2 md:row-start-1 esm:col-start-1 esm:row-start-2">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={images[1].src}
          alt="Side 1"
        />
      </div>

      <div className="md:col-start-2 md:row-start-2 esm:col-start-2 esm:row-start-2">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={images[2].src}
          alt="Side 2"
        />
      </div>

      <div
        className="md:col-start-2 md:row-start-3 esm:col-start-3 esm:row-start-2"
        onClick={() => {
          setBasicExampleOpen(true);
        }}
      >
        <div className="w-full h-full relative rounded-2xl overflow-hidden">
          <img
            className="w-full h-full  object-cover rounded-2xl"
            src={images[3].src}
            alt="Side 3"
          />
          <div className="absolute inset-0 bg-[#1C2534] bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
            <div className="flex items-center justify-center md:px-6 md:py-4 esm:px-5 esm:py-3 gap-2 bg-[#181C32] bg-opacity-20 border-[1px] border-[#181C32] border-opacity-20 rounded-2xl">
              <MdRemoveRedEye className="text-[#2F3138] w-5 h-5" />
              <span className="text-white text-base font-medium bg-opacity-50 rounded">
                +25
              </span>
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={basicExampleOpen}
        close={() => setBasicExampleOpen(false)}
        slides={images}
      />
    </div>
  );
};

export default ImageGallery;
