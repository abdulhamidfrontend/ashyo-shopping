import Logo from "@/assets/logo.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Tab from "../Tabs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.ashyo.fullstackdev.uz/categories/all?limit=10"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Kategoriya ma'lumotlarini olishda xatolik:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleUserClick = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/profile");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <div>
      <div className="flex my-8 items-center justify-between">
        <div className="left">
          <Link to={"/"}>
            <div className="logo cursor-pointer flex items-center">
              <img src={Logo} alt="" />
              <h1 className="font-black text-4xl text-blue-800">Ashyo</h1>
            </div>
          </Link>
        </div>
        <div className="center gap-2.5 flex items-center">
          <div className="select">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="form">
            <form action="" className="w-[500px] bg-[#EBEFF3] rounded flex">
              <input
                type="search"
                className="w-full px-6 py-4 focus:outline-none"
                placeholder="What are you looking for?"
              />
              <button className="bg-[#134E9B] text-white py-4 px-5 rounded">
                <IoSearch className="text-[20px]" />
              </button>
            </form>
          </div>
        </div>
        <div className="right flex items-center gap-4">
          <button className="flex items-center justify-center rounded bg-[#ebeff3] h-14 w-14 text-[#545D6A]">
            <FaScaleUnbalancedFlip />
          </button>
          <button className="flex items-center justify-center rounded bg-[#ebeff3] h-14 w-14 text-[#545D6A]">
            <FaRegHeart />
          </button>
          <button className="flex items-center justify-center rounded bg-[#ebeff3] h-14 w-14 text-[#545D6A]">
            <MdOutlineShoppingBag />
          </button>
          <button
            onClick={handleUserClick}
            className="flex items-center justify-center rounded bg-[#ebeff3] h-14 w-14 text-[#545D6A]"
          >
            <FiUser />
          </button>
        </div>
      </div>

      <div className="bottom flex items-center justify-between">
        {categories.map((category) => (
          <p
            className="font-normal text-base text-center text-gray-700 cursor-pointer"
            key={category.id}
          >
            {category.name}
          </p>
        ))}
      </div>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
      >
        <Tab />
      </Modal>
    </div>
  );
};

export default Navbar;
