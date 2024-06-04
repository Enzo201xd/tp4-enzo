"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const res = await fetch("/api/counter");
      const data = await res.json();
      setCount(data.count);
    };

    fetchCount();
  }, []);

  const handleClick = async () => {
    const res = await fetch("/api/counter", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newCount: count + 1 }),
    });
    const data = await res.json();
    setCount(data.count);
  };

  return (
    <div className="text-center h-screen w-screen justify-center flex flex-col items-center bg-green-100">
      <div className="bg-green-200 border border-green-600 rounded-lg p-4">
        <h1 className="text-2xl mb-4 text-green-800">counter: {count}</h1>
        <div>
          <button
            onClick={handleClick}
            className="w-screen p-2 text-white bg-green-800 border border-green-800 rounded-lg"
          >
            incrementar
          </button>
        </div>
      </div>
    </div>
  );
}

// const [numState, setNumState] = useState<any>(0)
// const addToNumber = ()=>{
//   setNumState(numState +1)
// }
// const subFromNumber = ()=>{
//   setNumState(numState -1)
// }

// return (
//   <div className="h-screen w-screen justify-center flex flex-col items-center">
//     <p>counter</p>
//     <p>{fetchCount}</p>
//     <div className="flex flex-row gap-10">
//       <button onClick={addToNumber}>+</button>
//       <button onClick={subFromNumber}>-</button>
//     </div>
//   </div>
// );
