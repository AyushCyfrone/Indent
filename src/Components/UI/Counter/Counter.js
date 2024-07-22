import React, { useState, useEffect } from 'react'

function Counter({ count, setCount}) {

  useEffect(() => {
    // Came to zero when refreshed
    localStorage.setItem('count', count.toString()); 
  }, [count]);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }


  return (
    <div class="flex justify-center items-center">
      <div class="flex flex-wrap h-9 w-44 justify-around">
        <div class="bg-white rounded-md h-full w-8 flex justify-center items-center text-2xl cursor-pointer" onClick={handleDecrement}>-</div>
        <div class="bg-white rounded-md h-full w-14 text-2xl text-blue-500 flex justify-center items-center">
          {count}
        </div>
        <div class="bg-white rounded-md h-full w-8 flex justify-center items-center text-2xl cursor-pointer" onClick={handleIncrement}>+</div>
      </div>
    </div>
  )
}

export default Counter;