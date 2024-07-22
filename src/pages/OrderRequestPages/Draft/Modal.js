import React, { useEffect, useRef } from 'react';
import WhiteButton from '../../../Components/UI/Buttons/WhiteButton';
import BlueButton from '../../../Components/UI/Buttons/BlueButton';
import { NavLink } from 'react-router-dom';

const Modal = ({ isOpen, onClose, onOkay, noOfItems, kitchen, setShowitems }) => {
  const modalRef = useRef(null);

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
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <p className="">Your Indent Request Sheet</p>
            <p className="">successfully Submitted to stores</p>

            <div class="flex mt-10 items-center">
                <div class="text-2xl font-bold">{kitchen}</div>
                <div class="text-2xl ml-10">{noOfItems} items</div>
            </div>

            <div class="flex justify-between gap-6 m-6">
                <div onClick={() => setShowitems(false)}>
                <div onClick={onOkay}><WhiteButton text="Done" /></div>
                </div>

                <div onClick={onClose}>
                    <NavLink to="/OrderRequest/RaisedToStore">
                    <div onClick={() => (setShowitems(false),onClose)}><BlueButton text="Check Status" onClick={onClose} /></div>            
                    </NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;