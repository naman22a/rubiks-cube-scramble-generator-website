import React from "react";

const Docs: React.FC = () => {
    return (
        <div className="flex justify-center items-center flex-col py-20 px-5 md:px-20">
            <h2 className="text-xl md:text-2xl uppercase tracking-wider inline-block border-b-4 border-b-primary pb-2 mb-20">
                Documentation
            </h2>
            <div
                className="bg-gray-200 p-5 md:p-10"
                style={{
                    fontFamily:
                        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                }}
            >
                GET{" "}
                {`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api?puzzleType=3x3`}
            </div>
        </div>
    );
};

export default Docs;
