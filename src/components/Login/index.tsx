import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "https://api.ashyo.fullstackdev.uz/auth/login",
        { email, password }
      );

      const { accessToken, refreshToken, user } = response.data;
      console.log("Login succes", user);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.reload();
    } catch (error: any) {
      console.error(
        "Login xatoligi:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <form
      className="flex flex-col my-5 px-10 gap-2   items-center justify-center w-full"
      onSubmit={handleSubmit}
    >
      <input
        className="border p-3 rounded  w-full"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        className="p-3 border rounded  w-full"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button
        className="border mt-5 w-full py-2 rounded bg-blue-800 text-white"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
