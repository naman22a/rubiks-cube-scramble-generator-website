import React from "react";

const Header: React.FC = () => {
    return (
        <header className="px-5 md:px-10 py-10 flex flex-col md:flex-row items-center md:justify-between bg-Black text-white">
            <h4 className="text-2xl uppercase tracking-wider inline-block border-b-4 border-b-primary pb-2">
                scramble generator
            </h4>
            <a
                href="https://github.com/namanArora1022/api-scramble-generator"
                target="_blank"
            >
                <button className="px-6 py-2 border border-primary rounded hover:bg-primary transition-all duration-300 text-lg mt-5 md:mt-0">
                    Github
                </button>
            </a>
        </header>
    );
};

export default Header;
