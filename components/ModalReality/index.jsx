import React from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ModalMapping = ({ openModal, closeModal }) => {
  const slideImage = [
    {
      url: "r6VgZdxJ84o",
      caption: "Slide 1",
    },
    {
      url: "zCYnfKECCm0",
      caption: "Slide 2",
    },
  ];
  const fadeProperties = {
    autoplay: false,
    indicators: true,
  };
  return (
    openModal && (
      <div
        className={`fixed top-0 z-40 inset-0 overflow-y-auto bg-core-gray-200 bg-opacity-80`}
      >
        <div className="modal-center w-full">
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
              Augmented Reality (AR)
            </div>
          </div>
          <div className="overflow-y-auto h-45">
            <div className="mx-60 mt-10 mb-4">
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
            <div className="flex justify-center mx-60 mt-0 pb-8">
              <div className="w-1/3 my-auto ml-8 mr-4 text-core-white-100 text-2xl text-center">
                Augmented Reality (AR) and Cake
              </div>
              <div className="w-2/3 text-center my-auto text-core-white-100 mx-10 text-lg">
                Add more magic to your cake with Augmented Reality that you can
                present to your loved one within your smartphone! We are a
                one-stop-service for the ‘Augmented Reality and Cake’ AKA ‘AR
                Cake’ service that makes it easy for you to customize image,
                text, and sound into your AR and play it with your cake. We also
                offer two custom wishing cards so you can keep playing the AR
                even when your cake is gone into your tummy =).
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ModalMapping;
