import React from "react";
import { Transition } from "react-transition-group";

import Form from "../Form/Form";

const Modal = ({ isOpen, onClose }) => {
  const onWrapperClick = (e) => {
    if (e.target.classList.contains("my-modal-wrapper")) onClose();
  };
  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div className={`my-modal modal--${state}`}>
            <div className="my-modal-wrapper" onClick={onWrapperClick}>
              <div className="my-modal-content">
                <Form onClose={onClose} />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Modal;
