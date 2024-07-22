import * as React from "react";

const OrderItem = ({ id,date,kitchen,noOfItems,raisedBy,status,index}) => (
  <div className={`flex m-1 px-4 py-2 h-[58px] ${(index % 2) ? "bg-indigo-50":"bg-blue-200"} rounded-lg flex-wrap`}>
    <div class="flex flex-wrap justify-between w-full ">
      <div class="text-xs font-semibold ">{id}</div>
      <div class="text-xs font-semibold ">{date}</div>
      <div class="text-xs font-semibold text-blue-500">{kitchen}</div>
    </div>
      
    <div class="flex flex-wrap justify-between w-full mt-2">
      <div class="text-xs  ">{noOfItems}</div>
      <div class="text-xs  ">{raisedBy}</div>
      <div class="text-xs ">{status}</div>
    </div>
  </div>
);

function ContentCardSmall({content, HeaderCardItems, handleShowItems}) {
  return (
    <main className="flex flex-col m-4 border-black border-2">
      {content.map((order, index) => (
        <div onClick={() => handleShowItems(order.id)}>
          <OrderItem key={index} {...order} index={index} />
        </div>
      ))}
    </main>
  );
}

export default ContentCardSmall;