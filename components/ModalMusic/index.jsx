import React from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ModalMapping = ({ openModal, closeModal }) => {
  const slideImage = [
    {
      url: "2ZOcX8BGCYA",
      caption: "Slide 1",
    },
  ];
  const fadeProperties = {
    autoplay: false,
    indicators: true,
  };
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
            Music
            </div>
          </div>
          <div className="mx-60 my-10">
            <Slide {...fadeProperties}>
              {slideImage.map((slideImage, index) => (
                <div className="each-slide flex justify-center" key={index}>
                  <iframe
                    width="900"
                    height="550"
                    src={`https://www.youtube.com/embed/${slideImage.url}?autoplay=1&mute=1&enablejsapi=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
              ))}
            </Slide>
          </div>
          <div className="flex justify-center mx-80 mt-8 pb-8">
            <div className="w-1/3 my-auto mx-2 text-core-white-100 text-2xl">
              Music box
            </div>
            <div className="w-2/3 text-center my-auto text-core-white-100 mx-10 text-lg">
              Music can help you send the right message to your cake receiver!
              We offer a feature to add music code onto your cake so you can
              scan the code and play your selected audio on your smartphone with
              the Spotify app. This feature definitely makes your cake memorable
              and touching.
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ModalMapping;