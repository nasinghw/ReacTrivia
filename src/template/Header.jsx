import React from "react";
import { ReactTyped } from "react-typed";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const hideComponent = location.pathname === "/";
  console.log(hideComponent);
  return (
    <>
      <div
        className="my-20 text-center text-7xl border-red"
        style={{ display: hideComponent ? "none" : "block" }}
      >
        <ReactTyped
          strings={["<strong>&lt;ReacTrivia /&gt;"]}
          typeSpeed={45}
          backSpeed={45}
          backDelay={10000}
          cursorChar="_"
          loop
          loopCount={5}
        />
      </div>
    </>
  );
};
export default Header;
