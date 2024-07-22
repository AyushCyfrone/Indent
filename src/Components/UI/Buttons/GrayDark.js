import React from 'react'

function GrayDark({text}) {
  return (
    <div class="">
        <div class="flex justify-center text-base font-semibold text-gray-500 bg-gray-200 rounded-lg w-auto h-[40px] px-[24px] py-[8px] hover:shadow-lg tracking-wide font-poppins">
            {text ? text : "Button"}
        </div>
    </div>
  )
}

export default GrayDark;