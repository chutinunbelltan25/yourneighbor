import React, { useState } from "react";
import Image from "next/image";

const ModalArt = ({ openModal, closeModal, title }) => {
  const [changeData, setChangeData] = useState(false);
  return (
    openModal && (
      <div className={`fixed top-0 z-40 inset-0 overflow-y-auto`}>
        <div className="flex justify-center h-full p-0 text-center sm:block sm:p-0 bg-core-gray-200 bg-opacity-80 w-full mx-auto">
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
          <div className="mx-24 my-5 bg-project-bg bg-no-repeat bg-center h-min-screen h-200">
            <div className="flex justify-center pt-16 pb-4 text-xl">
              <button
                className="mx-4 underline"
                onClick={() => setChangeData(false)}
              >
                Cynthetic Art Exhibition 2021
              </button>
              <button
                className="mx-4 underline"
                onClick={() => setChangeData(true)}
              >
                Reciprocal 2021
              </button>
            </div>
            {changeData === false ? (
              <>
                <div className="flex justify-center mt-0 mx-auto">
                  <Image
                    width={900}
                    height={500}
                    priority
                    src={"/images/art_lab/project_exhibition.png"}
                  />
                </div>
                <div className="w-312 2xl:w-320 flex justify-center mt-20 pb-16 mx-auto bg-core-gray-400">
                  <div className="ml-44 mr-10 text-left w-1/2">
                    นิทรรศการ “Cynthetic” เป็นนิทรรศการศิลปะเชิงทดลอง
                    ในการจัดสรรขยะเหลือใช้ของธุรกิจขนาดเล็ก
                    และขยะเหลือใช้ในครัวเรือนให้กลายมาเป็นผลงานศิลปะ
                    โดยมุ่งหวังว่าขยะบางส่วนจะไม่กลับไปเป็นขยะอีก
                    สืบเนื่องจากการระบาดของไวรัส โควิด-19
                    ทำให้วิถีชีวิตของผู้คนเปลี่ยนแปลงไปทั้งในภาคธุรกิจและภาคประชาชน
                    ผู้คนออกจากบ้านน้อยลง
                    หันมาซื้อสินค้าออนไลน์มากยิ่งขึ้นส่งผลให้เกิดขยะมูลฝอยจากบรรจุภัณฑ์และหีบห่อเป็นจำนวนมาก
                    ภาคธุรกิจเองจำก็เป็นต้องปรับเปลี่ยนวิธีการปฏิบัติงานเพื่อรองรับรูปแบบการบริโภคที่เปลี่ยนแปลงไปในช่วงเวลาของการแพร่ระบาดของโรคอุบัติใหม่นี้
                    จึงทำให้เกิดขยะจำนวนมากจากการเปลี่ยนแปลงรูปแบบการดำเนินชีวิต
                    โดยเฉพาะขยะพลาสติกซึ่งใช้เป็นภาชนะและหีบห่อบรรจุภัณฑ์ทั้งหลาย
                    กลุ่มศิลปิน Your Neighbor’s Art Collective (YNAC)
                    ซึ่งเล็งเห็นความเปลี่ยนแปลงนี้ตัวตนเองจึงได้รวมตัวกันขึ้น
                    เพื่อสร้างสรรค์งานศิลปะ
                    โดยต้องการเป็นส่วนหนึ่งในการนำขยะกลับมาสร้างสรรค์ใหม่
                    โดยมีเป้าหมายในระยะยาว คือการสร้างผลงานศิลปะจากขยะ
                    โดยขยะเหล่านั้นจะไม่ย้อนกลับมาเป็นขยะอีก
                    ทั้งนี้ผลงานที่แสดงภายในนิทรรศการ
                    รวมถึงกระบวนการการทำงานในครั้งนี้
                    เป็นเพียงการแสดงผลของกระบวนการทำงานร่วมกันในระยะแรกของกลุ่มศิลปินและธุรกิจขนาดเล็ก
                    มิใช่ผลสำเร็จหรือบทสรุปของวิธีการที่สมบูรณ์
                    ซึ่งทางกลุ่มศิลปินจะยังคงพัฒนาและค้นหาวิธีการสร้างสรรค์
                    เพื่อนำขยะหลากหลายประเภทกลับมาเพิ่มมูลค่า
                    ทั้งในรูปแบบงานออกแบบ และทางทัศนศิลป์ต่อไป
                  </div>
                  <div className="mr-40 ml-10 text-left w-1/2">
                    Cynthetic Art Exhibition is a mixed media art exhibition
                    displaying various experiments and progress of the artists
                    in the collective, Your Neighbor’s Art Collective (YNAC),
                    with recycling trash, printmaking, and technology. In this
                    pilot step, the artists have worked together to sort trash
                    and waste material and turn them into new creations with
                    artistic value. Because of the Covid-19 pandemic, businesses
                    have to adapt their operation and safety to survive the
                    outbreak. For example, the increase of online shopping and
                    food delivery demand has raised the usage of one-time-use
                    plastic, such as plastic bags, bubble wraps, and plastic
                    containers. Although many businesses have already been
                    working on their part to reduce plastic waste for bettering
                    the environmental issue, the occurrence of the outbreak has
                    paused this attempt. Therefore, YNAC has been working to
                    seek solutions and experiment on producing artworks from
                    plastic waste that also can function in the business
                    location to prevent them from becoming just another
                    abandoned object or trashed out again later. Ultimately, the
                    art collective’s mission is not only to create works of art
                    and design from waste material. The mission is to pave the
                    way and seek the possibility of art and business that could
                    work together during and after the pandemic for reducing
                    waste. This could potentially open doors for artists to have
                    a local community’s support in the long term. This
                    exhibition shows the development of artistic creations and
                    prototyping works. There are still ways to reach the
                    finished goal, which we, as an artist, thrill at exploring
                    on this path.
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-center mt-3 mx-auto">
                  <iframe
                    width="880"
                    height="488"
                    src={`https://www.youtube.com/embed/sMxwCVPT5ZA?autoplay=1&mute=1&enablejsapi=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};
export default ModalArt;
