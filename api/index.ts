import { PuzzleType } from "../interfaces";

export const getScramble = async (puzzleType: PuzzleType): Promise<string> => {
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api?puzzleType=${puzzleType}`;

    const res = await fetch(url);
    const data = await res.json();

    return data.scramble;
};
