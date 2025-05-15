import Top from "@/components/Top";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sponsor from "@/components/Sponsor";
import PopularProducts from "@/components/PopularProducts";
import Allproducts from "@/components/AllProductTypes";
import MusicComp from "@/components/MusicComp";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <Top />
      <div className="max-w-[85%] m-auto">
        <Navbar />
      </div>
      <div className="mt-5 mb-10">
        <Hero />
        <Sponsor />
      </div>
      <div className="flex flex-col m-auto gap-20">
        <div>
          <h1 className="max-w-[80%] mb-12 m-auto font-bold text-[32px] leading-[130%] text-[#000]">
            Most popular product
          </h1>
          <PopularProducts />
        </div>
        <div>
          <h1 className="max-w-[80%] mb-12 m-auto font-bold text-[32px] leading-[130%] text-[#000]">
            Most popular product
          </h1>
          <PopularProducts />
        </div>
        <div>
          <h1 className="max-w-[80%] mb-12 m-auto font-bold text-[32px] leading-[130%] text-[#000]">
            Most popular product
          </h1>
          <PopularProducts />
        </div>
      </div>
      <div className="max-w-[85%] my-20 m-auto">
        <Allproducts />
      </div>
      <div className="aksya">
        <h1 className="max-w-[80%] mb-12 m-auto font-bold text-[32px] leading-[130%] text-[#000]">
          Aksiyadagi tovarlar
        </h1>
        <PopularProducts />
      </div>
      <div className="w-[85%] m-auto my-20">
        <MusicComp />
      </div>
      <div className="lastseen">
        <h1 className="max-w-[80%] mb-12 m-auto font-bold text-[32px] leading-[130%] text-[#000]">
          Oxirgi ko’rgan mahsulotlar
        </h1>
        <PopularProducts />
      </div>
      <div className="footer my-25 py-20 max-w-[85%] m-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
