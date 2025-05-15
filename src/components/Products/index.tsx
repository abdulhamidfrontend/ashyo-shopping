import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import product from "@/assets/product.png";
import { FaBalanceScale } from "react-icons/fa";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchParams] = useSearchParams();

  const brandId = searchParams.get("brandId");

  useEffect(() => {
    const url = brandId
      ? `https://api.ashyo.fullstackdev.uz/product-items?brandId=${brandId}`
      : "https://api.ashyo.fullstackdev.uz/product-items";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("API javobi:", data);
        setProducts(data);
      })
      .catch((err) => console.error("Xatolik:", err));
  }, [brandId]); // brandId o‘zgarsa, qayta chaqiriladi

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {products.length > 0 ? (
        products.map((item: any) => (
          <div
            key={item.id}
            className="bg-white group shadow relative rounded-lg flex flex-col w-[273px] h-[452px]"
          >
            <div className="forimg rounded-lg bg-[#ebeff3] p-10">
              <img
                src={product}
                alt={item.product?.name}
                className="w-[202px] h-[202px] object-contain mb-2 transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="px-2">
              <h2 className="font-normal mt-4 mb-7 text-[14px] leading-[136%] text-[#545d6a]">
                {item.product?.name}
              </h2>
              <p className="font-bold text-[20px] leading-[130%] text-[#0a1729]">
                {item.price} uzs
              </p>
              <div className="bottom absolute bottom-5 right-2 left-2 flex justify-between items-end">
                <div className="left px-2 py-2.5 rounded bg-[rgba(240,_44,_150,_0.1)] w-fit">
                  <h1 className="font-normal text-[14px] leading-[95%] tracking-[0.01em] text-[#f02c96]">
                    6 oy / 1 200 000 uzs
                  </h1>
                </div>
                <div className="right flex items-center gap-2">
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
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default Products;
