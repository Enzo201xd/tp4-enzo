'use client'

import { useState } from "react";

export default function Home() {
  const [numState, setNumState] = useState<any>(0)
  const addToNumber = ()=>{
    setNumState(numState +1)
  }
  const subFromNumber = ()=>{
    setNumState(numState -1)
  }

  return (
    <div className="h-screen w-screen justify-center flex flex-col items-center">
      <p>counter</p>
      <p>{numState}</p>
      <div className="flex flex-row gap-10">
        <button onClick={addToNumber}>+</button>
        <button onClick={subFromNumber}>-</button>
      </div>
    </div>
  );
}
