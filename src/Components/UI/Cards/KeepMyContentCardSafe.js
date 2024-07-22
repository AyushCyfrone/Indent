// import * as React from "react";

// function ContentCardLarge({ id, date, kitchen, noOfItems, RaisedBy, status, items, index }) {
//   return (
//     <div>
//       <article className={`flex flex-wrap gap-5 gap-y-24 justify-around content-center px-4 py-3.5 mt-1 w-full lg:h-[48px] h-[40px] ${(index % 2) ? "bg-indigo-50 hover:border-2 border-blue-500":"bg-blue-200 hover:border-2 border-blue-500"} rounded-lg max-md:max-w-full`}>
//         <div className="text-zinc-800">{id}</div>
//         <time dateTime={date}>{date}</time>
//         <div>{kitchen}</div>
//         <div>{items.length}</div>
//         <div>{RaisedBy}</div>
//         <div className="text-sky-500">{status}</div>
//       </article>
//     </div>
//   )
// }

// const ContentCardSmall = ({ id, date, kitchen, noOfItems, RaisedBy, status, items, index}) => (
//   <div className={`flex m-1 px-4 py-2 h-[58px] ${(index % 2) ? "bg-indigo-50":"bg-blue-200"} rounded-lg flex-wrap`}>
//     <div class="flex flex-wrap justify-between w-full ">
//       <div class="text-xs font-semibold ">{id}</div>
//       <div class="text-xs font-semibold ">{date}</div>
//       <div class="text-xs font-semibold text-blue-500">{kitchen}</div>
//     </div>
      
//     <div class="flex flex-wrap justify-between w-full mt-2">
//       <div class="text-xs  ">{items.length}</div>
//       <div class="text-xs  ">{RaisedBy}</div>
//       <div class="text-xs ">{status}</div>
//     </div>
//   </div>
// );

// function ContentCard({content, HeaderCardItems, handleShowItems}) {
//   console.log("This is in ContentCard.js");
//   console.log(content);
  
//   return (
//     <>
//     <div class="md:block hidden cursor-pointer">
//     <main className="flex flex-col text-base font-medium text-black">
      
//       {content.map((item, index) => (
//         <div onClick={() => handleShowItems(item.id)}>
//           <ContentCardLarge key={index} {...item} index={index} />
//         </div>
//       ))}
    
//     </main>
//     </div>

//     <div class="md:hidden">
//     <main className="flex flex-col m-4 border-black border-2 cursor-pointer">
//       {content.map((order, index) => (
//         <div onClick={() => handleShowItems(order.id)}>
//           <ContentCardSmall key={index} {...order} index={index} />
//         </div>
//       ))}
//     </main>
//     </div>
//     </>
    
//   );
// }

// export default ContentCard;

import * as React from "react";

function ContentCardLarge({ id, date, kitchen, noOfItems, RaisedBy, status, items, index }) {
  const [itemsLength, setItemsLength] = React.useState(0);
  React.useEffect(() => {
    setItemsLength(items?.length || 0); // Use optional chaining to handle undefined items
  }, [items]);

  return (
    <div className="font-sans">
      <div
        className={`grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 mt-1 w-full lg:h-[48px] h-[40px] ${
          index % 2
            ? "bg-indigo-50 hover:border-2 border-blue-500"
            : "bg-blue-200 hover:border-2 border-blue-500"
        } rounded-lg max-md:max-w-full`}
      >
        <div className=" pl-2 flex justify-start items-center"> {id}</div>
        <div className=" pl-2 flex justify-start items-center"> {date}</div>
        <div className=" pl-2 flex justify-start items-center"> {kitchen} </div>
        <div className=" pl-2 flex justify-start items-center"> {itemsLength} </div>
        <div className=" pl-2 flex justify-start items-center"> {RaisedBy} </div>
        <div className="text-blue-500 flex justify-start items-center"> {status} </div>
      </div>
    </div>
  );
}

function ContentCardSmall({ id, date, kitchen, noOfItems, RaisedBy, status, items, index }) {
  const [itemsLength, setItemsLength] = React.useState(0);
  React.useEffect(() => {
    setItemsLength(items?.length || 0); // Use optional chaining to handle undefined items
  }, [items]);

  return (
    <div
      className={`flex m-1 px-4 py-2 h-[58px] ${
        index % 2 ? "bg-indigo-50" : "bg-blue-200"
      } rounded-lg flex-wrap`}
    >
      <div className="flex flex-wrap justify-between w-full ">
        <div className="text-xs font-semibold ">{id}</div>
        <div className="text-xs font-semibold ">{date}</div>
        <div className="text-xs font-semibold text-blue-500">{kitchen}</div>
      </div>

      <div className="flex flex-wrap justify-between w-full mt-2">
        <div className="text-xs  ">{itemsLength}</div>
        <div className="text-xs  ">{RaisedBy}</div>
        <div className="text-xs ">{status}</div>
      </div>
    </div>
  );
}

function ContentCard({ content, handleShowItems }) {
  console.log("This is in ContentCard.js");
  console.log(content);

  return (
    <>
      <div className="md:block hidden cursor-pointer">
        <main className="flex flex-col text-base font-medium font-sans text-black">
          {content.map((item, index) => (
            <div onClick={() => handleShowItems(item.id)}>
              <ContentCardLarge key={index} {...item} index={index} />
            </div>
          ))}
        </main>
      </div>

      <div className="md:hidden">
        <main className="flex flex-col m-4 border-black border-2 cursor-pointer">
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