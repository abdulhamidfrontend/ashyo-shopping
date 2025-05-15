import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

interface Brand {
  id: number;
  name: string;
}

const Brands: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const selectedBrand = searchParams.get("brandId");
    if (selectedBrand) {
      console.log("Tanlangan brand ID:", selectedBrand);
    }
  }, [searchParams]);

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/brands/all")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setBrands(res.data);
        } else {
          console.error("error res:", res.data);
        }
      })
      .catch((err) => {
        console.error("Brandlarni olishda xatolik:", err);
      });
  }, []);

  const handleBrandClick = (brandId: number) => {
    setSearchParams({ brandId: String(brandId) });
  };

  return (
    <div>
      <h1 className="font-medium text-[16px] leading-[130%] text-[#000]">
        Brands
      </h1>
      <div className="flex flex-wrap gap-1 mt-4">
        {brands?.length > 0 ? (
          brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => handleBrandClick(brand.id)}
              className="flex hover:bg-blue-800 transition duration-300 hover:text-white items-center font-normal text-[12px] leading-[133%] text-[#0a1729] cursor-pointer justify-center w-fit bg-white px-4.5 rounded-4xl py-2"
            >
              {brand.name}
            </button>
          ))
        ) : (
          <p>Yuklanmoqda...</p>
        )}
      </div>
    </div>
  );
};

export default Brands;
