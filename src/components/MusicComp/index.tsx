import Headphone from "@/assets/headphone.png";
const MusicComp = () => {
  return (
    <div className="flex items-center justify-between rounded-[10px] bg-[#282828]">
      <div className="left">
        <img className="w-[518px] h-[493px]" src={Headphone} alt="" />
      </div>
      <div className="right flex flex-col mr-20 gap-5">
        <h1 className="font-bold text-[32px] leading-[119%] text-[#fff]">
          Musiqa zavqini his qilish <br /> uchun ko'p mablag' sarflash <br />{" "}
          shart emas!
        </h1>
        <button className="font-normal w-fit text-[16px] leading-[120%] text-center text-[#111] rounded-[6px] px-[40px] py-[18px] bg-[white]">
          Batafsil
        </button>
      </div>
    </div>
  );
};

export default MusicComp;
