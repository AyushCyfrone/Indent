import React from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";
import { useAuth } from '../../../AuthContext';
import ChooseItemfromSubCategory from '../../pages/AddIndent/sub-pages/ChooseItemfromSubCategory';

function SearchBar({input, setInput}) {
    const [leftdivitems, setLeftDivItems] = React.useState([]);
    const [rightdivitems, setRightDivItems] = React.useState([]);
    const [showCheckbox, setShowCheckbox] = React.useState(true);

    const { rawIngredients, inventoryItems } = useAuth();

  
    function getRawIngredientById(id) {
      const itemsrc = rawIngredients.find(item => item.id === id);
      return itemsrc ? itemsrc : null;
    }

    function handleshow(result) {
  
      const left = result.filter((item, index) => index % 2 === 0);
      const right = result.filter((item, index) => index % 2 !== 0);
  
      setLeftDivItems(left); // items to shown in left div while showing selected subcategory items
      setRightDivItems(right); // items to shown in right div while showing selected subcategory items
  
    }

    function handleInput(value) {
      setInput(value);

      if (value && inventoryItems) {
        const result = inventoryItems.filter((item) => {
          const item_name = getRawIngredientById(item.raw_ingredient_id).name + " " + "( " + item.Brand_name + " )";
          return item_name.toLowerCase().includes(value.toLowerCase());
        });

        handleshow(result);
      }
    }

    function handleClose() {
      setInput("");
      setLeftDivItems([]);
      setRightDivItems([]);
    }
    
  return (
    <>
    <div class="flex flex-row justify-start m-1">

        <div class="max-w-[576px] w-full h-10 border border-blue-200 rounded-full flex justify-start items-center">

          <div class=""><FaSearch id="search-icon" class="m-2 text-gray-500 cursor-pointer" /></div>

          <input class="text-base text-gray-500 w-full h-auto focus:outline-none mr-1" 
                 placeholder={`${(input === "") ? "Search Items" : input}`} 
                 value={ input} 
                 onChange={(e) => handleInput(e.target.value)}>
          </input>
          <div class="bg-gray-200 rounded-full mr-2 hover:bg-gray-300 text-sm" onClick={handleClose}>
            <FaTimes id="cross-icon" className="m-2 text-gray-500 cursor-pointer" />
          </div>
          </div>   
    </div>

    {(input !== "") && <ChooseItemfromSubCategory leftdivitems={leftdivitems} rightdivitems={rightdivitems} showCheckbox={showCheckbox} id={0} />}
    
    </>
  )
}

export default SearchBar