import React from "react";

const ModalCatering = ({openModal, closeModal}) => {
  return (
    <div className={`${openModal === true ? "block modal" : "hidden"}`}>
      <div className="modal-container">
        <div className="mt-48">
          <button onClick={() => closeModal(false)}>close</button>
        </div>
        <div className="text-center text-core-white-100 border-b-2 border-core-white-100 text-xl">
        Catering Service
        </div>
        {/* <div className="flex justify-center">
          <div className="relative">
            <a className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
              ไก่กอย่างกับเส้นหมี่ และหอมเจียว
            </a>
            <a href="#" className="relative">
              <div className="h-48 flex flex-wrap content-center">
                <img src="/images/food/001.svg" />
              </div>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default ModalCatering;
