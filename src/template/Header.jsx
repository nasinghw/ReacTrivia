import React from "react";
import { ReactTyped } from "react-typed";

const Header = () => {
    
    return(
    <>
    <div className="" id="header"></div>
        <div className="my-20 text-center text-7xl 	" >
        <ReactTyped
   
            strings={["&lt;ReacTrivia /&gt;"]}
            typeSpeed={45}
            backSpeed={45}
            backDelay={2000}
            cursorChar="_"
            loop
            loopCount={5}
        />

        </div>
    </>
  )};
export default Header;