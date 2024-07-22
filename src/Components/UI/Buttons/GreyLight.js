import React from 'react'

function GreyLight({text}) {
  return (
    <>
    
        <div class="flex justify-center text-base font-semibold text-blue-500 bg-white rounded-lg w-auto h-[40px] px-[24px] py-[8px] border-2 border-blue-500 hover:bg-blue-200 tracking-wide font-poppins">
            {text ? text : "Button"}
        </div>
    
    </>
  )
}

export default GreyLight;