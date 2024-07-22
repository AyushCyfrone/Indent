import React from "react";
import { useState } from "react";
import { useAuth } from "../../../AuthContext";
import SubcategoryList from "../../../pages/components/SubCategoryList";
import ChooseItemfromSubCategory from "./sub-pages/ChooseItemfromSubCategory";
import ChooseSubCategorySearch from "./sub-pages/ChooseSubCategorySearch";
import Title from "../../UI/Title/Title";
import SearchBar from "../../UI/Bar/SearchBar";
import ToggleButton from "../../UI/ToggleButton/ToggleButton";

function AddNewIndent() {
  const [showsubcategory, setShowSubcategory] = useState(false); // show/hide subcategory
  const [selectedSubcategory, setSelectedSubcategory] = useState([]); // list of selected subcategories
  const [selectedSubcategoryItems, setSelectedSubcategoryItems] = useState([]); // list of items of selected subcategories
  const [leftdivitems, setLeftDivItems] = useState([]); // list of items for left div
  const [rightdivitems, setRightDivItems] = useState([]); // list of items for right div
  const [whichdiv,setWhichdiv] = useState(0); // show selected category item or remain in search page
  const [showCheckbox, setShowCheckbox] = useState(true); // Choosed if we have to show checkbox or not
  const [input, setInput] = React.useState("");
  const [addedtoDraft, setAddedtoDraft] = useState([]);



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
    <div>
      <Title Title={"Indent/Draft/Add New draft"} />{addedtoDraft}
      
      {/* <div class="flex justify-between">
        <SearchBar input={input} setInput={setInput} />
        {/* <ToggleButton setShowSubcategory={setShowSubcategory} showsubcategory={showsubcategory} handleshow={handleshow} selectedSubcategory={selectedSubcategory} setSelectedSubcategory={setSelectedSubcategory}  /> */}
      {/* </div> */} 
      <SearchBar input={input} setInput={setInput} />
      <div class="relative w-full ">
      {(input === "") && <div class="absolute flex justify-end z-50 left-[calc(100%-200px)] -top-10">        
        <ToggleButton 
            setShowSubcategory={setShowSubcategory} 
            showsubcategory={showsubcategory} 
            handleshow={handleshow} 
            selectedSubcategory={selectedSubcategory} 
            setSelectedSubcategory={setSelectedSubcategory} 
        />
    </div>}
</div>


    <div>
   {(!whichdiv && input === "") ? <ChooseSubCategorySearch /> : (input === "") ? <ChooseItemfromSubCategory leftdivitems={leftdivitems} rightdivitems={rightdivitems} showCheckbox={showCheckbox} setInDraft={setAddedtoDraft} inDraft={addedtoDraft} /> : <></>}
 </div> 
      

    </div>
  );
}

export default AddNewIndent;



// {/* <Title Title={"Create New Draft / Please Select Items to be added"} />

// {/* This is the Header Seaction Containing SearchBar and Select Subcategory.*/}
// <div class="flex z-30 justify-between">
//   <SearchBar input={input} setInput={setInput}  />

//   {/* Select Category item ToggleBar */}
//   <div class="bg-white flex-row z-50">
//     <div
//       class="w-[200px] border-black border bg-blue-100 text-blue-500 ml-8 px-2 font-semibold rounded-md cursor-pointer flex justify-center"
//       onClick={() => setShowSubcategory(!showsubcategory)}
//     >
//       Show SubCategory
//     </div>

//     {showsubcategory && (
//       <div class="w-[200px] h-auto border-blue-400 border-2 ml-8">
//         <div class="flex justify-end">
//         {(selectedSubcategory.length !== 0) && <button
//           class={`bg-blue-500 py-1 px-2 text-white hover:bg-blue-600 m-2 rounded-md cursor-pointer`}
//           onClick={() => {handleshow(); setShowSubcategory(!showsubcategory)}}
//         >
//           Apply
//         </button>}
//         </div>
//         {subcategory.map((item, index) => (
          
//           <SubcategoryList
//             key={index}
//             name={item.name}
//             noOfItems={item.noOfItems}
//             class="flex justify-end"
//             setSelectedSubcategory={setSelectedSubcategory}
//             id={item.id}
//             src={item.src}
//             selectedSubcategory={selectedSubcategory}
//           />
        
//         ))}
//         {console.log(selectedSubcategory)}
//       </div>
//     )}
//   </div>
// </div>
// {/* Header Section End containing Search Bar and Selecting Subcategory */}

// <div>
//   {(!whichdiv && input === "") ? <ChooseSubCategoryorSearch /> : <ChooseItemfromSubCategory leftdivitems={leftdivitems} rightdivitems={rightdivitems} showCheckbox={showCheckbox} id={0} />}
// </div> */}



