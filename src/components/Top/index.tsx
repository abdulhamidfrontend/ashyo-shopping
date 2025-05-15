import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="w-full bg-[#EBEFF3]">
      <div className="max-w-[85%] m-auto flex items-center justify-between">
        <div className="left">
          <ul className="flex gap-4 items-center">
            <li className="flex cursor-pointer items-center gap-2">
              <FaLocationDot />
              Tashkent
            </li>
            <li className=" cursor-pointer">About Us</li>
            <Link to={"/products"}>
              <li className=" cursor-pointer">Products</li>
            </Link>
            <li className=" cursor-pointer">Contacts</li>
          </ul>
        </div>
        <div className="right flex items-center gap-5 py-3">
          <a href="tel:+998(71)123-45-67">+998 (71) 123-45-67</a>
          <div>
            <select name="" id="">
              <option value="UZ">UZ</option>
              <option value="UZ">RU</option>
              <option value="UZ">EN</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
