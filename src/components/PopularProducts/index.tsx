import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import prodoctimg from "@/assets/product.png";
import { FaBalanceScale } from "react-icons/fa";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";

import "../../styles.css";
import axios from "axios";

const SwiperCarousel: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/products")
      .then((res) => {
        if (Array.isArray(res.data.items)) {
          setProducts(res.data.items);
        }
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="relative">
      <button
        ref={prevRef}
        className="absolute z-10 left-10 top-1/2 transform -translate-y-1/2 bg-white border shadow rounded-full w-10 h-10 flex items-center justify-center"
      >
        ‹
      </button>
      <button
        ref={nextRef}
        className="absolute z-10 right-10 top-1/2 transform -translate-y-1/2 bg-white border shadow rounded-full w-10 h-10 flex items-center justify-center"
      >
        ›
      </button>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="mySwiper"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white h-115 rounded-lg p-4 flex flex-col">
              <div className="bg-[#ebeff3] rounded-[8px] py-12 px-11 group overflow-hidden">
                <img
                  src={prodoctimg}
                  alt={item.name}
                  className="w-full h-40 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div>
                <h2 className="font-normal mt-4 mb-7 text-[14px] leading-[136%] text-[#545d6a]">
                  {item.name}
                </h2>
                <p className="font-bold text-[20px] leading-[130%] text-[#0a1729]">
                  {item.price} uzs
                </p>
                <div className="absolute bottom-5 right-2 left-2 flex justify-between items-end">
                  <div className="px-2 py-2.5 rounded bg-[rgba(240,_44,_150,_0.1)] w-fit">
                    <h1 className="font-normal text-[14px] leading-[95%] tracking-[0.01em] text-[#f02c96]">
                      6 oy / 1 200 000 uzs
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center w-12 h-11 border rounded">
                      <FaBalanceScale className="text-[#545d6a]" />
                    </button>
                    <button className="flex items-center justify-center w-12 h-11 border rounded bg-[#134e9b]">
                      <BiSolidShoppingBagAlt className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
