import React, { useEffect, useState } from 'react';
import Title from '../../UI/Title/Title';
import HeaderCard from '../../UI/Cards/HeaderCard';
import { useAuth } from '../../../AuthContext';
import Counter from '../../UI/Counter/Counter';
import { useParams } from 'react-router-dom';
import WhiteButton from '../../UI/Buttons/WhiteButton';
import BlueButton from '../../UI/Buttons/BlueButton';
import Modal from "../../UI/Modal/Modal";
import { NavLink } from 'react-router-dom';

const HeaderCardItems = ["Id", "Date", "Kitchen", "No of Items", "Raised By", "Status"]; 

function ItemCard({ src, parlevel, UOM, currentInventory, name, index, quantity }) {
  const [count, setCount] = useState((quantity) ? quantity : 1);

  return (
    <>
      <div className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center px-4 py-3.5 mt-1 w-full lg:h-[48px] h-[40px] ${(index % 2) ? "bg-indigo-50" : "bg-blue-200"} rounded-lg max-md:max-w-full`}>
        <div className="flex w-20">
          <img src={src} className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-md"></img>
          <div>{name}</div>
        </div>
        <div>{UOM}</div>
        <div>{currentInventory}</div>
        <div>{parlevel}</div>
        <Counter count={count} setCount={setCount} />
      </div>
    </>
  );
}

function ExistingDraftItemsbyID() {
  const [draftitemstoshow, setDraftitemstoshow] = useState([]);
  const [loading, setLoading] = useState(true);
  const { existingdraft, rawIngredients, inventoryItems, image, uom, parlevel } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    const fetchDraftItems = () => {
      if (existingdraft && existingdraft.length > 0) {
        const item = existingdraft.find(item => item.id === parseInt(id));
        if (item) {
          setDraftitemstoshow(item.items);
        } else {
          console.log(`No draft item found with id ${id}`);
          setDraftitemstoshow([]);
        }
      } else {
        console.log('existingdraft is undefined or empty');
        setDraftitemstoshow([]);
      }
      setLoading(false);
    };

    fetchDraftItems();
  }, [id, existingdraft]);


  // Modal State and Functions //////////////////
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Close Modal")
    setIsModalOpen(false);
  };

  const handleOkayModal = () => {
    setIsModalOpen(false);
  };

  // Modal States and Functions //////////////


  function getImageSrcById(id) {
    const itemsrc = image.find(item => item.id === id);
    return itemsrc ? itemsrc : null;
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
    <div>
      <Title Title="Indent/Draft" />
      <HeaderCard HeaderCardItems={HeaderCardItems} columns={6} />

      <div className="h-[424px] overflow-y-auto">
        {loading ? (
          <div>Loading...</div>
        ) : draftitemstoshow.length > 0 ? (
          draftitemstoshow.map((item, index) => (
            <ItemCard
              key={index}
              src={getImageSrcById(getInventoryItemById(item.id).raw_ingredient_id).src}
              parlevel={getParlevleById(getInventoryItemById(item.id).raw_ingredient_id).current_parlevel}
              UOM={getUOMById(getInventoryItemById(item.id).raw_ingredient_id).UOM}
              currentInventory={getInventoryItemById(item.id).aggregate_count}
              name={getRawIngredientById(getInventoryItemById(item.id).raw_ingredient_id).name}
              quantity={item.quantity}
              index={index}
            />
          ))
        ) : (
          <div>Loading ...</div>
        )}
      </div>


      <div class="absolute bottom-4 h-auto flex justify-around">
            
            <div class="flex mr-40 justify-between">
                <div>
                    <NavLink to="/Indent/AddNewItem">
                        <WhiteButton text={"Add More"} />
                    </NavLink>
                </div>

                <div class="flex ml-40 gap-4">
                    <NavLink to="/Indent/Drafting">
                        <WhiteButton text={"Cancel"} />
                    </NavLink>
                    <NavLink>
                        <div onClick={handleOpenModal}>
                            <BlueButton text={"Confirm"} />
                        </div>
                    </NavLink>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} onOkay={handleOkayModal} noOfItems={21} kitchen={"kitchen"} setShowitems={(val) => (console.log(""))}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ExistingDraftItemsbyID;