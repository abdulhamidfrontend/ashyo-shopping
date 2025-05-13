import Top from "@/components/Top";
import Navbar from "@/components/Navbar";
const ProfilePage = () => {
  return (
    <div className="w-full m-auto">
      <div className="bg-[#ebeff3]">
        <Top />
      </div>
      <div className="w-[85%] m-auto">
        <Navbar />
      </div>
    </div>
  );
};

export default ProfilePage;
