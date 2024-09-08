import { useState, useRef } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import Modal from 'react-modal';
import axiosInstance from '../../../utils/axiosInstance';
import { RxImage } from 'react-icons/rx';
import { MdOutlineClose, MdOutlineDeleteOutline } from 'react-icons/md';
import { BsArrowRepeat } from 'react-icons/bs';
import { FiMinusCircle } from 'react-icons/fi';
import { FiPlusCircle } from 'react-icons/fi';
import { LuPencilLine } from 'react-icons/lu';

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

        console.log('Image uploaded successfully:', response.data);

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
      console.log(response);
      setIsModalDeleteOpen(false);
      if (onUploadSuccess) {
        onUploadSuccess(); // Trigger the callback to refresh data
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
    <div>
      <div className="flex gap-4">
        <button
          onClick={() => setIsModalEditOpen(true)}
          className="hover:scale-110"
        >
          <span className="flex gap-2 items-center text-[#3276FF]">
            <LuPencilLine /> Изменить
          </span>
        </button>

        <button
          onClick={() => setIsModalDeleteOpen(true)}
          className="hover:scale-110"
        >
          <span className="flex items-center gap-2 text-[#FF4E4E]">
            <MdOutlineDeleteOutline /> Удалить
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
                <div className="p-[118px] bg-[#F8F8FA] border-dashed border-[#3276FF] border-[1.5px] rounded-2xl">
                  <RxImage className="text-[#B7BFD5] w-16 h-16" />
                </div>
                <div>
                  <p className="text-[#232E40] text-2xl font-bold text-center mb-4">
                    Обновление фото профиля
                  </p>

                  <p className="text-[#777E90] w-[486px] text-center">
                    Вы можете добавлять изображения в следующих форматах: .jpg,
                    .png, .jpeg. Допустимый размер 10 MB
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  className="absolute top-6 right-6 p-[10px] border border-[#B7BFD5]/20 rounded-2xl"
                >
                  <MdOutlineClose className="w-5 h-5" />
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
                <FiMinusCircle className="w-6 h-6" />
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
                <FiPlusCircle className="w-6 h-6" />
              </button>
            </div>

            <button onClick={handleReplaceImage}>
              <span className="flex items-center gap-2 text-[#3276FF] font-medium mb-8">
                <BsArrowRepeat />
                Заменить фотографию
              </span>
            </button>

            <div>
              <p className="text-[#232E40] text-2xl font-bold text-center mb-4">
                Обновление фото профиля
              </p>

              <p className="text-[#777E90] w-[486px] text-center">
                Вы можете добавлять изображения в следующих форматах: .jpg,
                .png, .jpeg. Допустимый размер 10 MB
              </p>
            </div>

            <div className="mt-8 flex gap-8 font-medium">
              <button
                onClick={handleClose}
                className="py-4 w-full bg-[#F8F8FA] text-[#232E40] rounded-2xl hover:bg-gray-200"
              >
                Отмена
              </button>

              <button
                onClick={handleSave}
                className="py-4 w-full bg-[#3276FF] text-white rounded-2xl hover:bg-blue-600"
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
              <MdOutlineClose className="w-5 h-5" />
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
          <div className="p-4 bg-[#F8F8FA] rounded-3xl">
            <MdOutlineDeleteOutline className="w-12 h-12" />
          </div>

          <div className="text-center">
            <p className="text-[#232E40] text-2xl font-bold mb-4">
              Удаление фотографии
            </p>
            <p className="w-[486px] text-[#777E90]">
              Вы действительно хотите удалить фотографию профиля от своего
              аккаунта?
            </p>
          </div>

          <div className="flex w-full gap-8 font-medium">
            <button
              onClick={handleClose}
              className="py-4 w-full bg-[#F8F8FA] text-[#232E40] rounded-2xl hover:bg-gray-200"
            >
              Отмена
            </button>

            <button
              onClick={handleDelete}
              className="py-4 w-full bg-[#FF4E4E] text-white rounded-2xl hover:bg-red1-600"
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
            <MdOutlineClose className="w-5 h-5" />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AvatarEditUploader;
