import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/index";
import ProfilePage from "@/Pages/ProfilePage";
import Products from "@/Pages/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
