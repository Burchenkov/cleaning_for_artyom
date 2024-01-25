import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="my-modal">
          <div className="my-modal-wrapper">
            <div className="my-modal-content">
              <button
                className="modal-close-button"
                onClick={() => onClose()}
              >
                закрыть
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
