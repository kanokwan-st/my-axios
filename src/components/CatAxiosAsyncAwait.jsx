import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"

export function CatAxiosAsyncAwait() {
  const [catFact, setCatFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    async function getCatFact() {
      try {
        const res = await axios.get("https://catfact.ninja/fact");
        console.log(res.data)
        setCatFact(res.data.fact);
      } catch(err) {
        setError("Failed to fetch users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getCatFact();
    setClick(false);
  }, [click])

  function getMoreFact() {
    setClick(true);
  }

  return (
    <div>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <h1 className='text-blue-600 font-bold text-2xl'>Kitty Said...</h1>
      <p className='italic font-semibold mt-2'>"{catFact}"</p>
      <img src="../../public/cat.jpg" alt="cat" className='w-50 h-40 rounded-2xl mt-4'/>
      <button onClick={getMoreFact} className='bg-teal-500 text-white rounded px-20 py-1 mt-4 hover:bg-teal-800 hover:cursor-pointer'>more</button>
    </div>
  )
}
