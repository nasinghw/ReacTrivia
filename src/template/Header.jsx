import React from "react";
import { ReactTyped } from "react-typed";
import { useLocation } from "react-router-dom";

const Header = () => {


    const location = useLocation();
    const hideComponent = location.pathname === '/home';
    const hideLoad = location.pathname === '/'
    console.log(hideComponent)
    return(
    <>
    <div className="" id="header"></div>
        <div className="my-20 text-center text-7xl" style={{ display: hideComponent || hideLoad ? 'none' : 'block' }}>

        <ReactTyped
          startWhenVisible
          strings={[
            "<strong class='reactrivia'> <span class='more-less'> < </span> Reac<span class='more-less'>T</span>rivia <span class='more-less'>/&gt;</span>",
          ]}
          typeSpeed={45}
          startDelay={1000}
          cursorChar="_"
        />
      </div>
    </>
  );
};
export default Header;
