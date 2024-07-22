import React from 'react';

function HeaderCard({ HeaderCardItems, columns }) {
  return (
    <div
      className={`text-white font-sans text-lg grid grid-cols-${columns} sm:grid-cols-${columns} md:grid-cols-${columns} mt-1 w-full h-[40px] max-md:max-w-full bg-blue-500`}
    >
      {HeaderCardItems.map((item, index) => (
        <div key={index} className=" border-r border-black pl-2 flex justify-center items-center">
          {item}
        </div>
      ))}
    </div>
  );
}
{/* <div class="bg-blue-500 w-full h-[40px] text-white font-sans">
<ul class="flex justify-around items-center text-lg m-2 pt-1">
  {
    HeaderCardItems.map((items,index) => (
      <li key={index}>{items}</li>
    ))
  }
</ul>
</div> */}

export default HeaderCard;