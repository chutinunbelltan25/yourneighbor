import React from "react";

const ModalDessert = ({openModal, closeModal}) => {
  return (
    <div className={`${openModal === true ? "block modal" : "hidden"}`}>
      <div className="modal-container">
        <div className="mt-48">
          <button onClick={() => closeModal(false)}>close</button>
        </div>
        <div className="text-center text-core-white-100 border-b-2 border-core-white-100 text-xl">
        Dessert Menus
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
              ไก่กอย่างกับเส้นหมี่ และหอมเจียว Grilled golek chicken with
              vermicelli and fried shallots
            </a>
            <a href="#" className="relative">
              <div className="h-52 flex flex-wrap content-center">
                <img
                  src="/images/food/001.png"
                  className="w-52 h-52 rounded-xl"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalDessert;
