import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Smoothscroll from "smoothscroll-polyfill";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Head from "next/head";
import Arrow from "../public/images/icon/arrow.svg";
import Key from "../public/images/icon/key.svg";

import ModalDrink from "../components/ModalDrink";
import ModalDessert from "../components/ModalDessert";
import ModalCatering from "../components/ModalCatering";
import ModalMapping from "../components/ModalMapping";
import ModalMusic from "../components/ModalMusic";
import ModalReality from "../components/ModalReality";
import ModalWorkshop from "../components/ModalWorkshop";
import ModalSurprise from "../components/ModalSurprise";
import ModalCustomCake from "../components/ModalCustomCake";
import ModalImage from "../components/ModalImage";
import ModalArt from "../components/ModalArt";
import ModalProject from "../components/ModalProject";
import ModalSchool from "../components/ModalSchool";

const ModalFood = dynamic(() => import("../components/ModalFood"));

const Home = () => {
  const [openModalFood, setOpenModalFood] = useState(false);
  const [openModalDessert, setOpenModalDessert] = useState(false);
  const [openModalDrink, setOpenModalDrink] = useState(false);
  const [openModalCatering, setOpenModalCatering] = useState(false);
  const [openModalMapping, setOpenModalMapping] = useState(false);
  const [openModalSurprise, setOpenModalSurprise] = useState(false);
  const [openModalReality, setOpenModalReality] = useState(false);
  const [openModalCustom, setOpenModalCustom] = useState(false);
  const [openModalMusic, setOpenModalMusic] = useState(false);
  const [openModalWorkshop, setOpenModalWorkshop] = useState(false);
  const [openModalImage, setOpenModalImage] = useState(false);
  const [openModalImagePromotion, setOpenModalImagePromotion] = useState(false);
  const [openModalArt, setOpenModalArt] = useState(false);
  const [openModalProject, setOpenModalProject] = useState(false);
  const [openModalSchool, setOpenModalSchool] = useState(false);

  const slideImageHuaHin = [
    {
      url: "/images/hua_hin/1.png",
      caption: "Slide 1",
    },
    {
      url: "/images/hua_hin/2.png",
      caption: "Slide 2",
    },
    {
      url: "/images/hua_hin/3.png",
      caption: "Slide 3",
    },
    {
      url: "/images/hua_hin/4.png",
      caption: "Slide 2",
    },
    {
      url: "/images/hua_hin/5.png",
      caption: "Slide 3",
    },
  ];
  const slideImageTaweewattana = [
    {
      url: "/images/tawee/1.png",
      caption: "Slide 1",
    },
    {
      url: "/images/tawee/2.png",
      caption: "Slide 2",
    },
    {
      url: "/images/tawee/3.png",
      caption: "Slide 3",
    },
    {
      url: "/images/tawee/4.png",
      caption: "Slide 2",
    },
    {
      url: "/images/tawee/5.png",
      caption: "Slide 3",
    },
  ];

  const properties = {
    infinite: true,
    prevArrow: (
      <div className="arrow-left transform rotate-180">
        <Image src="/images/icon/arrow.png" width="35" height="35" alt="" />
      </div>
    ),
    nextArrow: (
      <div className="arrow-right">
        <Image src="/images/icon/arrow.png" width="35" height="35" alt="" />
      </div>
    ),
  };

  const [branch, setBranch] = useState(slideImageHuaHin);
  const [nameBranch, setNameBranch] = useState("Hua-Hin");

  const changeToTawee = () => {
    setBranch(slideImageTaweewattana);
    setNameBranch("Taweewattana");
  };
  const changeToHuaHin = () => {
    setBranch(slideImageHuaHin);
    setNameBranch("Hua-Hin");
  };

  const handleClick = (e) => {
    e.preventDefault();
    document
      .getElementById(e.currentTarget.hash.slice(1))
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      Smoothscroll.polyfill();
      window.__forceSmoothScrollPolyfill__ = true;
    }
  }, []);

  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/fc/fc_home_regular.ttf"
          as="font"
          crossOrigin=""
        />
        <meta
          name="viewport"
          content="width=1440px, initial-scale=1, maximum-scale=1"
        />
        <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
        <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
        <script
          defer
          src="/your-path-to-fontawesome/js/fontawesome.js"
        ></script>
      </Head>
      <div className="bg-gradient-to-t from-core-gray-100 to-core-black-200">
        <div className="relative">
          <div id="floor6" className="ggg">
            <img src="images/icon/floor6.png" alt="" className="ggg" />
          </div>
          <div className="absolute bottom-text w-full text-center flex justify-center">
            <div className="w-40 ml-12">
              <button
                className="text-3xl underline"
                onClick={() => setOpenModalArt(true)}
              >
                Art Labs
              </button>
            </div>
            <div className="mr-6 ml-8">
              <button
                className="text-3xl underline w-80 text-center"
                onClick={() => setOpenModalProject(true)}
              >
                Projects
              </button>
            </div>
            <div className="w-40 mr-8">
              <button
                className="text-3xl underline"
                onClick={() => setOpenModalSchool(true)}
              >
                School
              </button>
            </div>
          </div>
        </div>
        {/* floor 5 */}
        <div
          className="container-header flex justify-end bg-core-white-100"
          id="floor5"
        >
          <h2 className="text_header">Our service</h2>
        </div>
        {/* 6st floor sigh */}
        <div className="relative">
          <div className="absolute sign">
            <div className="floor_sign bg-core-white-100" />
            <a href="#floor6" onClick={handleClick}>
              <div className="flo bg-core-white-100 rounded-lg">
                <Arrow className="w-6 h-20 mx-auto mt-5" />
                <div className="text-center">6th FL</div>
                <div className="text-center">Art Lab</div>
              </div>
            </a>
          </div>
          <div className="container-web mx-auto bg-core-white-100">
            <div className="w-full">
              <img src="images/icon/triangle.png" />
            </div>
            <div className="h-152 mt-12">
              <div className="flex justify-center mb-4">
                <div className="w-1/3 my-auto ml-10">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto p-6">
                      <Image
                        src="/images/icon/mapping.png"
                        width={144}
                        height={144}
                        className=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button
                      className="outline-none underline text-xl"
                      onClick={() => setOpenModalMapping(true)}
                    >
                      Projection - Mapping
                    </button>
                  </div>
                </div>
                <div className="w-1/3 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto p-6">
                      <Image
                        src="/images/icon/surprise.png"
                        width={144}
                        height={144}
                        className=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button
                      className="outline-none underline text-xl"
                      onClick={() => setOpenModalSurprise(true)}
                    >
                      Pop-up Surprise
                    </button>
                  </div>
                </div>
                <div className="w-1/3 my-auto mr-10">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto p-6">
                      <Image
                        src="/images/icon/reality.png"
                        width={144}
                        height={144}
                        className=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button
                      className="outline-none underline text-xl"
                      onClick={() => setOpenModalReality(true)}
                    >
                      Augmented Reality (AR)
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-1/3 my-auto ml-10">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto px-10 pt-6">
                      <Image
                        src="/images/icon/custom_cake.png"
                        width={120}
                        height={150}
                        className=""
                        layout="fixed"
                      />
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button
                      className="outline-none underline text-xl"
                      onClick={() => setOpenModalCustom(true)}
                    >
                      2D/3D custom cake
                    </button>
                  </div>
                </div>
                <div className="w-1/3 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto p-6">
                      <Image
                        src="/images/icon/reality.png"
                        width={144}
                        height={144}
                        className=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button
                      className="outline-none underline text-xl"
                      onClick={() => setOpenModalMusic(true)}
                    >
                      Music Box
                    </button>
                  </div>
                </div>
                <div className="w-1/3 mr-10">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto p-6">
                      <Image
                        src="/images/icon/workshop.png"
                        width={144}
                        height={144}
                        className=""
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button
                      className="outline-none underline text-xl"
                      onClick={() => setOpenModalWorkshop(true)}
                    >
                      Rental Space
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* floor 4 */}
        <div
          className="container-header flex justify-end bg-core-white-100"
          id="floor4"
        >
          <h2 className="text_header">Our Branches</h2>
        </div>
        {/* 5st floor sigh */}
        <div className="relative">
          <div className="absolute sign">
            <div className="floor_sign bg-core-white-100" />
            <a href="#floor5" onClick={handleClick}>
              <div className="flo bg-core-white-100 rounded-lg">
                <Arrow className="w-6 h-20 mx-auto mt-5" />
                <div className="text-center">5th FL</div>
                <div className="text-center">Service</div>
              </div>
            </a>
          </div>
          <div className="container-web mx-auto bg-core-white-100">
            <div className="w-full">
              <img src="images/icon/triangle.png" />
            </div>
            <div className="h-152 w-full my-20 2xl:my-20">
              <div className="flex justify-center items-center">
                <div className="w-1/5 my-auto mr-5">
                  <div className="my-4">
                    <button
                      className="text-2xl underline text-core-orange-100 font-bold"
                      onClick={changeToHuaHin}
                    >
                      Hua-Hin
                    </button>
                    <div>
                      <div className="flex">
                        <div className="my-auto">
                          <img
                            src="/images/icon/time.png"
                            className="w-4 h-4"
                            alt=""
                          />
                        </div>
                        <div className="my-auto mx-1">
                          Open Hours : 8 AM - 8 PM
                        </div>
                      </div>
                      <div className="flex">
                        <div className="my-auto">
                          <img
                            src="/images/icon/call.png"
                            className="w-4 h-4"
                            alt=""
                          />
                        </div>
                        <a
                          href="tel:0992511342"
                          className="my-auto mx-1 underline text-lg"
                        >
                          Tel : 099 251 1342
                        </a>
                      </div>
                      <div className="flex">
                        <div className="my-auto">
                          <img
                            src="/images/icon/location.png"
                            className="w-4 h-4"
                            alt=""
                          />
                        </div>
                        <a
                          href="https://g.page/YourNeighborsHuahin?share"
                          target="_blank"
                          className="my-auto mx-1 underline text-lg"
                        >
                          : Location
                        </a>
                      </div>
                      <div className="flex">
                        <div className="pt-1 px-1">
                          <img
                            src="/images/icon/facebook.png"
                            className="w-2 h-4"
                            alt=""
                          />
                        </div>
                        <a
                          href="https://www.facebook.com/YourNeighborsHuahin"
                          target="_blank"
                          className="my-auto mx-1 underline text-lg"
                        >
                          : Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    <button
                      className="text-2xl underline text-core-orange-100 font-bold"
                      onClick={changeToTawee}
                    >
                      Taweewattana
                    </button>
                    <div>
                      <div className="flex">
                        <div className="my-auto">
                          <img
                            src="/images/icon/time.png"
                            className="w-4 h-4"
                            alt=""
                          />
                        </div>
                        <div className="my-auto mx-1">
                          Open Hours : 10.30 AM - 8 PM
                        </div>
                      </div>
                      <div className="flex">
                        <div className="my-auto">
                          <img
                            src="/images/icon/call.png"
                            className="w-4 h-4"
                            alt=""
                          />
                        </div>
                        <a
                          href="tel:0972646848"
                          className="my-auto mx-1 underline text-lg"
                        >
                          Tel : 097 264 6848
                        </a>
                      </div>
                      <div className="flex">
                        <div className="my-auto">
                          <img
                            src="/images/icon/location.png"
                            className="w-4 h-4"
                            alt=""
                          />
                        </div>
                        <a
                          href="https://goo.gl/maps/fLJKJN4VzxCvdC218"
                          target="_blank"
                          className="my-auto mx-1 underline text-lg"
                        >
                          : Location
                        </a>
                      </div>
                      <div className="flex">
                        <div className="pt-1 px-1">
                          <img
                            src="/images/icon/facebook.png"
                            className="w-2 h-4"
                            alt=""
                          />
                        </div>
                        <a
                          href="https://www.facebook.com/yourneighborkanchana"
                          target="_blank"
                          className="my-auto mx-1 underline text-lg"
                        >
                          : Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 bg-core-white-100">
                  <div className="border border-core-black-100 mx-auto p-5 rounded-t-full bg-core-white-100">
                    <div className="border border-core-black-100 w-auto rounded-t-full">
                      <Fade {...properties}>
                        {branch.map((slideImage, index) => (
                          <div className="each-fade" key={index}>
                            <Image
                              src={slideImage.url}
                              alt=""
                              width={1000}
                              height={889}
                              layout="responsive"
                              className="rounded-t-full w-full h-1/3"
                            />
                          </div>
                        ))}
                      </Fade>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-40 text-center text-2xl bg-core-orange-100 text-core-white-100 py-1 px-3 rounded-b-2xl">
                      {nameBranch}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* floor 3 */}
        <div
          className="container-header flex justify-end bg-core-white-100"
          id="floor3"
        >
          <h2 className="text_header">Hungry ? : Our Menus</h2>
        </div>
        {/* 4st floor sigh */}
        <div className="relative">
          <div className="absolute sign">
            <div className="floor_sign bg-core-white-100" />
            <a href="#floor4" onClick={handleClick}>
              <div className="flo bg-core-white-100 rounded-lg">
                <Arrow className="w-6 h-20 mx-auto mt-5" />
                <div className="text-center">4th FL</div>
                <div className="text-center">Branches</div>
              </div>
            </a>
          </div>
          <div className="container-web mx-auto bg-core-white-100">
            <div className="w-full">
              <img src="images/icon/triangle.png" />
            </div>
            <div className="h-152 mt-12">
              <div className="flex justify-center mb-4">
                <div className="w-1/2">
                  <div className="mr-20 border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3 rounded-full">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full mx-auto rounded-full">
                      <div className="px-14 pt-14">
                        <Image
                          src="/images/icon/food.png"
                          width={80}
                          height={96}
                          priority
                          layout="fixed"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mr-20 ml-auto text-center w-56 my-3">
                    <button
                      className="outline-none underline text-xl"
                      onClick={() => setOpenModalFood(true)}
                    >
                      Foods
                    </button>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="ml-20 border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3 rounded-full">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full mx-auto rounded-full">
                      <div className="px-14 pt-10">
                        <Image
                          src="/images/icon/dessert.png"
                          width={80}
                          height={96}
                          priority
                          layout="fixed"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-20 w-56 text-center my-3">
                    <button
                      className="outline-none underline text-xl"
                      onClick={() => setOpenModalDessert(true)}
                    >
                      Desserts
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-1/2 my-auto">
                  <div className="mr-20 border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3 rounded-full">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full mx-auto rounded-full">
                      <div className="pt-8 px-16">
                        <Image
                          src="/images/icon/drink.png"
                          width={70}
                          height={120}
                          priority
                          layout="fixed"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mr-20 w-56 ml-auto text-center my-3">
                    <button
                      className="outline-none underline text-xl"
                      onClick={() => setOpenModalDrink(true)}
                    >
                      Drinks
                    </button>
                  </div>
                </div>
                <div className="w-1/2 my-auto">
                  <div className="ml-20 border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3 rounded-full">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full mx-auto rounded-full">
                      <div className="pt-12 px-10">
                        <Image
                          src="/images/icon/catering.png"
                          width={130}
                          height={96}
                          priority
                          layout="fixed"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-20 my-3 w-56 text-center">
                    <button
                      className="outline-none underline text-xl"
                      onClick={() => setOpenModalCatering(true)}
                    >
                      Catering
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* floor 2 */}
        <div
          className="container-header flex justify-end bg-core-white-100"
          id="floor2"
        >
          <h2 className="text_header">Secret ... just for you</h2>
        </div>
        {/* 3st floor sigh */}
        <div className="relative">
          <div className="absolute sign">
            <div className="floor_sign bg-core-white-100" />
            <a href="#floor3" onClick={handleClick}>
              <div className="flo bg-core-white-100 rounded-lg">
                <Arrow className="w-6 h-20 mx-auto mt-5" />
                <div className="text-center">3rd FL</div>
                <div className="text-center">Menus</div>
              </div>
            </a>
          </div>
          <div className="container-web mx-auto bg-core-white-100">
            <div className="w-full">
              <img src="images/icon/triangle.png" />
            </div>
            <div className="h-152 mt-6">
              <div className="flex justify-center">
                <div className="w-1/2 flex justify-end mx-10">
                  <div className="border border-core-black-100 bg-core-white-100 h-140 w-96 p-3 rounded-2xl">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto rounded-2xl">
                      <img
                        className="h-full rounded-2xl"
                        src="/images/promotions/montly.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex justify-start mx-10">
                  <div className="border border-core-black-100 bg-core-white-100 h-140 w-96 p-3 rounded-2xl">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto rounded-2xl">
                      <img
                        className="h-full rounded-2xl"
                        src="/images/promotions/promotion.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-1/2 flex justify-center">
                  <div className="text-center mt-4 ml-10">
                    <button
                      className="bg-core-orange-100 text-core-white-100 py-2 px-3 rounded-2xl text-xl"
                      onClick={() => setOpenModalImage(true)}
                    >
                      Montly Specials
                    </button>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="text-center mt-4 mr-10">
                    <button
                      className="bg-core-orange-100 text-core-white-100 py-2 px-3 rounded-2xl text-xl"
                      onClick={() => setOpenModalImagePromotion(true)}
                    >
                      Promotion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* floor 1 */}
        <div
          className="container-header flex justify-end bg-core-white-100"
          id="floor1"
        >
          <img className="w-your my-4" src="/images/your_neighbor.png" alt="" />
        </div>
        {/* 1st floor sigh */}
        <div className="relative">
          <div className="absolute sign">
            <div className="floor_sign bg-core-white-100" />
            <a href="#floor2" onClick={handleClick}>
              <div className="flo bg-core-white-100 rounded-lg">
                <Arrow className="w-6 h-20 mx-auto mt-5" />
                <div className="text-center">2nd FL</div>
                <div className="text-center">Specials</div>
              </div>
            </a>
          </div>
          <div className="container-web-floor-1 mx-auto bg-core-white-100">
            <div className="w-full">
              <img src="images/icon/triangle.png" />
            </div>
            <div className="mt-12">
              <div className="flex justify-center mt-19">
                <div className="w-2/5">
                  <div className="border border-core-black-100 bg-core-white-100 h-148 w-72 ml-auto p-3 rounded-t-5xl">
                    <div className="border relative border-core-black-100 bg-core-white-100 h-full w-full ml-auto rounded-t-5xl">
                      <div className="flex justify-center mt-8">
                        <Image
                          src="/images/icon/logo.png"
                          width={80}
                          height={100}
                          priority
                          layout="fixed"
                        />
                      </div>
                      <div className="my-4 text-center text-xl">Go to ...</div>
                      <div className="border-b border-core-black-100 mx-4 mb-3"></div>
                      <div className="flex justify-center">
                        <div>
                          <Arrow className="w-6 h-24 mr-2 mt-4" />
                        </div>
                        <div className="my-auto">
                          <a
                            className="underline text-sm my-1 block"
                            href="#floor2"
                            onClick={handleClick}
                          >
                            2nd fl. : Monthly Specials/Promotion
                          </a>
                          <a
                            className="underline text-sm my-1 block"
                            href="#floor3"
                            onClick={handleClick}
                          >
                            3rd fl. : Menus
                          </a>
                          <a
                            className="underline text-sm my-1 block text-left"
                            href="#floor4"
                            onClick={handleClick}
                          >
                            4th fl. : Branches
                          </a>
                          <a
                            className="underline text-sm my-1 block"
                            href="#floor5"
                            onClick={handleClick}
                          >
                            5th fl. : Service
                          </a>
                          <a
                            className="underline text-sm my-1 block"
                            href="#floor6"
                            onClick={handleClick}
                          >
                            6th fl. : Art Lab
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-end mr-4 mb-10">
                        <Key className="w-20" />
                      </div>
                      <div className="absolute bottom-0 w-full">
                        <div className="border-b border-core-black-100 mx-4 mt-0 text-center">
                          Stalk us here!
                        </div>
                        <div className="flex justify-center">
                          <a
                            href="https://www.facebook.com/YourNeighborsHuahin"
                            target="_blank"
                          >
                            <img
                              src="/images/icon/facebook.png"
                              className="w-3 h-6 mx-1 mt-1"
                              alt=""
                            />
                          </a>
                          <a
                            href="https://www.instagram.com/yourneighborsrestaurant/?hl=en"
                            target="_blank"
                          >
                            <img
                              src="/images/icon/ig.png"
                              className="w-6 h-6 mt-1 mx-1"
                              alt=""
                            />
                          </a>
                          <a href="tel:0972646848">
                            <img
                              src="/images/icon/tel.png"
                              className="w-6 h-6 mx-1 mt-1"
                              alt=""
                            />
                          </a>
                          <a
                            href="https://liff.line.me/1645278921-kWRPP32q/?accountId=673gzwba"
                            target="_blank"
                          >
                            <img
                              src="/images/icon/line.png"
                              className="w-6 h-6 mt-1 mx-1"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-3/5 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-96 w-96 mx-auto p-3 rounded-full">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full mx-auto rounded-full">
                      <div className="relative">
                        <a className="absolute inset-0 z-10 text-center text-sm pt-24 h-84 mx-8 opacity-0 hover:opacity-100 rounded-full duration-300 hover:bg-core-white-100">
                          ร้านอาหาร”คุณเพื่อนบ้าน” หรือ Your Neighbor’s
                          Restaurant ให้บริการ อาหารไทยร่วมสมัย
                          ขนมหวานสไตล์โฮมเม้ดที่ปรับเปลี่ยนทุกวัน
                          เครื่องดื่มเมนูต่าง ๆ แบบพรีเมี่ยม
                          และการเลือกใช้ผลิตภัณฑ์
                          ที่เป็นมิตรต่อสิ่งแวดล้อมในการประกอบอาหารและเป็นภาชนะ
                          ร้านอาหารคุณเพื่อนบ้านมีนโยบายที่อนุรักษ์ธรรมชาติ และ
                          ส่งเสริมการเป็นพื้นที่ของชุมชน
                          ให้แสดงงานศิลปะที่สร้างสรรค์ ในรูปแบบต่าง ๆ
                          โดยเฉพาะงานศิลปะที่ใช้วัสดุเหลือใช้
                          หรือผลงานที่นำเสนอเนื้อหาเกี่ยวกับการรักษาสิ่ง แวดล้อม
                          เพื่อเป็นการสนับสนุนศิลปินที่ทำงาน
                          ในแนวทางนี้ต่อไปอย่างยั่งยืน
                        </a>
                        <a
                          href="#"
                          className="relative hover:bg-core-white-100 rounded-full p-4 hover:opacity-0 flex justify-center"
                        >
                          <Image
                            src="/images/icon/logo_with_text.png"
                            width={320}
                            height={320}
                            priority
                            layout="fixed"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border w-full h-4 border-core-black-100 bg-core-white-100"></div>
        </div>
      </div>
      <ModalFood openModal={openModalFood} closeModal={setOpenModalFood} />
      <ModalDessert
        openModal={openModalDessert}
        closeModal={setOpenModalDessert}
      />
      <ModalDrink openModal={openModalDrink} closeModal={setOpenModalDrink} />
      <ModalCatering
        openModal={openModalCatering}
        closeModal={setOpenModalCatering}
      />
      <ModalMapping
        openModal={openModalMapping}
        closeModal={setOpenModalMapping}
      />
      <ModalCustomCake
        openModal={openModalCustom}
        closeModal={setOpenModalCustom}
      />
      <ModalMusic openModal={openModalMusic} closeModal={setOpenModalMusic} />
      <ModalWorkshop
        openModal={openModalWorkshop}
        closeModal={setOpenModalWorkshop}
      />
      <ModalSurprise
        openModal={openModalSurprise}
        closeModal={setOpenModalSurprise}
      />
      <ModalReality
        openModal={openModalReality}
        closeModal={setOpenModalReality}
      />
      <ModalImage
        openModal={openModalImage}
        closeModal={setOpenModalImage}
        img="/images/Promotions/Montly.png"
        title="Montly Specials"
      />
      <ModalImage
        openModal={openModalImagePromotion}
        closeModal={setOpenModalImagePromotion}
        img="/images/Promotions/Promotion.png"
        title="Promotions"
      />
      <ModalArt
        openModal={openModalArt}
        closeModal={setOpenModalArt}
        title="Art Labs"
      />
      <ModalProject
        openModal={openModalProject}
        closeModal={setOpenModalProject}
        title="Project"
      />
      <ModalSchool
        openModal={openModalSchool}
        closeModal={setOpenModalSchool}
        title="School"
      />
    </div>
  );
};

export default Home;
