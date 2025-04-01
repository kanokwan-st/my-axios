import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export function CatStuff() {
    const [catFact, setCatFact] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [catWord, setCatWord] = useState(false);

    useEffect(() => {
        async function getCatFact() {
            try {
                const res = await axios.get("https://catfact.ninja/fact");
                setCatFact(res.data.fact);
                console.log(res)
            } catch(error) {
                setError(error);
                console.log(error);
            } finally {
                setLoading(false);
                setCatWord(false)
            }
        };

        getCatFact();
    }, [catWord])

    function catButton() {
        setCatWord(true);
    }

    return (
        <div className="flex flex-col items-center h-screen bg-[#1b99d3]">
            <div className="flex flex-col items-center w-[40%] my-10 p-4 bg-[#f6cd4b] text-gray-800 rounded-2xl">
                <h1 className='font-bold text-3xl'>The Kitty Said...</h1>
                {loading && <p>loading...</p>}
                {error && <p>There is an error.</p>}
                <p className='italic font-semibold mt-2 text-center '>"{catFact}"</p>
                <img src="../cat.jpg" alt="cat" className='w-50 h-40 rounded-2xl mt-4'/>
                <button onClick={catButton} className="w-50 py-2 mt-4 bg-[#43a591] text-white font-bold rounded-4xl hover:bg-[#477a70fe] hover:cursor-pointer">More Cat Words</button>
            </div>
        </div>
    )
}