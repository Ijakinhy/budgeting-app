import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import wave from "../assets/wave.svg";
import Nav from "../component/Nav";

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
