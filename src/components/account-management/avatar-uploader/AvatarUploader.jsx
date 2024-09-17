import { useState, useRef } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import Modal from 'react-modal';
import axiosInstance from '../../../utils/axiosInstance';

import { toast } from 'react-toastify';

const AvatarUploader = ({ onUploadSuccess }) => {
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);

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

      const token = localStorage.getItem('token');

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

        toast.success(response && 'Avatar uploaded');

        setIsModalOpen(false);
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

  const handleClose = () => {
    setIsModalOpen(false);
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
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 text-mainBlue font-onest text-sm font-medium"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_8521_12004)">
              <path
                d="M7.9987 5.33398V10.6673M10.6654 8.00065L5.33203 8.00065"
                stroke="#3276FF"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.6654 8.0013C14.6654 4.3194 11.6806 1.33464 7.9987 1.33464C4.3168 1.33464 1.33203 4.3194 1.33203 8.0013C1.33203 11.6832 4.3168 14.668 7.9987 14.668C11.6806 14.668 14.6654 11.6832 14.6654 8.0013Z"
                stroke="#3276FF"
                strokeWidth="1.2"
              />
            </g>
            <defs>
              <clipPath id="clip0_8521_12004">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Добавить
        </button>

        <Modal
          isOpen={isModalOpen}
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
                      Добавление фото профиля
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
                  Добавление фото профиля
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
      </div>
    </>
  );
};

export default AvatarUploader;
