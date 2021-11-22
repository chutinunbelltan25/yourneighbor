import React, { useState, useEffect } from "react";
import Smoothscroll from "smoothscroll-polyfill";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Head from "next/head";
import LogoWithText from "../public/images/icon/logo_with_text.svg";
import Logo from "../public/images/icon/logo.svg";
import Food from "../public/images/icon/food.svg";
import Drink from "../public/images/icon/drink.svg";
import Catering from "../public/images/icon/catering.svg";
import Dessert from "../public/images/icon/dessert.svg";
import Mapping from "../public/images/icon/mapping.svg";
import Surprise from "../public/images/icon/surprise.svg";
import Reality from "../public/images/icon/reality.svg";
import CustomCake from "../public/images/icon/custom_cake.svg";
import Music from "../public/images/icon/music.svg";
import Workshop from "../public/images/icon/workshop.svg";
import Arrow from "../public/images/icon/arrow.svg";
import Key from "../public/images/icon/key.svg";
import Line from "../public/images/icon/line.svg";
import Facebook from "../public/images/icon/facebook.svg";
import Tel from "../public/images/icon/tel.svg";
import Ig from "../public/images/icon/ig.svg";

import ModalFood from "../components/ModalFood";
import ModalDrink from "../components/ModalDrink";
import ModalDessert from "../components/ModalDessert";
import ModalCatering from "../components/ModalCatering";

const Home = () => {
  const [openModalFood, setOpenModalFood] = useState(false);
  const [openModalDessert, setOpenModalDessert] = useState(false);
  const [openModalDrink, setOpenModalDrink] = useState(false);
  const [openModalCatering, setOpenModalCatering] = useState(false);

  const slideImageHuaHin = [
    {
      url: "images/floor4/hua_hin/1.jpg",
      caption: "Slide 1",
    },
    {
      url: "images/floor4/hua_hin/2.jpg",
      caption: "Slide 2",
    },
    {
      url: "images/floor4/hua_hin/3.jpg",
      caption: "Slide 3",
    },
  ];
  const slideImageTaweewattana = [
    {
      url: "images/floor4/tawee/1.jpg",
      caption: "Slide 1",
    },
    {
      url: "images/floor4/tawee/2.jpg",
      caption: "Slide 2",
    },
    {
      url: "images/floor4/tawee/3.jpg",
      caption: "Slide 3",
    },
  ];

  const [branch, setBranch] = useState(slideImageHuaHin);

  const handleClick = (e) => {
    e.preventDefault();
    document
      .getElementById(e.currentTarget.hash.slice(1))
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("polyfilled");
      Smoothscroll.polyfill();
      window.__forceSmoothScrollPolyfill__ = true;
    }
  }, []);

  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="viewport"
          content="width=1440px, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <div className="bg-gradient-to-t from-core-gray-100 to-core-black-200">
        <div id="floor6">
          <img src="images/icon/floor6.png" alt=""/>
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
            <div className="h-152">
              <div className="flex justify-center">
                <div className="w-1/3 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto">
                      <Mapping className="w-36 mx-auto mt-6" />
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button className="outline-none underline">
                      Projection Mapping
                    </button>
                  </div>
                </div>
                <div className="w-1/3 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto">
                      <Surprise className="w-36 mx-auto mt-8" />
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button className="outline-none underline">
                      Pop-up Surprise
                    </button>
                  </div>
                </div>
                <div className="w-1/3 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto">
                      <Reality className="w-36 mx-auto mt-8" />
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button className="outline-none underline">
                      Augmented Reality (AR)
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-1/3 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto">
                      <CustomCake className="w-28 mx-auto mt-6" />
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button className="outline-none underline">
                      2D/3D custom cake
                    </button>
                  </div>
                </div>
                <div className="w-1/3 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto">
                      <Music className="w-36 mx-auto mt-8" />
                    </div>
                  </div>
                  <div className="text-center my-4">
                    <button className="outline-none underline">
                      Music Box
                    </button>
                  </div>
                </div>
                <div className="w-1/3 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto">
                      <Workshop className="w-36 mx-auto mt-8" />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="outline-none underline">Workshop</button>
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
            <div className="h-152">
              <div className="flex justify-center">
                <div className="w-1/5 my-auto mr-5">
                  <div className="my-4">
                    <button
                      className="text-xl underline text-core-orange-100 font-bold"
                      onClick={() => setBranch(slideImageHuaHin)}
                    >
                      Hua-Hin
                    </button>
                    <div>
                      Open Hours : 8 AM - 8 PM
                      <br />
                      Tel : 099 251 1342
                      <br />: Location
                    </div>
                  </div>
                  <div className="my-4">
                    <button
                      className="text-xl underline text-core-orange-100 font-bold"
                      onClick={() => setBranch(slideImageTaweewattana)}
                    >
                      Taweewattana
                    </button>
                    <div>
                      Open Hours : 10.30 AM - 8 PM
                      <br />
                      Tel : 097 264 6848
                      <br />: Location
                    </div>
                  </div>
                </div>
                <div className="w-3/5 bg-core-white-100">
                  <div className="border border-core-black-100 mx-auto p-5 rounded-t-full bg-core-white-100">
                    <div className="border border-core-black-100 w-auto rounded-t-full">
                      <Fade>
                        {branch.map((slideImage, index) => (
                          <div className="each-fade" key={index}>
                            <img src={slideImage.url} alt="" className="rounded-t-full" />
                          </div>
                        ))}
                      </Fade>
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
                <div className="text-center">Specials</div>
              </div>
            </a>
          </div>
          <div className="container-web mx-auto bg-core-white-100">
            <div className="w-full">
              <img src="images/icon/triangle.png" />
            </div>
            <div className="h-152">
              <div className="flex justify-center">
                <div className="w-1/2 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3 rounded-full">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full mx-auto rounded-full">
                      <div className="flex justify-center mt-12">
                        <Food className="w-24" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center my-3">
                    <button
                      className="outline-none underline"
                      onClick={() => setOpenModalFood(true)}
                    >
                      Foods
                    </button>
                  </div>
                </div>
                <div className="w-1/2 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3 rounded-full">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full mx-auto rounded-full">
                      <div className="flex justify-center mt-6">
                        <Dessert className="w-24" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center my-3">
                    <button
                      className="outline-none underline"
                      onClick={() => setOpenModalDessert(true)}
                    >
                      Desserts
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-1/2 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3 rounded-full">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full mx-auto rounded-full">
                      <div className="flex justify-center mt-6">
                        <Drink className="w-24" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center my-3">
                    <button
                      className="outline-none underline"
                      onClick={() => setOpenModalDrink(true)}
                    >
                      Drinks
                    </button>
                  </div>
                </div>
                <div className="w-1/2 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-56 w-56 mx-auto p-3 rounded-full">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full mx-auto rounded-full">
                      <div className="flex justify-center mt-12">
                        <Catering className="w-36" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center my-3">
                    <button
                      className="outline-none underline"
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
            <div className="h-152">
              <div className="flex justify-center">
                <div className="w-1/2 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-120 w-80 mx-auto p-3 rounded-2xl">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto rounded-2xl">
                      <img
                        className="h-full rounded-2xl"
                        src="/images/Promotions/Montly.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="bg-core-orange-100 text-core-white-100 py-2 px-3 rounded-2xl">
                      Montly Specials
                    </button>
                  </div>
                </div>
                <div className="w-1/2 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-120 w-80 mx-auto p-3 rounded-2xl">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto rounded-2xl">
                      <img
                        className="h-full rounded-2xl"
                        src="/images/Promotions/Promotion.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="bg-core-orange-100 text-core-white-100 py-2 px-3 rounded-2xl">
                      Promotion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* floor 1 */}
        <div className="container-header flex justify-end bg-core-white-100" id="floor1">
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
                <div className="text-center">Branches</div>
              </div>
            </a>
          </div>
          <div className="container-web-floor-1 mx-auto bg-core-white-100">
            <div className="w-full">
              <img src="images/icon/triangle.png" />
            </div>
            <div className="">
              <div className="flex justify-center mt-10">
                <div className="w-2/5">
                  <div className="border border-core-black-100 bg-core-white-100 h-148 w-72 ml-auto p-3 rounded-sm">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full ml-auto rounded-sm">
                      <div className="flex justify-center mt-8">
                        <Logo className="w-20" />
                      </div>
                      <div className="my-4 text-center">Go to ...</div>
                      <div className="border-b border-core-black-100 mx-4 mb-3"></div>
                      <div className="flex justify-center">
                        <div className="">
                          <Arrow className="w-6 h-24 mx-1 mt-2" />
                        </div>
                        <div className="my-auto">
                          <a
                            className="underline text-xs my-1 block"
                            href="#floor2"
                            onClick={handleClick}
                          >
                            2nd fl. : Branches
                          </a>
                          <a
                            className="underline text-xs my-1 block"
                            href="#floor3"
                            onClick={handleClick}
                          >
                            3rd fl. : Menus
                          </a>
                          <a
                            className="underline text-xs my-1 block text-left"
                            href="#floor4"
                            onClick={handleClick}
                          >
                            4th fl. : Monthly Specials/Promotion
                          </a>
                          <a
                            className="underline text-xs my-1 block"
                            href="#floor5"
                            onClick={handleClick}
                          >
                            5th fl. : Service
                          </a>
                          <a
                            className="underline text-xs my-1 block"
                            href="#floor6"
                            onClick={handleClick}
                          >
                            6th fl. : Art Lab
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Key className="w-20" />
                      </div>
                      <div className="border-b border-core-black-100 mx-4 mt-32 mb-3 text-center">
                        Stalk us here!
                      </div>
                      <div className="flex justify-center">
                        <Facebook className="w-6 h-6 mx-1 mt-1" />
                        <Ig className="w-6 h-8 mx-1" />
                        <Tel className="w-6 h-8 mx-1" />
                        <Line className="w-6 h-8 mx-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-3/5 my-auto">
                  <div className="border border-core-black-100 bg-core-white-100 h-96 w-96 mx-auto p-3 rounded-full">
                    <div className="border border-core-black-100 bg-core-white-100 h-full w-full mx-auto rounded-full">
                      <div className="relative">
                        <a className="absolute inset-0 z-10 text-center text-xs pt-24 mx-8 opacity-0 hover:opacity-100 rounded-full duration-300 hover:bg-core-white-100">
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
                          className="relative hover:bg-core-white-100 rounded-full  hover:opacity-0"
                        >
                          <LogoWithText />
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
    </div>
  );
};
export default Home;
