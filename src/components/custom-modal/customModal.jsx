import { Modal } from 'antd';

const CustomModal = ({ isModalOpen, handleCancel, handleOk }) => {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default CustomModal;
