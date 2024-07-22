import React,{useEffect, useState} from 'react'
import HeaderCard from '../../../UI/Cards/HeaderCard';
import ItemCard from '../../../UI/Cards/ItemCard';
import { useAuth } from '../../../../AuthContext';
import {NavLink} from 'react-router-dom';
import WhiteButton from '../../../UI/Buttons/WhiteButton';
import GrayDark from '../../../UI/Buttons/GrayDark';
import BlueButton from '../../../UI/Buttons/BlueButton';
import { useNavigate } from 'react-router-dom';


const HeaderCardItems =["Select","Item","UOM","Par Level","Current Inv."];

// This component take two arrays of items as leftdivitems and rightdivitems and show them in two columns
// showCheckbox is a boolean value to show checkbox in the items or not
// Other Components used are HeaderCard, ItemCard, WhiteButton, GrayDark, BlueButton
function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate().toString().padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function ChooseItemfromSubCategory({leftdivitems, rightdivitems, showCheckbox, id, setInDraft, inDraft}) {

    const [selecteditems, setSelectedItems] = useState([]);
    const [addedtoDraft, setAddedtoDraft] = useState([]);
    const [currentId, setCurrentId] = useState(0);

    const navigate = useNavigate();

    const {setExistingDraft ,existingdraft, postDraft, updateDraft, indentdraftdata, image, uom, inventoryItems, rawIngredients, parlevel} = useAuth();

    useEffect(() => {
      setInDraft(addedtoDraft);
    }, [addedtoDraft]);

    useEffect(() => {
      if (currentId !== 0) {
        handleNavigation();
      }
    }, [currentId]);


    async function handledraftpost () {
      var draftData = {};
      var items = [];

        addedtoDraft.map((item) => {
          console.log(item);
          items.push({ "id": item,
                       "quantity": 1,
                       "remark": "" });
        });

      if(items.length !== 0) {
        
        draftData = {
          id: Math.floor(Math.random() * 10000),
          date: formatDate(new Date()),
          kitchen: "Hot Kitchen",
          noOfItems: items.length,
          RaisedBy: "Srikar",
          status: "Draft",
          items: items,
        };

        setCurrentId(draftData.id);

        var temp = [...existingdraft, draftData];

        setExistingDraft(temp);
        console.log("showing current draft id :" + id);
    
        return await postDraft(draftData); 
      }
    }

    function handleNavigation() {
      console.log("Navigating to Drafting Page");
      console.log("Current Id :" + currentId);
      navigate(`/Indent/ShowDraftItems/${currentId}`);
    }


    function handleAddtoDraft() {

        setAddedtoDraft(selecteditems);

        var id = handledraftpost(); 
          console.log(id._id);
    }

    function handleCancelAddtoDraft() {
        console.log("Set Selected Items to 0");
        setSelectedItems(addedtoDraft);
    }

  function getImageSrcById(id) {
    const itemsrc = image.find(item => item.id === id);
    return itemsrc ? itemsrc: null;
  }

  function getUOMById(id) {
    const itemsrc = uom.find(item => item.id === id);
    return itemsrc ? itemsrc : null;
  }

  function getRawIngredientById(id) {
    const itemsrc = rawIngredients.find(item => item.id === id);
    return itemsrc ? itemsrc : null;

  }

  function getInventoryItemById(id) {
    const itemsrc = inventoryItems.find(item => item.id === id);
    return itemsrc ? itemsrc : null;
  }

  function getParlevleById(id) {
    const itemsrc = parlevel.find(item => item.id === id);
    return itemsrc ? itemsrc : null;
  }

  return (
    <>
    <div class="flex">
        <div class="mr-1 w-full">
            <HeaderCard HeaderCardItems={HeaderCardItems} columns={5} />
            {
                leftdivitems.map((item, index) => (
                    <ItemCard
                        key={index}
                        id={item.id}
                        name={`${getRawIngredientById(getInventoryItemById(item.id).raw_ingredient_id).name + " " + '(' + item.Brand_name + ')'}`}
                        index={index}
                        uom={getUOMById(getInventoryItemById(item.id).raw_ingredient_id).UOM}
                        currentInventory={(getInventoryItemById(item.id).aggregate_count)}
                        src={getImageSrcById(getInventoryItemById(item.id).raw_ingredient_id).src}
                        parlevel={getParlevleById(getInventoryItemById(item.id).raw_ingredient_id).current_parlevel}
                        selecteditems={selecteditems}
                        setSelectedItems={setSelectedItems} 
                        addedtoDraft={addedtoDraft}
                        showCheckbox={showCheckbox}/>
                ))
            }
        </div> 
        <div class="ml-1 w-full">
            <HeaderCard HeaderCardItems={HeaderCardItems} columns={5} />
            {
                rightdivitems.map((item, index) => (
                    <ItemCard
                        key={index}
                        id={item.id}
                        name={`${getRawIngredientById(getInventoryItemById(item.id).raw_ingredient_id).name + " " + '(' + item.Brand_name + ')'}`}
                        index={index}
                        uom={getUOMById(getInventoryItemById(item.id).raw_ingredient_id).UOM}
                        currentInventory={(getInventoryItemById(item.id).aggregate_count)}
                        src={getImageSrcById(getInventoryItemById(item.id).raw_ingredient_id).src}
                        parlevel={getParlevleById(getInventoryItemById(item.id).raw_ingredient_id).current_parlevel}
                        selecteditems={selecteditems}
                        setSelectedItems={setSelectedItems} 
                        addedtoDraft={addedtoDraft}
                        showCheckbox={showCheckbox} />
                ))
            }
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0  w-full h-[36px] flex justify-end mb-10 gap-4 pr-10">
        <NavLink to={(selecteditems.length === addedtoDraft.length) ? "/Indent/Drafting" : "#"}>
        <div onClick={handleCancelAddtoDraft}>
          <WhiteButton text={"Cancel"} />
        </div>
        </NavLink>
        {/* to={(selecteditems.length === addedtoDraft.length) ? "/Indent/Drafting" : "#"} */}
        <NavLink> 
        <div onClick={handleAddtoDraft} >
            {(selecteditems.length === 0 && addedtoDraft.length === 0) ? <GrayDark text={"Add to Draft"} /> : <BlueButton text={(selecteditems === addedtoDraft && addedtoDraft !== 0) ? "View Draft" : "Add to Draft"} /> }
        </div>
        </NavLink>
      </div>
      </>  
    
  )
}

export default ChooseItemfromSubCategory