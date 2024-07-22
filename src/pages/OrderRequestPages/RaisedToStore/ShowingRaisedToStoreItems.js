import React, { useState } from "react";
import { useAuth } from "../../../AuthContext";
import { NavLink } from "react-router-dom";
import WhiteButton from "../../../Components/UI/Buttons/WhiteButton";
import BlueButton from "../../../Components/UI/Buttons/BlueButton";
import Title from "../../../Components/UI/Title/Title";
import HeaderCard from "../../../Components/UI/Cards/HeaderCard";

const HeaderCardItems = ["Item Name","UOM","Par Level","Current Inventory", "Order Quantity"];

function ItemCard({src,name,uom,index,requestedQuantity,receivedQuantity,}) {
  return (
    <div class="flex">
      <article
        className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center px-4 py-3.5 mt-1 w-full lg:h-[48px] h-[40px] ${
          index % 2 ? "bg-indigo-50" : "bg-blue-200"
        } rounded-lg max-md:max-w-full`}
      >
        <div class="flex w-40">
          <img
            src={src}
            alt={`Source of the ${name} image`}
            class="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-md"
          />
          <div>{name}</div>
        </div>
        <div>{uom}</div>
        <div>parlevel</div>
        <div>{requestedQuantity}</div>
        <div>{receivedQuantity}</div>
        <div>Vendor</div>
        <div>Date</div>
      </article>
    </div>
  );
}

function ShowingRaisedToStore({ id, items, setOpenDraftitems }) {
  const [selecteditems, setSelectedItems] = useState([]);
  const [addedtoDraft, setAddedtoDraft] = useState([]);

  const {image, uom, inventoryItems, rawIngredients } = useAuth();

  function handleAddtoDraft() {
    setAddedtoDraft(selecteditems);
    console.log("Added to Draft" + addedtoDraft);
  }
  function handleCancelAddtoDraft() {
    console.log("Set Selected Items to 0");
    setSelectedItems(addedtoDraft);
  }

  function getImageSrcById(id) {
    const itemsrc = image.find((item) => item.id === id);
    return itemsrc ? itemsrc : null;
  }

  function getUOMById(id) {
    const itemsrc = uom.find((item) => item.id === id);
    return itemsrc ? itemsrc : null;
  }

  function getRawIngredientById(id) {
    const itemsrc = rawIngredients.find((item) => item.id === id);
    return itemsrc ? itemsrc : null;
  }

  function getInventoryItemById(id) {
    const itemsrc = inventoryItems.find((item) => item.id === id);
    return itemsrc ? itemsrc : null;
  }

  return (
    <>
    <div class="flex flex-col max-h-screen h-screen w-full">
        <header class=" container h-auto ">
            <Title Title="Order Request Order" />
            <HeaderCard HeaderCardItems={HeaderCardItems} />
        </header>

        <div class="flex-1 container overflow-auto">
   
            {items.map((item, index) => (
             <ItemCard
                key={index}
                id={item.id}
                name={`${getRawIngredientById(getInventoryItemById(item.id).raw_ingredient_id).name }`}
                index={index}
                uom={getUOMById(getInventoryItemById(item.id).raw_ingredient_id).UOM}
                src={getImageSrcById(getInventoryItemById(item.id).raw_ingredient_id).src}
                requestedQuantity={item.requested_quantity}
                receivedQuantity={item.received_quantity} />
            ))}

        </div>

        <footer class="container h-auto ">
            <div className="fixed bottom-0 left-0 right-0  w-full h-[36px] flex justify-end mb-10 gap-4 px-10">
                <NavLink to="/Indent">
                    <div onClick={() => (setOpenDraftitems(false))}><WhiteButton text={"Done"} /></div>
                </NavLink>
                <NavLink to="/Indent/Drafting"> 
                    <BlueButton text={"Copy to Draft"} />
                </NavLink>
            </div>
        </footer>
    </div>

      
    </>
  );
}

export default ShowingRaisedToStore;
