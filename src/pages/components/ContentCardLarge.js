import * as React from "react";
import HeaderCard from "../../Components/UI/Cards/HeaderCard";
import Title from "../../Components/UI/Title/Title";

function ContentCard({ id, date, kitchen, noOfItems, raisedBy, status, index }) {
  return (
    <div>
      <article className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center px-4 py-3.5 mt-1 w-full lg:h-[48px] h-[40px] ${(index % 2) ? "bg-indigo-50 hover:border border-blue-500":"bg-blue-200 hover:border border-blue-500"} rounded-lg max-md:max-w-full`}>
        <div className="text-zinc-800">{id}</div>
        <time dateTime={date}>{date}</time>
        <div>{kitchen}</div>
        <div>{noOfItems}</div>
        <div>{raisedBy}</div>
        <div className="text-sky-500">{status}</div>
      </article>
    </div>
  )
}

function ContentCardLarge({content, HeaderCardItems, handleShowItems}) {
  console.log("This is in ContentCardLarge.js");
  console.log(content);
  
  return (
    <main className="flex flex-col text-base font-medium text-black">
      <Title Title={"Indent/Raised To Store"}/>
      <HeaderCard HeaderCardItems={HeaderCardItems} />
      
      {content.map((row, index) => (
        <div onClick={() => handleShowItems(row.id)}>
          <ContentCard
          key={index}
          id={row.id}
          date={row.date}
          kitchen={row.kitchen}
          noOfItems={row.items && row.items.length > 0 ? row.items.length : 0}
          raisedBy={row.raisedBy}
          status={row.status}
          index={index} 
        />
        </div>
        
      ))}
    
    </main>
  );
}

export default ContentCardLarge;