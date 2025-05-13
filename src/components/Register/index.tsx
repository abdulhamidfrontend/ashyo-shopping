import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://api.ashyo.fullstackdev.uz/auth/register", {
        fullname,
        email,
        password,
      });

      const loginRes = await axios.post(
        "https://api.ashyo.fullstackdev.uz/auth/login",
        {
          email,
          password,
        }
      );

      const accessToken = loginRes.data?.accessToken;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        window.location.reload();
      }
    } catch (error: any) {
      console.error("Xatolik:", error.response?.data?.message || error.message);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 items-center justify-center w-full mt-4"
      onSubmit={handleRegister}
    >
      <input
        type="text"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        placeholder="Fullname"
        className="border p-3 rounded w-full"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-3 rounded w-full"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-3 rounded w-full"
        required
      />
      <button
        type="submit"
        className="border w-full py-2 rounded bg-blue-800 text-white"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
