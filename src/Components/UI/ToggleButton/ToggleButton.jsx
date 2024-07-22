import React from "react";
import SubcategoryList from "./SubCategoryList"
import { useAuth } from "../../../AuthContext";

function ToggleButton({setShowSubcategory, showsubcategory, setSelectedSubcategory, selectedSubcategory, handleshow}) {

    const { subcategory, inventoryItems } = useAuth();

    return (
    <div>
      <div class="bg-white flex-row z-50">
        <div
          class="w-[200px] border-blue-500 border bg-indigo-50 hover:bg-blue-100 text-blue-500 p-1 font-semibold rounded-md cursor-pointer flex justify-center"
          onClick={() => setShowSubcategory(!showsubcategory)}>
          Show SubCategory
        </div>

        {showsubcategory && (
          <div class="w-[200px] h-auto border-blue-400 border-2 ">
            <div class="flex justify-end">
              {selectedSubcategory.length !== 0 && (
                <button class={`bg-blue-500 py-1 px-2 text-white hover:bg-blue-600 m-2 rounded-md cursor-pointer`} onClick={() => {handleshow(); setShowSubcategory(!showsubcategory)}}>
                  Apply
                </button>
              )}
            </div>
            {subcategory.map((item, index) => (
              <>
              <SubcategoryList
                key={index}
                name={item.name}
                noOfItems={item.noOfItems}
                class="flex justify-end"
                setSelectedSubcategory={setSelectedSubcategory}
                id={item.id}
                src={item.src}
                selectedSubcategory={selectedSubcategory}
              />
              </>
            ))}
            
            {console.log(selectedSubcategory)}
          </div>
        )}
      </div>
    </div>
  );
}

export default ToggleButton;
