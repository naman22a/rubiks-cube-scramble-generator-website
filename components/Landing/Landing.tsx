import React from "react";

const Landing: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-5 md:px-20 md:py-10 bg-Black text-white overflow-hidden">
            <div className="md:w-1/2 flex flex-col justify-center items-center md:mb-0 mb-10">
                <h1 className="text-xl md:text-4xl uppercase flex gap-2 md:gap-5 hover:tracking-wider transition-all duration-200 cursor-pointer z-10">
                    <span>Rubik's</span>
                    <span>Cube</span>
                    <span>Scramble</span>
                    <span>Generator</span>
                    <span className="text-primary">API</span>
                </h1>
                <p className="my-5 text-sm md:text-base text-center">
                    This is an awesome api for generating rubik's cube scrambles
                    , all the puzzles from 2x2 up to 7x7 are supported.A demo is
                    provided below , for more info check it on github
                </p>
                <a href="#bottom">
                    <button className="px-6 py-2 border border-primary rounded hover:-translate-y-1 transition-all duration-300 text-lg md:text-xl font-semibold mt-10 md:mt-0 bg-primary">
                        Generate a New Scramble
                    </button>
                </a>
            </div>

            <div className="md:w-1/2 md:mb-0 mb-10">
                <img src="/landing.svg" alt="Rubik's Cube" />
            </div>
        </div>
    );
};

export default Landing;
