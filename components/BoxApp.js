import React from "react";
import Timer from "./Timer";

const BoxApp = () => {
  return (
    <div className='app-container'>
      <h1 style={{ color: "greenyellow", fontSize: "3rem" }}>Boxing</h1>
      <Timer />
    </div>
  );
};

export default BoxApp;
