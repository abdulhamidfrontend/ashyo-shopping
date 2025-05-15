import Top from "@/components/Top";
import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import Products from "@/components/Products";

const products = () => {
  return (
    <div className="w-full m-auto">
      <Top />
      <div className="max-w-[85%] m-auto">
        <Navbar />
        <div className="my-15 flex gap-4">
          <div className="w-[280px] shrink-0">
            <Categories />
          </div>
          <div className="flex-1">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
