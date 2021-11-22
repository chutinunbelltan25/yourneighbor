import React from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ModalCatering = ({ openModal, closeModal }) => {
  const slideImage = [
    {
      url: "/images/dessert/1.png",
      caption: "Slide 1",
    },
    {
      url: "/images/dessert/4.png",
      caption: "Slide 2",
    },
    {
      url: "/images/dessert/3.png",
      caption: "Slide 3",
    },
  ];
  return (
    openModal && (
      <div className={`fixed top-0 z-40 inset-0 overflow-y-auto`}>
        <div className="flex justify-center min-h-screen p-0 text-center sm:block sm:p-0 bg-core-gray-200 bg-opacity-80 w-9/12 mx-auto">
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
            <div className="text-center text-core-white-100 my-auto text-xl -ml-0 w-3/5">
              Catering Service
            </div>
          </div>
          <div className="text-center text-core-white-100 mx-24 my-6">
            We are an experienced catering service that offers various products
            for your party from snack boxes, lunch boxes, cocktail food, to
            dining table decoration. Our delicious food boxes have many options
            that are suitable for your event and always deliver on time to your
            destination. For any unique and special event, our team includes
            skillful professionals that can help make your vision come true.
            Please contact us for more information !
          </div>
          <div className="mx-24">
            <Slide>
              {slideImage.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <img
                    src={slideImage.url}
                    alt=""
                    className="w-4/5 h-3/5"
                  />
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    )
  );
};
export default ModalCatering;
