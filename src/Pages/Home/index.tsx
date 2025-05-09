import Top from "@/components/Top";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
const Home = () => {
  return (
    <div className="w-full">
      <Top />
      <div className="max-w-[85%] m-auto">
        <Navbar />
      </div>
      <div className="mt-5 mb-10">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
