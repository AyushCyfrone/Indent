import { useState } from "react";

function Radio() {
    const [clicked, setClicked] = useState(false);
    
    function handleClick() {
        setClicked(!clicked);
    }

    return (
        <>
        <div class={`m-1 flex items-center justify-center w-10 h-10 rounded-full ${clicked? "hover:bg-blue-100" : "hover:bg-gray-200"} active:bg-blue-200`} onClick={handleClick}>
            <div class={` h-6 w-6 flex justify-center items-center border-2 rounded-full ${clicked ? "border-blue-500" : "border-black"}`}>
                {clicked && <div class="w-4 h-4 rounded-full bg-blue-500"></div>}
            </div>
        </div>
        </>
    );
}

export default Radio;
