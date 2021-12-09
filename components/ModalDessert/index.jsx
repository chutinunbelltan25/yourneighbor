import React from "react";
import Image from "next/image";

const ModalDessert = ({ openModal, closeModal }) => {
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
              Desserts Menus
            </div>
          </div>
          <div className="text-right text-core-white-100 mx-24">
            *ราคาอาหารมีการเปลี่ยนแปลงตลอด
            โปรดสอบถามพนักงานสาขาที่ต้องการใช้บริการ
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                กล้วย + เครป (ดั้งเดิม/ ช็อคโกแลต/ ชาเขียว) Banana + Crape
                (Original/Chocolate/Green tea)
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/dessert/1.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a href="#" className="relative">
                <div className="justify-center px-3 w-200 text-core-white-100 h-208 flex flex-wrap content-center bg-core-gray-200 rounded-xl">
                  แอปเปิ้ล + เครป (ดั้งเดิม/ ช็อคโกแลต/ ชาเขียว) Apple + Crape
                  (Original/Chocolate/Green tea)
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                สตรอวเบอร์รี่ + เครป (รสดั้งเดิม/ ช็อคโกแลต/ ชาเขียว) Strawberry
                + Crape (Original/Chocolate/Green tea)
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/dessert/3.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                ผลไม้รวม (กล้วย สตอวเบอร์รี่ แอปเปิ้ล บลูเบอร์รี่) +
                เครป(ดั้งเดิม/ ช็อคโกแลต/ ชาเขียว) Mix fruit (Banana,
                Strawberry, Apple, Blueberry) + Crape (Original/Chocolate/Green
                tea)
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/dessert/4.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                บลูเบอรร์รี่บัตเตอร์เค้ก และไอศกรีม สตรอวเบอร์รี่โยเกิร์ต
                Blueberry Butter cake with strawberry yogurt icecream
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/dessert/5.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                นูเทล่าโอริโอ้และกล้วย Nutella Mousse Oreo tart with banana
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/dessert/6.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                ช็อคโกแลตเค้กไร้แป้ง กับไอศกรีมเชอร์เบต Flaouress Chocolate cake
                with Sherbet icecream
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/dessert/7.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a href="#" className="relative">
                <div className="justify-center px-3 w-200 text-core-white-100 h-208 flex flex-wrap content-center bg-core-gray-200 rounded-xl">
                  ทาร์ตเลม่อนชีส และไอศกรีมช็อคโกแลต Lemon cheese tart with
                  Chocolate icecream
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a href="#" className="relative">
                <div className="justify-center px-3 w-200 text-core-white-100 h-208 flex flex-wrap content-center bg-core-gray-200 rounded-xl">
                  เค้กส้มและชาร้อน The original orange cake served with hot
                  english tea
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a href="#" className="relative">
                <div className="justify-center px-3 w-200 text-core-white-100 h-208 flex flex-wrap content-center bg-core-gray-200 rounded-xl">
                  ไอศกรีม(ลูก) Icecream (scoop)
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a href="#" className="relative">
                <div className="justify-center px-3 w-200 text-core-white-100 h-208 flex flex-wrap content-center bg-core-gray-200 rounded-xl">
                  บานาน่าสปลิต Banana Split
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                บัดดี้บราวนี่ Buddy Brownie
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/dessert/13.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                โอริโอ้ซันเดย์ Oreo Sundae
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/dessert/14.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a href="#" className="relative">
                <div className="justify-center px-3 w-200 text-core-white-100 h-208 flex flex-wrap content-center bg-core-gray-200 rounded-xl">
                  มิล์คเชค Ice cream milkshake
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                สตรอวเบอร์รี่ซันเดย์ Strawberry fruity sundae
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/dessert/16.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a href="#" className="relative">
                <div className="justify-center px-3 w-200 text-core-white-100 h-208 flex flex-wrap content-center bg-core-gray-200 rounded-xl">
                  ไอศกรีมโฟล้ต (รูทเบียร์) Ice cream float (Root beer)
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-200 h-208 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-200 h-208 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ModalDessert;
