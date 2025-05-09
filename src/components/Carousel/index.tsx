import React from "react";
import { Carousel } from "antd";
import Slider1 from "@/assets/slider1.png";
import Slider2 from "@/assets/slider2.png";
import Slider3 from "@/assets/slider3.png";

const contentStyle: React.CSSProperties = {
  height: "450px",
  color: "black",
};

const CarouselCom = () => {
  return (
    <div className="max-w-[85%] m-auto">
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div>
          <h3
            style={contentStyle}
            className="relative flex items-center justify-between"
          >
            <div className="left  ">
              <h1 className="font-black text-[44px] leading-[120%] text-[#0a1729]">
                Siz kutgan Xiaomi 12 Mi Laite
              </h1>
              <p className="font-normal text-[16px] text-[#545d6a] mt-2 mb-6">
                Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite
                siz uchun eng yaxshi <br /> arziydigan takliflarimizdan
                biridir!ii
              </p>
              <button className="rounded-md w-40 h-12 bg-blue-800 font-normal text-base text-center text-white">
                Batafsil
              </button>
            </div>
            <div className="right  ">
              <img
                src={Slider1}
                className="w-[755px] absolute right-0 bottom-0"
                alt="slider1"
              />
            </div>
          </h3>
        </div>
        <div>
          <h3
            style={contentStyle}
            className=" flex items-center justify-between"
          >
            <div className="left  ">
              <h1 className="font-black text-[44px] leading-[120%] text-[#080808]">
                Apple AirPods Pro 2
              </h1>
              <p className="font-normal text-[16px] text-[#545d6a] mt-2 mb-6">
                Endi yangicha tovush va aktiv shovqinni kamaytirish
                texnologiyasi bilan AirPods Pro 2!
              </p>
              <button className="rounded-md w-40 h-12 bg-blue-800 font-normal text-base text-center text-white">
                Batafsil
              </button>
            </div>
            <div className="right mr-16 ">
              <img src={Slider2} className="w-[350px] " alt="slider1" />
            </div>
          </h3>
        </div>
        <div>
          <h3
            style={contentStyle}
            className=" flex items-center justify-between"
          >
            <div className="left  ">
              <h1 className="font-black text-[44px] leading-[120%] text-[#080808]">
                iPhone 16 Pro Max
              </h1>
              <p className="font-normal text-[16px] text-[#545d6a] mt-2 mb-6">
                Yangi dizayn, ilg'or kamera tizimi va ajoyib ishlash tezligi
                bilan taqdim etilgan flagman model.
              </p>
              <button className="rounded-md w-40 h-12 bg-blue-800 font-normal text-base text-center text-white">
                Batafsil
              </button>
            </div>
            <div className="right mr-16 ">
              <img src={Slider3} className="w-[550px] " alt="slider1" />
            </div>
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselCom;
