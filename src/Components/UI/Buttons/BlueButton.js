import React from 'react'

function BlueButton({text}) {
  return (
    <div class="cursor-pointer">
        <div class="flex justify-center text-base font-semibold text-white bg-blue-500 rounded-lg w-auto h-[40px] px-[24px] py-[8px] hover:shadow-lg tracking-wide font-poppins">
            {text ? text : "Button"}
        </div>
    </div>
  )
}

export default BlueButton;