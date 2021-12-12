import React from "react";
import Image from "next/image";

const ModalDrink = ({ openModal, closeModal }) => {
  const handleClick = (e) => {
    e.preventDefault();
    document
      .getElementById(e.currentTarget.hash.slice(1))
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    openModal && (
      <div className={`fixed top-0 z-40 inset-0 overflow-y-auto`}>
        <div
          className="flex justify-center min-h-screen p-0 text-center sm:block sm:p-0 bg-core-gray-200 bg-opacity-80 w-full mx-auto"
          id="Coffee"
        >
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
              Drinks Menus
            </div>
          </div>
          <div className="text-right text-core-white-100 mx-24">
            *ราคาอาหารมีการเปลี่ยนแปลงตลอด
            โปรดสอบถามพนักงานสาขาที่ต้องการใช้บริการ
          </div>
          <div className="top-0 sticky z-20 bg-core-gray-200 bg-opacity-20">
            <div className="flex justify-around mx-60">
              <a
                className="text-core-white-100 text-2xl underline my-4"
                href="#Coffee"
                onClick={handleClick}
              >
                Coffee & Cocoa
              </a>
              <a
                className="text-core-white-100 text-2xl underline my-4"
                href="#Milk"
                onClick={handleClick}
              >
                Milk & Tea
              </a>
              <a
                className="text-core-white-100 text-2xl underline my-4"
                href="#Sparking"
                onClick={handleClick}
              >
                Sparking Drinks & Juices
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                เอสเพรสโซ่ ออริจินัล ช็อต คอมปานา มัคติเอโต้ Espresso Original
                shot Compana Macchiato
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/01.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                เอสเพรสโซ่เย็น ไทยสไตล์ Thai-style Iced Espresso
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/02.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                อเมริกาโน่ Americano
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/03.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                คาปูชิโน่ Cappuchino
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/04.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                คาเฟ่ลาเต้ Cafe' Latte
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/05.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                คาราเมล มัคคิเอโต้ Caramel Macchiato
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/06.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                บัตเตอร์สก็อต มัคคิเอโต้ Butterscoth Macchiato
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/07.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                มอคค่า ลาเต้ Mocha Latte
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/08.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                โกโก้ Cocoa
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/09.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                โกโก้กล้วย Cocoa Banana
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/10.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                มอคค่า กราเซีย Mocha Grazia
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/11.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                ไวท์ช็อค มอคค่า White choc Mocha
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/12.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                คอฟฟี่ ครันช์ Coffee Crushed
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/13.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                กรีนที ลาเต้ Green Tea Latte
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/14.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                กรีนที สวีท เอสเพรสโซ่ Green Tea Sweet Espresso
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/15.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="w-full h-10" id="Milk"></div>
          <div className="text-center my-8 text-core-white-100 text-xl underline">
            Milk & Tea
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                นมไวท์ช็อคโกแลต White Chocolate Milk
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/16.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                โอรีโอปั่น Oreo Milk Frappe
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/17.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                นมชมพู/ นมเขียว Prink or Green Milk
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/18.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                ชาเขียวนม Green Tea with Milk
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/19.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                ชาไทยนม Thai Tea with Milk
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/20.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                ชาเขียวนมโอริโอ Green Tea with Oreo
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/21.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                นมกล้วยปั่น Banana Milky
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/22.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                คาราเมลครีม Caramel milky cream
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/23.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                ชาไม่ใส่นม Tea without Milk
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/25.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                ชามะนาว Lemon Tea
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/27.png"
                    className="w-52 h-52 rounded-xl"
                  />
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
          <div className="w-full h-10" id="Sparking"></div>
          <div className="text-center my-8 text-core-white-100 text-xl underline">
            Sparking Drinks & Juices
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                โซดาผลไม้ (กีวี / สตรอเบอร์รี่ / ลิ้นจี่ / มะม่วง / เมลอน /
                บ๊วยญี่ปุ่น / เสาวรส) Fruity Soda (Kiwi / Strawberry / Lychee /
                Mango / Melon / Japaness Plum / Passion Fruit)
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/30.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                ทรอปิคัล วาเคชั่น ที (มะม่วง / เสาวรส) Tropical Vacation Tea
                (Mango / Passion Fruit)
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/31.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                แมงโก้แพชชั่นเดท Mango Passion Date
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/32.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                กระเจี๊ยบพุทราจีน Roselle mixed with Chinese Jujube
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/33.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                อัญชัญมะนาว Butterfly Pea Flower and Lime Honey
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/34.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                ตะไคร้ใบเตย Lemongrass Pandan
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/35.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                อิตาเลี่ยนครีมโซดา (กีวี / สตรอเบอร์รี่ / ลิ้นจี่ / มะม่วง/
                เมลอน / บ๊วยญี่ปุ่น / เสาวรส Italian Cream Soda (Kiwi /
                Strawberry / Lychee / Mango / Melon / Japaness Plurm / Passion
                Fruit)
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/36.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                โยเกิร์ตสมูทตี้ (สตรอเบอร์รี่ / มิกซ์เบอรี่) Yogurt Smootthie
                (Strawberry / Mix-berries)
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/37.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                สตรอเบอร์รี่ปั่น Strawberry Frozen
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/38.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-xl bg-opacity-60 duration-300">
                น้ำผึ้งมะนาว Honey apd Lemon
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/39.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                น้ำผึ้งมะนาวโซดา Honey and Lemon Soda
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/40.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                แดง/เขียว/บูลโซดา Red / Green / Blue soda
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/30.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                น้ำอัดลม Soft drirk
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/42.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300 rounded-xl">
                น้ำเปล่า / โซดา (ขวด) Water / Soda(bottle)
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <Image
                    width={200}
                    height={208}
                    priority
                    src="/images/drink/43.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
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
export default ModalDrink;
