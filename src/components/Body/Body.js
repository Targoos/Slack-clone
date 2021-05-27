import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Body as s } from "./styles";

const Body = () => {
  return (
    <>
      <Header />
      <s.Container>
        <Sidebar />
      </s.Container>
    </>
  );
};

export default Body;
