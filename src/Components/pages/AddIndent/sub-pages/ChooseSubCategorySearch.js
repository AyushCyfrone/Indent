import React from "react";
import { useAuth } from "../../../../AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContentCard({ id, date, kitchen, items, RaisedBy, status, index}) {
  const navigate = useNavigate();

  function handleNavigate() {
      const data = {items}
      console.log("Data sending to Copy page ...")
      navigate('/Indent/AddNewItem/CopiedItems', { state: data });
  }

  return (
    <div class="max-h-[450px] h-auto overflow-y-auto custom-scrollbar">
    <div className="font-sans font-semibold">
      <div
        className={`grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 mt-1 w-full lg:h-[48px] h-[40px] ${
          index % 2
            ? "bg-indigo-50 hover:border-2 border-blue-500"
            : "bg-blue-200 hover:border-2 border-blue-500"
        } rounded-lg max-md:max-w-full`}
      >
        <div className=" pl-2 flex justify-center items-center">
          <span class="text-right w-10">{id}</span>
        </div>
        <div className=" pl-2 flex justify-center items-center">
            <span class="text-right w-20">{date}</span>
        </div>
        <div className=" pl-2 flex justify-center items-center"> {kitchen} </div>
        <div className=" pl-2 flex justify-center items-center"> 
        <span class="text-right w-4">{21}</span>
        </div>
        <div className=" pl-2 flex justify-center items-center"> 
            <span class="text-left w-20">{RaisedBy}</span>
        </div>
        <div className=" pl-2 flex justify-center items-center cursor-pointer" onClick={handleNavigate}> 
            <span class="text-left w-20 hover:underline text-blue-500">copy</span>
        </div>
      </div>
    </div>
    </div>
  )
}


function ChooseSubCategoryorSearch() {
  const { existingdraft } = useAuth();

  const [viewall, setViewAll] = useState(false);

  function handleViewAll() { 
    setViewAll(!viewall);
  } 

  return (
    // This mainly Contain TWO parts
    <>
    {/* First Part : Dashed Square (Please Select the items) */}
      <div class="flex flex-col px-20 py-10 justify-center items-center">
      <div className="flex justify-center items-center pt-12 pb-12 max-w-full text-xl text-blue-500 rounded-2xl border border-blue-500 border-dashed w-[550px] max-md:px-5">           
          <div >
            Please Select Item
          </div>
        </div>
      </div>

    {/* Second Part : Show Items in already Raised Drafts */}
    {/* Content Card contains a link usese Navigation and sending Data directly to ShowCopied Page {with items data}*/}
      <div class="h-auto max-h-48 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {!viewall && existingdraft.slice(0,3).map((item, index) => (
          <ContentCard
            key={index}
            index={index}
            id={item.id}
            date={item.date}
            kitchen={item.kitchen}
            RaisedBy={item.RaisedBy}
            items={item.items}
            status={item.status}
          />
        ))}
        {viewall && existingdraft.map((item, index) => (
          <ContentCard
            key={index}
            index={index}
            id={item.id}
            date={item.date}
            kitchen={item.kitchen}
            noOfItems={item.noOfItems}
            RaisedBy={item.RaisedBy}
            items={item.items}
            status={item.status}
          />
        ))}
      </div>
      <div class="flex justify-end cursor-pointer" onClick={handleViewAll}>{(viewall) ? "View Less" : "View All"}</div>
    </>
  );
}

export default ChooseSubCategoryorSearch;
