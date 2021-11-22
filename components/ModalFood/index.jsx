import React from "react";

const ModalFood = ({ openModal, closeModal }) => {
  return (
    openModal && (
      <div className={`fixed top-0 z-40 inset-0 overflow-y-auto`}>
        <div className="flex justify-center min-h-screen p-0 text-center sm:block sm:p-0 bg-core-gray-200 bg-opacity-80 w-10/12 mx-auto">
          <div className="">
            <button onClick={() => closeModal(false)}>close</button>
          </div>
          <div className="text-center text-core-white-100 border-b-2 border-core-white-100 text-xl">
            Food Menus
          </div>
          <div className="text-core-white-100 text-lg underline mx-10 my-6">
            Recommended
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ไก่กอย่างกับเส้นหมี่ และหอมเจียว Grilled golek chicken with
                vermicelli and fried shallots
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/001.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวไข่ข้นกับ กุ้งคั่วพริกเกลือ Creamy omelet fried with shrimps
                served on rice
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/002.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวผัดชะอม กากหมู ปลาทูทอด Fried rice with Cha-om, crackling
                and deep-fried Mackerel
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/003.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                แองเจิ้ลแฮร์ ผัดพริกเหลือง กับปูนิ่มกรอบ Angel Hair with fried
                yellow chili sauce and soft-shell crabs
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/004.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวอบต้มยำ กุ้งสมุนไพร Baked rice with herbs of Tom Yum Kung
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/005.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                พล่าสมุนไพรกับ พอร์คช้อปย่างข้าวคั่ว Spicy herbs salad with pork
                chops and roasted ground rice
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/006.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ไส้กรอกอีสาน คั่วตะไคร้ หอมแดง และกระเทียมดอง North-eastern Thai
                sausages roasted with lemon grass, shallots and pickled garlic
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/007.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ขนมจีนผัดขี้เมากับ สันคอหมูย่าง Stir fried spicy rice noodles
                with pork shoulder
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/008.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                พอร์คช้อป ซอสเขียวหวาน Pork chop served with green curry sauce
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/009.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="text-center my-8 text-core-white-100 text-xl underline">
            Single dish
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวคลุกกะปิ Shrimp paste fried rice
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/010.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวผัดน้ำพริกปลาทู ชะอมทอด Fried rice with shrimp paste sauce,
                served with fried mackerel and cha-om
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/011.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวผัดน้ำพริกลงเรือ เสิร์ฟพร้อม หมูหวานและไข่เค็ม Fried rice
                with spicy shrimp paste sauce, served with salted eggs and
                sweetened pork
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/012.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวคลุกกะปิ Shrimp paste fried rice
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/013.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
          </div>
          <div className="text-center my-8 text-core-white-100 text-xl underline">
            Snack
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ไก่ทอดสมุนไพร Fried chicken with Thai herbs
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/014.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                เห็ดทอดสมุนไพร Fried mushrooms with Thai herbs
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/015.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ม้าฮ่อ Fried pineapple morsel topped with minced pork and peanut
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/016.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ถุงทอง Thai traditional spring rolls
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/017.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ขนมปังหน้าหมู Fried bread with minced pork
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/018.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ปูนิ่มผัดกระเทียม พริกเกลือ Stir fried soft-shell crabs with
                garlic
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/019.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ทะเลทอด Fried seafood and vegetable set served with sauces
                (shrimps, sea bass, squids, carrots, cowpeas, onions, and baby
                corns)
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/020.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
          </div>
          <div className="text-center my-8 text-core-white-100 text-xl underline">
            Chilli dip
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ชุดน้ำพริกอ่อง Thai-northern sweet chili dip served with a set
                of vegetable and boiled egg.
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/021.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ชุดน้ำพริกลงเรือ Thai-central spicy chill dip served with a set
                of vegetable, salted egg, and caramelized porks,
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/022.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ชุดน้ำพริกหนุ่ม Thai-northern style green chilf dip served with
                a set of vegetable, white pork and Thai-northern spicy sausages,
                and pork scratching.
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/023.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ชุดน้ำพริกกะปิ ชะอม ปลาทูทอด Thai spicy shrimp paste served with
                a set of fried mackerel Pishes, vegetables, and Cha-om omelet.
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/024.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                เต้าเจี้ยวหลน Preserved soybean sweet dip served with a set of
                vegetable
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/025.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ปูนิ่มผัดกระเทียม พริกเกลือ Stir fried soft-shell crabs with
                garlic
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/019.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="text-center my-8 text-core-white-100 text-xl underline">
            Curry
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ต้มยำกุ้ง / ต้มยำเห็ด Tom Yum Kung / Tom Yum Mushroom
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/026.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ต้มข่าไก่ Chicken and galangal in coconut milk soup
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/027.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                แกงจืดวุ้นเส้น เต้าหู้หมูสับ Clear soup with glass noodle, tofu
                and minced pork
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/028.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                แกงมัสมั่นไก่กับ ขนมปังปิ้ง หรือ ข้าวสวย/ถ้วย(กับข้าว) Chicken
                masaman curry served with toast or jasmine rice
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/030.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                แกงเขียวหวาน เนื้อโรตี Beef green curry served with roti
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/031.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                แกงคั่วสับปะรดกุ้งสด / แกงคั่วสับปะรดใส่เห็ด * Pineapple curry
                with shrimp / mushroom
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/032.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                แกงเหลืองสับปะรด ปลากะพง Yellow curry with pineapple and sea
                bass
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/033.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
          </div>
          <div className="text-center my-8 text-core-white-100 text-xl underline">
            Single dish/ Noodles
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวคลุกกะปิ Shrimp paste fried rice
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/034.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวผัดน้ำพริกปลาทู ชะอมทอด Fried rice with shrimp paste sauce,
                served with fried mackerel and cha-om
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/035.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวผัดน้ำพริกลงเรือ เสิร์ฟพร้อม หมูหวานและไข่เค็ม Fried rice
                with spicy shrimp paste sauce, served with salted eggs and
                sweetened pork
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/036.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวผัดผงกะหรี่ ปูนิ่มกรอบ Curry fried rice with soft-shell crab
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/037.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวผัดต้มยำกุ้งใหญ่ Tom Yum fried rice with prawns
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/038.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                เส้นหมี่หมูย่าง Rice vermicelli with roast pork served with
                sweet sauce and vegetable
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/039.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ก๋วยเตี๋ยวหมูสับ / ก๋วยเตี๋ยวหลอด ทรงเครื่อง Curry noodle with
                minced pork / Flat rich noodle with pork, bean sprout and
                mushroom
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/040.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                แองเจิ้ลแฮร์ผัดไส้อั่ว Angel Hair fried with northern Thai
                sausages
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/041.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                สปาเกตตี้ผัดตัมยำ ทะเล Tom Yum seafood spaghetti
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/042.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวมันส้มตำหมูหวาน Rice fried with sweet coconut milk served
                with Som Tum and sweetened pork
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/043.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวกระเพราเห็ด * Mushroom fried with basil and chili served
                with rice *
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/044.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ข้าวซี่โครง หมูอบฮ่องกง Rice with Hong Kong style roasted pork
                rib
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/045.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ผัดไทยดั้งเดิม / ผัดไทยกุ้งแม่น้ำ Original Pad Thai / Pad Thai
                with prawns
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/046.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
          </div>
          <div className="text-center my-8 text-core-white-100 text-xl underline">
            Single dish/ Noodles
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ยำกุ้งกรอบซอสส้ม Crispy shrimps served with herbs, salad and
                orange sauce
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/047.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ยำวุ้นเส้นทะเล / ยำวุ้นเส้นเห็ด * Vermicelli spicy seafood salad
                / mushroom salad *
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/048.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ยำตะไคร้คอหมูย่าง Thai grilled pork neck with spicy lemongrass
                salad
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/049.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ลาบทอด Fried Larb
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/050.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ลาบปลาแซลมอน Salmon Larb
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/051.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ปูนิ่มยำมะม่วง Spicy mango salad topped with soft shell crab
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/052.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                แซลมอนจี้ดจ้าด Spicy salmon Sashimi
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/053.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ตำปลาแซลมอน Papaya Salad with salmon
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/054.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                ตำผลไม้รวม Thai style spicy mixed fruit salad
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/055.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="my-8">
            <div className="flex justify-center">
              <div className="relative m-4">
                <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                  กะหล่ำปลีผัดน้ำปลา Cabbage fried in fish sauce
                </a>
                <a href="#" className="relative">
                  <div className="h-52 flex flex-wrap content-center">
                    <img
                      src="/images/food/056.png"
                      className="w-52 h-52 rounded-xl"
                    />
                  </div>
                </a>
              </div>
              <div className="relative m-4">
                <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                  ผัดผักรวมมิตร * Stir-fried mixed vegetable in oyster sauce
                </a>
                <a href="#" className="relative">
                  <div className="h-52 flex flex-wrap content-center">
                    <img
                      src="/images/food/057.png"
                      className="w-52 h-52 rounded-xl"
                    />
                  </div>
                </a>
              </div>
              <div className="relative m-4">
                <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                  ซี่โครงหมูอบฮ่องกง Hong Kong style roasted pork rib
                </a>
                <a href="#" className="relative">
                  <div className="h-52 flex flex-wrap content-center">
                    <img
                      src="/images/food/058.png"
                      className="w-52 h-52 rounded-xl"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative m-4">
                <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                  ปูนิ่มผัดกระเทียม พริกเกลือ stir fried soft-shell crabs with
                  garlic
                </a>
                <a href="#" className="relative">
                  <div className="h-52 flex flex-wrap content-center">
                    <img
                      src="/images/food/059.png"
                      className="w-52 h-52 rounded-xl"
                    />
                  </div>
                </a>
              </div>
              <div className="relative m-4">
                <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
                <a href="#" className="relative">
                  <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
                </a>
              </div>
              <div className="relative m-4">
                <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
                <a href="#" className="relative">
                  <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center my-8 text-core-white-100 text-xl underline">
            Salad
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                สลัดผักย่าง Grilled Vegetable
              </a>
              <a href="#" className="relative">
                <div className="w-52 h-52 flex flex-wrap content-center bg-core-gray-200"></div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                สลัดผักธัญพืช Cereal, Grain and Veggie Salad
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/061.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                สลัดผักและผลไม้รวม mix-fruit and Veggie Salad
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/062.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                สลัดไส้กรอกทอด Grilled Sausage Salad
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/063.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                สลัดผักไก่ฉีก Chopped Chicken Salad
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/064.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                สลัดทูน่า ในน้ำมันมะกอก Tuna in Olive Oil salad
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/065.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                สลัดปลาแซลม่อนย่าง Grilled Salmon Salad
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/066.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-core-gray-200 text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
                สลัดไข่ต้ม Boiled Eggs Salad
              </a>
              <a href="#" className="relative">
                <div className="h-52 flex flex-wrap content-center">
                  <img
                    src="/images/food/067.png"
                    className="w-52 h-52 rounded-xl"
                  />
                </div>
              </a>
            </div>
            <div className="relative m-4">
              <a className="absolute px-3 inset-0 z-10 bg-transparent text-core-white-100 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-60 duration-300"></a>
              <a href="#" className="relative">
                <div className="w-52 h-52 flex flex-wrap content-center bg-transparent"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default ModalFood;
