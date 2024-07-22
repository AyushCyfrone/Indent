import React from "react";
import { useState } from "react";
import { useAuth } from "../../../AuthContext";
import SubcategoryList from "./SubCategoryList";


function SubCategoryModal({ showsubcategory, setShowSubcategory, handleshow}) {
  const [selectedSubcategory, setSelectedSubcategory] = useState([]);

  const { subcategory } = useAuth();

  return (
    <div>
      <div class="flex z-50">
            <div class="w-40 h-auto border-black border-2 ml-8">
              {(selectedSubcategory.length !== 0) && <button
                class={`bg-blue-500 p-1 text-white hover:bg-blue-600 m-2 rounded-sm`}
                onClick={() => {handleshow(); setShowSubcategory(!showsubcategory)}}
              >
                Apply
              </button>}
              {subcategory.map((item, index) => (
                
                <SubcategoryList
                  key={index}
                  name={item.name}
                  noOfItems={item.noOfItems}
                  class="flex justify-end"
                  setSelectedSubcategory={setSelectedSubcategory}
                  id={item.id}
                  selectedSubcategory={selectedSubcategory}
                />
              
              ))}
              {console.log(selectedSubcategory)}
            </div>
        </div>
    </div>
  );
}

export default SubCategoryModal;
