import Checkbox from "../../Components/UI/Checkboxes/checkbox";
import { useEffect, useState } from "react";

function SubcategoryList({name,noOfItems,id,setSelectedSubcategory,selectedSubcategory,src}) {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
      const item = selectedSubcategory.find((item) => item === id);
      if(item !== undefined){
          setClicked(true);
      }
      else{
          setClicked(false);
      }
  }, [selectedSubcategory])

    function handleClick() {
      const item = selectedSubcategory.find((item) => item === id);
      if(item === undefined){
          setSelectedSubcategory( (prev) => [...prev, id]);
      }
      else{
          setSelectedSubcategory(selectedSubcategory.filter((item) => item !== id));
      }
  }
  
    return (
      <div class="flex justify-between items-center z-50">
        <Checkbox state={handleClick} clicked={clicked} setClicked={setClicked} />
        <img class="w-9 h-9 rounded-full p-1 bg-blue-100 shadow-2xl" src={src}></img>
        <div class="flex justify-start items-center w-[100px] mx-2">{name}</div>
        <div class="text-blue-500 flex justify-center items-center mr-2">
          ({noOfItems})
        </div>
      </div>
    );
}
export default SubcategoryList;