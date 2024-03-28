"use client"

import React, { useEffect , useState } from 'react';




export default function Home() {
  const [show , setShow] = useState(false);
  const [countdown , setcount] = useState(10);

    useEffect(() => {
      if(countdown > 0){
        const timer = setTimeout(() => {
          console.log('1 minute has passed');
           setcount(countdown -1);
          // setShow(true)
        }, 1000); // 60000 milliseconds = 1 minute
        return () => clearTimeout(timer); // This clears the timer when the component unmounts
  
      }
  
    }, [countdown]);
  
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>hewloo worls </h1>
        <div className='text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'>
            {countdown}
        </div>
    </main>
  );
}
