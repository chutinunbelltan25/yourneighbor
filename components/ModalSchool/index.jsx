import React from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ModalArt = ({ openModal, closeModal, title }) => {
  const slideImage = [
    {
      url: "/images/school/1.png",
      caption: "Slide 1",
    },
    {
      url: "/images/school/2.png",
      caption: "Slide 2",
    },
    {
      url: "/images/school/3.png",
      caption: "Slide 3",
    },
    {
      url: "/images/school/4.png",
      caption: "Slide 2",
    },
    {
      url: "/images/school/5.png",
      caption: "Slide 3",
    },
  ];
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
            <div className="text-center text-core-white-100 my-auto text-xl -ml-0 w-3/5">
              {title}
            </div>
          </div>
          <div className="mx-24 my-10 bg-school-bg bg-no-repeat bg-center h-min-screen h-200">
            <div className="flex justify-center pt-20">
              <div className="mx-4 underline text-3xl">YNAC School</div>
            </div>
            <div className="w-70 2xl:w-216 mx-auto pt-1">
            <Slide>
              {slideImage.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <img
                    src={slideImage.url}
                    alt=""
                    className="w-full"
                  />
                </div>
              ))}
            </Slide>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ModalArt;
