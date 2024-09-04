import { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import Modal from 'react-modal';
import axiosInstance from '../../utils/axiosInstance';

const AvatarUploader = ({ onSave }) => {
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

      const token = localStorage.getItem('token');

      console.log(canvas);
      try {
        const response = await axiosInstance.put(
          `/account/users/update_profile/`,
          { avatar: canvas }, // Send the Base64 string directly in the JSON payload
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Ensure this is set properly
            },
          }
        );

        console.log('Image uploaded successfully:', response.data);
        onSave(canvas);
        setIsModalOpen(false);
      } catch (error) {
        if (error.response) {
          console.log('Error data:', error.response.data);
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      }
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setImage(null);
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 text-blue-500 text-sm font-medium"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
        Добавить
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleClose}
        contentLabel="Avatar Editor"
        className="relative mx-auto my-12 w-full max-w-lg p-6 bg-white rounded-lg shadow-lg outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {!image ? (
          <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer"
              >
                <input {...getInputProps()} />
                <p className="text-gray-600">
                  Перетащите файл или кликните для выбора изображения
                </p>
              </div>
            )}
          </Dropzone>
        ) : (
          <div className="text-center">
            <AvatarEditor
              ref={editorRef}
              image={image}
              width={250}
              height={250}
              border={50}
              borderRadius={125}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={scale}
              className="mx-auto"
            />
            <div className="mt-4">
              <input
                type="range"
                value={scale}
                min="1"
                max="2"
                step="0.01"
                onChange={handleScaleChange}
                className="w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Добавить
              </button>
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Отмена
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AvatarUploader;
