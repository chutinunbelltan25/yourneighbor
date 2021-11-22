import React from "react";

const ModalDrink = ({ openModal, closeModal }) => {
  return (
    openModal && (
      <div
        className="fixed z-40 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen p-0 text-center sm:block sm:p-0">
          <div
            className="inline-block align-middle bg-secondary-white overflow-hidden shadow-xl transform transition-all sm:align-middle w-10/12 h-5/6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="flex justify-center items-center bg-core-gray-200 p-6 pb-4 w-full h-full">
              <div className="mt-48">
                <button onClick={() => closeModal(false)}>close</button>
              </div>
              <div className="text-center text-core-white-100 border-b-2 border-core-white-100 text-xl">
                Drinks Menus
              </div>
              <div className="text-core-white-100 text-lg underline mx-10 my-6">
                Recommended
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ModalDrink;
