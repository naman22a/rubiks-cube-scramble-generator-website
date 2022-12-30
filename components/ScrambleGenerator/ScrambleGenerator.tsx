import React, { useEffect, useState } from "react";
import { getScramble } from "../../api";
import { puzzleTypes } from "../../global";
import { PuzzleType } from "../../interfaces";

const ScrambleGenerator: React.FC = () => {
    const [puzzleType, setPuzzleType] = useState<PuzzleType>("3x3");

    const [scramble, setScramble] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getScramble(puzzleType)
            .then((data) => setScramble(data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [puzzleType]);

    const handleScrambleGenerate = async () => {
        setLoading(true);
        try {
            const data = await getScramble(puzzleType);
            setScramble(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-10 md:py-20 px-5 md:px-20 flex flex-col justify-start items-center h-screen">
            {/* @ts-ignore */}
            <a name="bottom"></a>
            <h2 className="text-xl md:text-2xl uppercase tracking-wider inline-block border-b-4 border-b-primary pb-2 mb-20">
                Scramble Generator Example
            </h2>

            <div className="bg-gray-200 p-10 md:p-20 rounded-lg flex flex-col justify-center items-center w-full md:w-1/2">
                <h5 className="text-2xl font-semibold text-center">
                    Choose a Puzzle Type
                </h5>
                <select
                    defaultValue={puzzleType}
                    onChange={(e) => {
                        setLoading(true);
                        setPuzzleType(e.target.value as PuzzleType);
                    }}
                    className="my-5 px-6 text-lg"
                >
                    {puzzleTypes.map((pt, index) => (
                        <option key={index} value={pt}>
                            {pt}
                        </option>
                    ))}
                </select>
                {loading ? (
                    <span className="text-lg md:text-xl">Loading...</span>
                ) : error ? (
                    <span className="text-red-600 font-semibold mt-5 text-lg">
                        Something went wrong
                    </span>
                ) : (
                    <>
                        <h3 className="text-xl md:text-2xl text-center">
                            {scramble}
                        </h3>
                        <button
                            onClick={() => handleScrambleGenerate()}
                            className="px-6 py-2 border border-primary rounded hover:bg-cyan-600 transition-all duration-300 text-lg md:text-xl font-semibold mt-6 bg-primary text-white"
                        >
                            Generate Scramble
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ScrambleGenerator;
