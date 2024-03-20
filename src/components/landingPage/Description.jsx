import React from "react";

const Description = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-20">
        Welcome to {"<ReacTrivia />"}
      </h1>
      <p className="text-base md:text-md lg:text-lg xl:text-1xl mt-20 p-3">
        Test your knowledge and skills by playing through our quizzes, custom
        built just for you! ReacTrivia allows you to choose from a variety of
        categories to find out how far your knowledge can take you. Battle it
        out with friends to see who can top the leaderboard with their highscore, and become the
        ultimate quiz master.
        <br /> 
        Traverse into a world of trivia, using the button below...{" "}
      </p>
    </div>
  );
};

export default Description;
