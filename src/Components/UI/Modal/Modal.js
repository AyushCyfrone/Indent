import React, { useEffect, useRef } from 'react';
import WhiteButton from '../Buttons/WhiteButton';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, noOfItems, setShowitems, Message }) => {
  const modalRef = useRef(null);

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/Indent");
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white w-full h-2/5 max-w-lg rounded-lg shadow-lg p-6">
        <div class="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4">{Message}</h2>
            <p className="">Your Indent Request Sheet</p>
            <p className="">successfully Raised</p>

            <div class="flex mt-10 items-center">
                <div class="text-2xl ">{noOfItems} {(noOfItems === 1) ? "Item" : "Items"} Raised</div>
            </div>

            <div class="flex justify-between gap-6 m-6">
                <div onClick={() => setShowitems(false)}>
                <div onClick={() => ( handleNavigate())}><WhiteButton text="Done" /></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;