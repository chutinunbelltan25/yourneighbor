import React from "react";
import Image from "next/image";

const ModalArt = ({ openModal, closeModal, title }) => {
  const slidesArt = [
    {
      url: "/images/art_lab/1.png",
      caption: "Slide 1",
    },
    {
      url: "/images/art_lab/2.png",
      caption: "Slide 2",
    },
    {
      url: "/images/art_lab/3.png",
      caption: "Slide 3",
    },
  ];
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
              {title}
            </div>
          </div>
          <div className="overflow-y-auto h-43">
            <div className="mx-24 my-10 bg-art-bg bg-no-repeat bg-center h-min-screen h-200">
              <div className="flex justify-center pt-20 mx-24">
                <div className="w-148">
                  <div className="flex justify-end">
                    <div className="m-2">
                      <Image
                        width={200}
                        height={200}
                        priority
                        src={"/images/art_lab/1.png"}
                        className="w-52 h-52 rounded-xl"
                      />
                    </div>
                    <div className="m-2">
                      <Image
                        width={200}
                        height={200}
                        priority
                        src={"/images/art_lab/2.png"}
                        className="w-52 h-52 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="m-2">
                      <Image
                        width={200}
                        height={200}
                        priority
                        src={"/images/art_lab/3.png"}
                        className="w-52 h-52 rounded-xl"
                      />
                    </div>
                    <div className="m-2">
                      <Image
                        width={200}
                        height={200}
                        priority
                        src={"/images/art_lab/4.png"}
                        className="w-52 h-52 rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-112 text-white px-10 my-auto">
                  <div className="underline text-3xl mb-4">Art Labs</div>
                  <div className="text-lg text-left">
                    Your Neighbor’s Art Collective (YNAC) is a group of
                    independent artists working together to research and
                    experiment for creative solutions to solve the trash and
                    environmental issues. In this initial step, the art
                    collective seeks for ways to collaborate with SME businesses
                    like, the Your Neighbor’s Restaurant, to reduce the trash
                    that is produced from the business. Artists and the company
                    sort through everyday trash and set a goal together to
                    create artworks from these trash for permanent exhibiting at
                    each of the company’s branches.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ModalArt;
