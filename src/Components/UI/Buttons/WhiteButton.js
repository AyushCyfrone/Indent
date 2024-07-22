import React from 'react'

function WhiteButton({text}) {
  return (
    <>
    
        <div class="flex justify-center text-base font-semibold text-blue-500 bg-white rounded-lg w-auto max-w-60 h-[40px] px-[24px] py-[8px] border border-blue-500 hover:bg-blue-200 tracking-wide font-poppins cursor-pointer">
            {text ? text : "Button"}
        </div>
    
    </>
  )
}

export default WhiteButton;