import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ChooseItemfromSubCategory from "./ChooseItemfromSubCategory";
import Title from "../../../UI/Title/Title";



function ShowCopiedItems() {
  const location = useLocation();
  const [leftdivitems, setLeftDivItems] = useState([]);
  const [rightdivitems, setRightDivItems] = useState([]);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [allitemstoshow, setAllItemsToShow] = useState([{}]);

  function handleCheckboxshow() {
    setShowCheckbox(!showCheckbox);
  }

  function handleshow() {
    if (location.state && location.state.items){
      setAllItemsToShow(location.state.items);
    } 
    if (allitemstoshow.length > 0) {
      
      const left = location.state.items.filter((item, index) => index % 2 === 0);
      const right = location.state.items.filter((item, index) => index % 2 !== 0);

      setLeftDivItems(left);
      setRightDivItems(right);

      console.log(leftdivitems);
      console.log(rightdivitems);
    }
  }

  useEffect(() => {
    handleshow();
  }, []);

 
  return (
    <div>
        <div class="flex justify-between mt-4">
        <Title Title={"Indent/Draft/add new draft/Copy to Draft"} />

            <div class="flex gap-4">
            <div class="flex items-center justify-center">
                <div class={` w-20 ${showCheckbox ? "bg-indigo-50 border-blue-500" : "white border-blue-500"} hover:bg-indigo-100 text-blue-500 border border-blue-500 rounded-full p-1 flex justify-center items-center cursor-pointer`} onClick={handleCheckboxshow}>
                    Select All
                </div>
            </div>
            <div class="flex items-center justify-center">
                <div class={` w-20 ${showCheckbox ? "bg-blue-300" : "bg-blue-200"} hover:bg-blue-300 text-blue-500 rounded-full p-1 flex justify-center items-center cursor-pointer`} onClick={handleCheckboxshow}>
                    Select
                </div>
            </div>
            </div>
            
        </div>
      <div>
        <ChooseItemfromSubCategory
          leftdivitems={leftdivitems}
          rightdivitems={rightdivitems}
          showCheckbox={showCheckbox}
        />
      </div>
    </div>
  );
}

export default ShowCopiedItems;
