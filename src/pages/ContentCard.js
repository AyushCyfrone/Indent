import * as React from "react";
import HeaderCard from "../Components/UI/Cards/HeaderCard";
import Title from "../Components/UI/Title/Title";

function ContentCardLarge({ id, date, kitchen, noOfItems, RaisedBy, status, index }) {
  return (
    <div>
      <article className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center px-4 py-3.5 mt-1 w-full lg:h-[48px] h-[40px] ${(index % 2) ? "bg-indigo-50 hover:border border-blue-500":"bg-blue-200 hover:border border-blue-500"} rounded-lg max-md:max-w-full`}>
        <div className="text-zinc-800">{id}</div>
        <time dateTime={date}>{date}</time>
        <div>{kitchen}</div>
        <div>{noOfItems}</div>
        <div>{RaisedBy}</div>
        <div className="text-sky-500">{status}</div>
      </article>
    </div>
  )
}

const ContentCardSmall = ({ id, date, kitchen, noOfItems, RaisedBy, status, index}) => (
  <div className={`flex m-1 px-4 py-2 h-[58px] ${(index % 2) ? "bg-indigo-50":"bg-blue-200"} rounded-lg flex-wrap`}>
    <div class="flex flex-wrap justify-between w-full ">
      <div class="text-xs font-semibold ">{id}</div>
      <div class="text-xs font-semibold ">{date}</div>
      <div class="text-xs font-semibold text-blue-500">{kitchen}</div>
    </div>
      
    <div class="flex flex-wrap justify-between w-full mt-2">
      <div class="text-xs  ">{noOfItems}</div>
      <div class="text-xs  ">{RaisedBy}</div>
      <div class="text-xs ">{status}</div>
    </div>
  </div>
);

function ContentCard({content, HeaderCardItems, handleShowItems}) {
  console.log("This is in ContentCardLarge.js");
  console.log(content);
  
  return (
    <>
    <div class="md:block hidden">
    <main className="flex flex-col text-base font-medium text-black">
      
      {content.map((item, index) => (
        <div onClick={() => handleShowItems(item.id)}>
          <ContentCardLarge key={index} {...item} index={index} />
        </div>
      ))}
    
    </main>
    </div>

    <div class="md:hidden">
    <main className="flex flex-col m-4 border-black border-2">
      {content.map((order, index) => (
        <div onClick={() => handleShowItems(order.id)}>
          <ContentCardSmall key={index} {...order} index={index} />
        </div>
      ))}
    </main>
    </div>
    </>
    
  );
}

export default ContentCard;