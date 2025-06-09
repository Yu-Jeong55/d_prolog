import Modal from 'react-modal';

const getCustomModal = (width, height) => ({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    zIndex: '10',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: width || '600px',
    height: height || '400px',
    zIndex: '20',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'visible',
    padding: '40px',
  },
});

function ModalComponent({
  isOpen,
  onRequestClose,
  children,
  contentLabel,
  width,
  height,
  customStyle,
}) {
  const modalStyle = customStyle || getCustomModal(width, height);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyle}
      contentLabel={contentLabel}
    >
      {children}
    </Modal>
  );
}

export default ModalComponent;
