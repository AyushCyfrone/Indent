import React, { useState } from "react";

function Rightarrow({ isActive }) {
  const [color, setColor] = useState(isActive);

  

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={`${color ? "white" : "#4299e0"}`}
        stroke={`${color ? "#4299e0" : "white"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        viewBox="0 0 24 24"
        class="size-7"
      >
        <path d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </div>
  );
}

export default Rightarrow;
