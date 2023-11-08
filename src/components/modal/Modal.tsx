import React from "react";
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  message?: string;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, title, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <p className="title">{title}</p>
        <p>{message}</p>
        <button onClick={closeModal}>Close Message</button>
      </div>
    </div>
  );
};

export default Modal;
