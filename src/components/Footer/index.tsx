import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="socialmedia flex flex-col gap-10">
        <div className="top">
          <h1 className="font-bold mb-3 text-[20px] leading-[130%] text-[rgba(0,_0,_0,_0.7)]">
            Bizning ijtimoiy tarmoqlarda
          </h1>
          <div className="btns flex items-center gap-2.5">
            <button className=" rounded-[7px] px-[12px] py-[10px] bg-[#ebeff3] ">
              <FaFacebook className="text-[20px]" />
            </button>
            <button className=" rounded-[7px] px-[12px] py-[10px] bg-[#ebeff3] ">
              <FaYoutube className="text-[20px]" />
            </button>
            <button className=" rounded-[7px] px-[12px] py-[10px] bg-[#ebeff3] ">
              <BsTelegram className="text-[20px]" />
            </button>
            <button className=" rounded-[7px] px-[12px] py-[10px] bg-[#ebeff3] ">
              <FaTwitter className="text-[20px]" />
            </button>
            <button className=" rounded-[7px] px-[12px] py-[10px] bg-[#ebeff3] ">
              <FaInstagram className="text-[20px]" />
            </button>
          </div>
        </div>
        <div className="bottom">
          <h1 className="font-bold mb-3 text-[20px] leading-[130%] text-[rgba(0,_0,_0,_0.7)]">
            Mobil ilovani yuklab oling
          </h1>
          <div className="btns flex items-center gap-3">
            <button className="rounded-[10px] flex items-center gap-3 px-[30px] py-[17px] bg-[#ebeff3] font-bold text-[16px] leading-[110%] text-[#0a1729]">
              <FaAppStore className="text-[32px]" />
              App Store
            </button>
            <button className="rounded-[10px] flex items-center gap-3 px-[30px] py-[17px] bg-[#ebeff3] font-bold text-[16px] leading-[110%] text-[#0a1729]">
              <FaGooglePlay className="text-[32px]" />
              Google Play
            </button>
          </div>
        </div>
      </div>
      <div className="menu">
        <h1 className="font-bold mb-3 text-[20px] leading-[130%] text-[rgba(0,_0,_0,_0.7)]">
          Menu
        </h1>
        <div className="links flex flex-col gap-3">
          <p className="font-normal hover:underline  cursor-pointer text-[16px] leading-[110%] text-[rgba(0,_0,_0,_0.7)]">
            Ashyo haqida
          </p>
          <p className="font-normal hover:underline  cursor-pointer text-[16px] leading-[110%] text-[rgba(0,_0,_0,_0.7)]">
            Foydalanish shartlari
          </p>
          <p className="font-normal hover:underline  cursor-pointer text-[16px] leading-[110%] text-[rgba(0,_0,_0,_0.7)]">
            Maxfiylik va xavfsizlik siyosati
          </p>
          <p className="font-normal hover:underline  cursor-pointer text-[16px] leading-[110%] text-[rgba(0,_0,_0,_0.7)]">
            Mahsulotlarni va tovarlarni qaytarish siyosati
          </p>{" "}
          <p className="font-normal hover:underline  cursor-pointer text-[16px] leading-[110%] text-[rgba(0,_0,_0,_0.7)]">
            Biz bilan aloqa
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="top mb-8">
          <h1 className="font-bold mb-3 text-[20px] leading-[130%] text-[rgba(0,_0,_0,_0.7)]">
            Aloqa
          </h1>
          <a
            className="font-bold text-[24px] leading-[118%] text-[#06172d]"
            href="tel:+998 (71) 123-45-67"
          >
            +998 (71) 123-45-67
          </a>
        </div>
        <div className="bottom">
          <label
            htmlFor="question"
            className="font-normal  text-[16px] leading-[130%] text-[rgba(0,_0,_0,_0.7)]"
          >
            <h1 className="mb-3">Savolingiz bormi?</h1>
          </label>
          <form className="bg-[#ebeff3] w-[314px] rounded-[6px] py-5 px-3 flex items-center gap-20  ">
            <input
              id="question"
              className="focus:outline-none font-normal w-full text-[12px] leading-[130%] text-[rgba(0,_0,_0,_0.3)]"
              placeholder="O’zingiz qiziqtirgan savollarni bering"
              type="text"
            />
            <button type="submit">
              <FaRegMessage className="text-[24px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
