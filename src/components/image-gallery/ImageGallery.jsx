import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './imageGallery.css';
import { useState } from 'react';

const images = [
  { src: '/assets/places/hotel1.webp' },
  { src: '/assets/places/hotel2.webp' },
  { src: '/assets/places/hotel3.webp' },
  { src: '/assets/places/hotel4.webp' },
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.28114 12C9.28114 12.6962 9.5577 13.3639 10.05 13.8562C10.5423 14.3484 11.2099 14.625 11.9061 14.625C12.6023 14.625 13.27 14.3484 13.7623 13.8562C14.2546 13.3639 14.5311 12.6962 14.5311 12C14.5311 11.3038 14.2546 10.6361 13.7623 10.1438C13.27 9.65156 12.6023 9.375 11.9061 9.375C11.2099 9.375 10.5423 9.65156 10.05 10.1438C9.5577 10.6361 9.28114 11.3038 9.28114 12ZM22.0827 11.3953C19.8608 6.71484 16.5022 4.35938 11.9999 4.35938C7.4952 4.35938 4.13895 6.71484 1.91708 11.3977C1.82796 11.5864 1.78174 11.7925 1.78174 12.0012C1.78174 12.2099 1.82796 12.416 1.91708 12.6047C4.13895 17.2852 7.49755 19.6406 11.9999 19.6406C16.5046 19.6406 19.8608 17.2852 22.0827 12.6023C22.2632 12.2227 22.2632 11.782 22.0827 11.3953ZM11.9061 16.125C9.62802 16.125 7.78114 14.2781 7.78114 12C7.78114 9.72188 9.62802 7.875 11.9061 7.875C14.1843 7.875 16.0311 9.72188 16.0311 12C16.0311 14.2781 14.1843 16.125 11.9061 16.125Z"
                  fill="#2F3138"
                />
              </svg>

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
