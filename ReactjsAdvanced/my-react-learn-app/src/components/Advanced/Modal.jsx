import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen, onClose }) => {

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;