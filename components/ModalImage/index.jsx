import React from "react";
import Image from "next/image";

const ModalMapping = ({ openModal, closeModal, title, img }) => {
  
  return (
    openModal && (
      <div className={`fixed top-0 z-40 inset-0 overflow-y-auto`}>
        <div className="flex justify-center min-h-screen p-0 text-center sm:block sm:p-0 bg-core-gray-200 bg-opacity-80 w-full mx-auto">
          <div className="mx-24 flex justify-start border-b-4 border-core-white-100 pt-8">
            <button
              onClick={() => closeModal(false)}
              className="mt-4 w-1/5 flex mb-4"
            >
              <Image
                width={40}
                height={25}
                priority
                src="/images/icon/back.png"
                className="w-52 h-52 rounded-xl"
              />
            </button>
            <div className="text-center text-core-white-100 my-auto text-3xl -ml-0 w-3/5">
              {title}
            </div>
          </div>
          <div className="mx-24 my-10">
            <Image
              width={400}
              height={600}
              priority
              src={img}
              className="w-52 h-52"
            />
          </div>
        </div>
      </div>
    )
  );
};
export default ModalMapping;
