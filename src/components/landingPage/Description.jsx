import React from "react";
import { ReactTyped } from "react-typed";

const Description = () => {
  return (
    <div>
      <div className="my-20 text-center text-6xl 	" >
 <ReactTyped
   startWhenVisible
   strings={["Welcome to <strong>&lt;ReacTrivia /&gt;"]}
   typeSpeed={45}
   startDelay={2000}
   cursorChar="_"
  />
  </div>

      <p className="text-base md:text-md lg:text-lg xl:text-1xl text-center mt-20 p-3 mx-5">
        Test your knowledge and skills by playing through our quizzes, custom
        built just for you! ReacTrivia allows you to choose from a variety of
        categories to find out how far your knowledge can take you. Battle it
        out with friends to see who can top the leaderboard with their highscore, and become the
        ultimate quiz master.
        <br /> 
        <br /> 
        Traverse into a world of trivia, using the button below...{" "}
      </p>
    </div>
  );
};

export default Description;
