import React from "react";
import { useState } from "react";
import { useAuth } from "../../../AuthContext";
import SubcategoryList from "../../../pages/components/SubCategoryList";
import ChooseItemfromSubCategory from "./sub-pages/ChooseItemfromSubCategory";
import Title from "../../UI/Title/Title";
import BlueButton from "../../UI/Buttons/BlueButton";
import { useParams } from 'react-router-dom';


function AddMoreItembyID() {  
  const [searchitem, setSearchItem] = useState("");  // searchbar value
  const [showsubcategory, setShowSubcategory] = useState(false); // show/hide subcategory
  const [selectedSubcategory, setSelectedSubcategory] = useState([]); // list of selected subcategories
  const [selectedSubcategoryItems, setSelectedSubcategoryItems] = useState([]); // list of items of selected subcategories
  const [leftdivitems, setLeftDivItems] = useState([]); // list of items for left div
  const [rightdivitems, setRightDivItems] = useState([]); // list of items for right div
  const [whichdiv,setWhichdiv] = useState(0); // show selected category item or remain in search page
  const [showCheckbox, setShowCheckbox] = useState(true); // Choosed if we have to show checkbox or not
  const { id } = useParams();

  const { subcategory, inventoryItems } = useAuth();

  // all the subcategories selected by the user are stored in selectedSubcategory
  // in the for loop for every selected subcategory, we filter the items from inventoryItems
  // and store them in result array
  // then we divide the result array into two arrays left and right
  function handleshow() {
    var result = [];
    for (var i = 0; i < selectedSubcategory.length; i++) {
      const item = inventoryItems.filter(
        (item) => item.subCategory_id === selectedSubcategory[i]
      );
      result = result.concat(item);
    }

    const left = result.filter((item, index) => index % 2 === 0);
    const right = result.filter((item, index) => index % 2 !== 0);

    setLeftDivItems(left); // items to shown in left div while showing selected subcategory items
    setRightDivItems(right); // items to shown in right div while showing selected subcategory items
    setWhichdiv(whichdiv+1); // change the state from search page to selected subcategory items page

    setSelectedSubcategoryItems(result); // store all the items of selected subcategories (not used in functionality)
  }

  return (
    <div class="flex flex-col h-screen">
      <Title Title={"Indent/Draft/Add New draft"} />
      <div class="flex z-30 justify-end">
        
        {/* This is the Header Seaction Containing SearchBar and Select Subcategory.*/}

        <input value={searchitem} placeholder="Search Items" onChange={(e) => setSearchItem(e.target.value)} class="w-full border-blue-500 border rounded-full px-2 m-1 focus:outline-none "></input>

        <div class="w-60 ml-8 px-2 font-semibold rounded-md"></div>
        <div class="absolute bg-white flex-row">
          <div class="w-[200px] border-black border bg-blue-100 text-blue-500 ml-8 px-2 font-semibold rounded-md cursor-pointer" onClick={() => setShowSubcategory(!showsubcategory)}>
            All
          </div>

          {showsubcategory && (
            <div class="w-[200px] h-auto border-blue-400 border-2 ml-8">
              <div class="flex justify-end">
              {(selectedSubcategory.length !== 0) && <button class={`bg-blue-500 py-1 px-2 text-white hover:bg-blue-600 m-2 rounded-md cursor-pointer`} onClick={() => {handleshow(); setShowSubcategory(!showsubcategory)}} >
                Apply
              </button>}
              </div>
              {subcategory.map((item, index) => (
                
                <SubcategoryList
                  key={index}
                  name={item.name}
                  noOfItems={item.noOfItems}
                  class="flex justify-end"
                  setSelectedSubcategory={setSelectedSubcategory}
                  id={item.id}
                  src={item.src}
                  selectedSubcategory={selectedSubcategory}/>
              ))}
              {console.log(selectedSubcategory)}
            </div>
          )}
        </div>
      </div>
      {/* Header Section End containing Search Bar and Selecting Subcategory */}
    
      <div>
        {whichdiv && <ChooseItemfromSubCategory leftdivitems={leftdivitems} rightdivitems={rightdivitems} showCheckbox={showCheckbox} id={id} />}
      </div>

      {!whichdiv && <div class="flex-grow border-black border m-2 flex flex-col justify-between">
        <div class="flex flex-col px-20 py-10 justify-center items-center">
            <div className="flex justify-center items-center pt-28 pb-24 max-w-full text-xl text-blue-500 rounded-2xl border border-blue-500 border-dashed w-[550px] max-md:px-5">
                <div>
                     Please Select Item
                </div>
            </div>
        </div>

        <div class="flex justify-end p-10">
            <BlueButton text={"Back To Draft"} />
        </div>
        </div>}
     </div>

     
  );
}

export default AddMoreItembyID;
