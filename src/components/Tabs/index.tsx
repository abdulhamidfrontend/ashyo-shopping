import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Login from "@/components/Login";
import RegisterForm from "../Register";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Login",
    children: <Login />,
  },
  {
    key: "2",
    label: "Register",
    children: <RegisterForm />,
  },
];

const Tab: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Tabs defaultActiveKey="1" items={items} centered />
    </div>
  );
};

export default Tab;
