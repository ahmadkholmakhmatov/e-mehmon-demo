import { useState, useRef } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import Modal from 'react-modal';
import axiosInstance from '../../../utils/axiosInstance';

import { toast } from 'react-toastify';

const AvatarEditUploader = ({ onUploadSuccess }) => {
  const [image, setImage] = useState(null);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);

  const token = localStorage.getItem('token');

  const handleDrop = (acceptedFiles) => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
  };

  const handleScaleChange = (e) => {
    setScale(parseFloat(e.target.value));
  };

  const handleSave = async () => {
    if (editorRef.current) {
      // Get the canvas as a Base64-encoded string
      const canvas = editorRef.current.getImageScaledToCanvas().toDataURL();
      const blob = await fetch(canvas).then((res) => res.blob());

      try {
        const formData = new FormData();
        formData.append('file', blob, 'avatar.png');

        const uploadResponse = await axiosInstance.post(
          `/placements/write-file/`,
          formData, // Send the Base64 string directly in the JSON payload
          {
            headers: {
              'Content-Type': 'multipart/form-data', // Ensure this is set properly
            },
          }
        );
        console.log(uploadResponse);
        const imageUrl = uploadResponse.data.msg; // Adjust based on your file storage service

        // Send the image URL to your API
        const response = await axiosInstance.put(
          `/account/users/update_profile/`,
          { avatar: imageUrl },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        toast.success(response.status && 'Avatar successfully changed');

        setIsModalEditOpen(false);
        if (onUploadSuccess) {
          onUploadSuccess(); // Trigger the callback to refresh data
        }
        setImage(null);
      } catch (error) {
        if (error.response) {
          console.log('Error data:', error.response.data);
        } else if (error.request) {
          console.log('Error request:', error.request);
        } else {
          console.log('Error message:', error.message);
        }
      }
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axiosInstance.put(
        `/account/users/update_profile/`,
        { avatar: 'users/default.png' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response) {
        toast.success('Avatar deleted');
      }
      setIsModalDeleteOpen(false);
      if (onUploadSuccess) {
        onUploadSuccess();
      }
    } catch (error) {
      if (error.response) {
        console.log('Error data:', error.response.data);
      } else if (error.request) {
        console.log('Error request:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
    }
  };

  const handleClose = () => {
    setIsModalEditOpen(false);
    setIsModalDeleteOpen(false);
    setImage(null);
  };

  const { open } = useDropzone({
    onDrop: (acceptedFiles) => handleDrop(acceptedFiles),
    accept: 'image/*',
    noClick: true, // Prevent the default click behavior
    noKeyboard: true, // Disable keyboard triggering
  });

  const handleReplaceImage = () => {
    open(); // Programmatically trigger the file dialog
  };

  return (
    <>
      <div>
        <div className="flex gap-4 font-onest font-medium">
          <button
            onClick={() => setIsModalEditOpen(true)}
            className="hover:scale-110 text-sm"
          >
            <span className="flex gap-2 items-center text-mainBlue">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_8521_2442)">
                  <path
                    d="M9.38508 2.59095C9.88187 2.05271 10.1303 1.78358 10.3942 1.6266C11.0311 1.24782 11.8153 1.23605 12.4628 1.59553C12.7312 1.74452 12.9872 2.00606 13.4993 2.52916C14.0114 3.05225 14.2674 3.3138 14.4132 3.58794C14.7651 4.2494 14.7536 5.05051 14.3828 5.70112C14.2292 5.97076 13.9657 6.2245 13.4388 6.73199L7.16969 12.7702C6.17119 13.7319 5.67194 14.2128 5.04798 14.4565C4.42402 14.7002 3.73807 14.6822 2.36618 14.6464L2.17952 14.6415C1.76187 14.6306 1.55305 14.6251 1.43166 14.4873C1.31027 14.3496 1.32685 14.1369 1.35999 13.7114L1.37799 13.4804C1.47128 12.283 1.51792 11.6843 1.75174 11.1461C1.98556 10.608 2.38889 10.171 3.19556 9.29699L9.38508 2.59095Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.67188 2.66797L13.3385 7.33464"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33594 14.668L14.6693 14.668"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8521_2442">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Изменить
            </span>
          </button>

          <button
            onClick={() => setIsModalDeleteOpen(true)}
            className="hover:scale-110 text-sm"
          >
            <span className="flex items-center gap-2 text-[#FF4E4E]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 3.66797L12.5868 10.3514C12.4813 12.0589 12.4285 12.9127 12.0005 13.5265C11.7889 13.83 11.5164 14.0862 11.2005 14.2786C10.5614 14.668 9.70599 14.668 7.99516 14.668C6.28208 14.668 5.42554 14.668 4.78604 14.2779C4.46987 14.0851 4.19733 13.8285 3.98579 13.5245C3.55792 12.9097 3.5063 12.0547 3.40307 10.3447L3 3.66797"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M2 3.66732H14M10.7038 3.66732L10.2487 2.72847C9.94638 2.10482 9.79522 1.793 9.53448 1.59852C9.47664 1.55538 9.4154 1.51701 9.35135 1.48379C9.06261 1.33398 8.71608 1.33398 8.02302 1.33398C7.31255 1.33398 6.95732 1.33398 6.66379 1.49006C6.59873 1.52466 6.53666 1.56458 6.4782 1.60943C6.21443 1.81178 6.06709 2.13502 5.7724 2.78149L5.36862 3.66732"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M6.33594 11L6.33594 7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <path
                  d="M9.66406 11L9.66406 7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              Удалить
            </span>
          </button>
        </div>

        <Modal
          isOpen={isModalEditOpen}
          onRequestClose={handleClose}
          contentLabel="Avatar Editor"
          className="relative mx-auto my-auto w-full max-w-fit p-10 bg-white rounded-[40px] outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          {!image ? (
            <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="flex flex-col gap-8 items-center cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <div className="p-[118px] bg-customBg border-dashed border-mainBlue border-[1.5px] rounded-2xl">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66797 31.9993C6.66797 20.0571 6.66797 14.086 10.3779 10.376C14.0879 6.66602 20.0591 6.66602 32.0013 6.66602C43.9434 6.66602 49.9146 6.66602 53.6248 10.376C57.3346 14.086 57.3346 20.0571 57.3346 31.9993C57.3346 43.9415 57.3346 49.9127 53.6248 53.6228C49.9146 57.3327 43.9434 57.3327 32.0013 57.3327C20.0591 57.3327 14.0879 57.3327 10.3779 53.6228C6.66797 49.9127 6.66797 43.9415 6.66797 31.9993Z"
                        stroke="#B7BFD5"
                        strokeWidth="4"
                      />
                      <path
                        d="M44 24C46.2091 24 48 22.2091 48 20C48 17.7909 46.2091 16 44 16C41.7909 16 40 17.7909 40 20C40 22.2091 41.7909 24 44 24Z"
                        stroke="#B7BFD5"
                        strokeWidth="4"
                      />
                      <path
                        d="M42.6667 58.6673C41.0147 52.7337 37.1587 47.4195 31.6707 43.5585C25.7536 39.395 18.3243 37.1915 10.7085 37.3411C9.80421 37.339 8.90069 37.3678 8 37.4275"
                        stroke="#B7BFD5"
                        strokeWidth="4"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.668 47.9992C39.2053 44.4614 44.0933 42.6467 49.0312 42.6662C51.8312 42.6632 54.6178 43.2568 57.3346 44.4304"
                        stroke="#B7BFD5"
                        strokeWidth="4"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-mainDark font-fdeck text-2xl font-bold text-center mb-4">
                      Обновление фото профиля
                    </p>

                    <p className="text-mainGrey font-onest w-[486px] text-center">
                      Вы можете добавлять изображения в следующих форматах:
                      .jpg, .png, .jpeg. Допустимый размер 10 MB
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClose();
                    }}
                    className="absolute top-6 right-6 p-[10px] border border-[#B7BFD5]/20 rounded-2xl"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8307 4.66602L4.16406 16.3327M4.16406 4.66602L15.8307 16.3327"
                        stroke="#777E90"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </Dropzone>
          ) : (
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden">
                <AvatarEditor
                  ref={editorRef}
                  image={image}
                  width={300}
                  height={300}
                  border={0}
                  borderRadius={250}
                  color={[255, 255, 255, 0.6]} // RGBA
                  scale={scale}
                  className="mx-auto rounded-2xl"
                />
              </div>

              <div className="mx-auto my-4 w-[300px] flex items-center justify-between">
                <button
                  onClick={() =>
                    setScale((prevScale) => Math.max(1, prevScale - 0.05))
                  }
                  className="mr-6"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 12.5L8 12.5"
                      stroke="#232E40"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5Z"
                      stroke="#232E40"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
                <input
                  type="range"
                  value={scale}
                  min="1"
                  max="2"
                  step="0.001"
                  onChange={handleScaleChange}
                  className="w-full mx-2 text-[#B7BFD5]"
                />
                <button
                  onClick={() =>
                    setScale((prevScale) => Math.min(2, prevScale + 0.05))
                  }
                  className="ml-6"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8.5V16.5M16 12.5L8 12.5"
                      stroke="#232E40"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5Z"
                      stroke="#232E40"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>

              <button onClick={handleReplaceImage}>
                <span className="flex items-center gap-2 text-mainBlue font-onest font-medium mb-8">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_8521_39612)">
                      <path
                        d="M10.1085 1.16602L10.5072 1.9112C10.7767 2.41499 10.9114 2.66689 10.8223 2.77477C10.7332 2.88265 10.4397 2.79552 9.8528 2.62127C9.26601 2.44705 8.64298 2.35332 7.9974 2.35332C4.49959 2.35332 1.66406 5.10499 1.66406 8.49935C1.66406 9.61881 1.97248 10.6684 2.51135 11.5724M5.88628 15.8327L5.48764 15.0875C5.21812 14.5837 5.08336 14.3318 5.17247 14.2239C5.26157 14.116 5.55506 14.2032 6.14199 14.3774C6.72879 14.5516 7.35181 14.6454 7.9974 14.6454C11.4952 14.6454 14.3307 11.8937 14.3307 8.49935C14.3307 7.37989 14.0223 6.33033 13.4834 5.42633"
                        stroke="#3276FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8521_39612">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Заменить фотографию
                </span>
              </button>

              <div>
                <p className="text-mainDark text-2xl font-fdeck font-bold text-center mb-4">
                  Обновление фото профиля
                </p>

                <p className="text-mainGrey font-onest w-[486px] text-center">
                  Вы можете добавлять изображения в следующих форматах: .jpg,
                  .png, .jpeg. Допустимый размер 10 MB
                </p>
              </div>

              <div className="mt-8 flex gap-8 font-onest font-medium">
                <button
                  onClick={handleClose}
                  className="py-4 w-full bg-customBg font-onest font-medium text-mainDark rounded-2xl hover:bg-gray-200"
                >
                  Отмена
                </button>

                <button
                  onClick={handleSave}
                  className="py-4 w-full bg-mainBlue text-white rounded-2xl hover:bg-blue-600"
                >
                  Сохранить
                </button>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="absolute top-6 right-6 p-[10px] border border-[#B7BFD5]/20 rounded-2xl"
              >
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8307 4.66602L4.16406 16.3327M4.16406 4.66602L15.8307 16.3327"
                    stroke="#777E90"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </Modal>

        <Modal
          isOpen={isModalDeleteOpen}
          onRequestClose={handleClose}
          contentLabel="Avatar Editor"
          className="relative mx-auto my-auto w-full max-w-fit p-10 bg-white rounded-[40px] outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="p-4 bg-customBg rounded-3xl">
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39 11.5L37.7605 31.5502C37.4439 36.6729 37.2855 39.2343 36.0015 41.0757C35.3667 41.9862 34.5493 42.7546 33.6014 43.332C31.6842 44.5 29.118 44.5 23.9855 44.5C18.8462 44.5 16.2766 44.5 14.3581 43.3299C13.4096 42.7513 12.592 41.9816 11.9574 41.0697C10.6738 39.2252 10.5189 36.6602 10.2092 31.5303L9 11.5"
                  stroke="#777E90"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 11.5H42M32.1115 11.5L30.7461 8.68345C29.8391 6.81251 29.3857 5.87704 28.6034 5.29361C28.4299 5.1642 28.2462 5.04908 28.054 4.9494C27.1878 4.5 26.1482 4.5 24.0691 4.5C21.9377 4.5 20.872 4.5 19.9914 4.96824C19.7962 5.07202 19.61 5.19179 19.4346 5.32634C18.6433 5.9334 18.2013 6.90311 17.3172 8.84251L16.1058 11.5"
                  stroke="#777E90"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19 33.5L19 21.5"
                  stroke="#777E90"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M29 33.5L29 21.5"
                  stroke="#777E90"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="text-center">
              <p className="text-mainDark font-fdeck text-2xl font-bold mb-4">
                Удаление фотографии
              </p>
              <p className="w-[486px] font-onest text-mainGrey">
                Вы действительно хотите удалить фотографию профиля от своего
                аккаунта?
              </p>
            </div>

            <div className="flex w-full gap-8 font-onest font-medium">
              <button
                onClick={handleClose}
                className="py-4 w-full bg-customBg text-mainDark rounded-2xl hover:bg-gray-200"
              >
                Отмена
              </button>

              <button
                onClick={handleDelete}
                className="py-4 w-full bg-[#FF4E4E] text-white rounded-2xl hover:bg-red-600"
              >
                Удалить
              </button>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="absolute top-6 right-6 p-[10px] border border-[#B7BFD5]/20 rounded-2xl"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8307 4.66602L4.16406 16.3327M4.16406 4.66602L15.8307 16.3327"
                  stroke="#777E90"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AvatarEditUploader;
