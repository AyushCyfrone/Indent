import InactiveCheckbox from "../../Components/UI/Checkboxes/InactiveCheckbox";
import Checkbox from "../../Components/UI/Checkboxes/checkbox";
import { useEffect, useState } from "react";

function ItemCard({ name, index, uom, currentInventory, src, parlevel, id, selecteditems, setSelectedItems, addedtoDraft, showCheckbox}) {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const item = selecteditems.find((item) => item === id);
        if(item !== undefined){
            setClicked(true);
        }
        else{
            setClicked(false);
        }
    }
    , [selecteditems]);

    function handleClick() {
        const item = selecteditems.find((item) => item === id);
        if(item === undefined){
            setSelectedItems((prev) => [...prev, id]);
        }
        else{
            setSelectedItems(selecteditems.filter((item) => item !== id));
        }
    }

    return (
        <div class="flex"> 

        { showCheckbox ? <div>
            {
                addedtoDraft.find((item) => item === id) ? <InactiveCheckbox /> : < Checkbox state={handleClick} clicked={clicked} setClicked={setClicked} />
            }
        </div> : <div> </div>}

        <article className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center p-1 pt-3 mt-1 w-full lg:h-[48px] h-[40px] ${(index % 2) ? "bg-indigo-50":"bg-blue-200"} rounded-lg max-md:max-w-full`}>
        <div class="flex w-[140px]">
            <img src={src} alt={`Source of the ${name} image`} class="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-md" />
            <div class="ml-1">{name}</div> 
        </div>
        <div>{uom}</div>
        <div>{currentInventory}</div>
        <div>{parlevel}</div>
        </article>
      </div>
    )
}

export default ItemCard;