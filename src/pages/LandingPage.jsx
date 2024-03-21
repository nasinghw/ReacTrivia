import React, { useEffect } from "react";
import Description from "../components/landingPage/Description";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";


const LandingPage = ({ setResult }) => {
  const resetResults = () => {
    setResult({
      score: 0,
      correct: 0,
      incorrect: 0,
    });
  };
  
  
  
  return (

    <div className="flex flex-col  justify-between items-center">
      <div className=" 	">
        <ReactTyped
          startWhenVisible
          strings={["<span class='welcome'> Welcome to</span>"]}
          typeSpeed={45}
          startDelay={300}
          cursorChar=""
        />
        <br />
        <ReactTyped
          startWhenVisible
          strings={[
            "<strong class='reactrivia'> <span class='more-less'> < </span> Reac<span class='more-less'>T</span>rivia <span class='more-less'>/&gt;</span>",
          ]}
          typeSpeed={45}
          startDelay={2000}
          cursorChar="_"
        />
      </div>
      <div className="">

        <Description />
      </div>

      <div className="btn-container flex flex-col gap-2 mt-20 sm:flex-row md:gap-0">
        <Link
          className="btn-primary btn-primary flex items-center justify-center rounded-full py-2 px-4 mx-2 hover:bg-yellow-300 w-40 shadow-sm hover:shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 active:scale-95 "
          to="/user-form"
        >
          <button
            onClick={resetResults}
            className="flex items-center justify-center"
          >
            <span className="mr-2">Start a Quiz</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 "
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>

        <Link
          className="btn-primary btn-primary btn-primary flex items-center justify-center rounded-full py-2 px-4 mx-2 hover:bg-yellow-300 w-40 shadow-sm hover:shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 active:scale-95"
          to="/highscores"
        >
          <button className="flex items-center justify-center">
            <span className="mr-2 flex">Highscores</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
