import React, { useEffect } from 'react'
import Title from '../../../Components/UI/Title/Title'
import HeaderCard from '../../../Components/UI/Cards/HeaderCard'
import { useAuth } from '../../../AuthContext';
import ContentCard from '../../ContentCard';
import {useState} from 'react';
import Counter from '../../../Components/UI/Counter/Counter';
import BlueButton from '../../../Components/UI/Buttons/BlueButton';
import WhiteButton from '../../../Components/UI/Buttons/WhiteButton';
import { Navigate, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const HeaderCardItems = ["Id","Date","Kitchen","No of Items","Raised By","Status"];
const HeaderCardItems1 = ["Item","UOM","CU","P.L.","Quantity"];

function ItemCard({ src, parlevel, UOM, currentInventory, name, index, quantity }) {
    const[count, setCount] = useState(0);

    useEffect(() => {
        quantity = count;
    }, [count]);

  return (
    <>
    <div className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center px-4 py-3.5 mt-1 w-full lg:h-[48px] h-[40px] ${(index % 2) ? "bg-indigo-50":"bg-blue-200"} rounded-lg max-md:max-w-full`}>
        <div class="flex w-20">
          <img src={src} class="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-md"></img>
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

function PreviewListCard({ parlevel, UOM, currentInventory, name, index, quantity }) {
return (
<table className="w-full border-collapse">
  <tbody>
    <tr key={index} className="border border-gray-500 flex-row justify-center items-center">
      <td className="border-x border-gray-500 p-2 w-20">{index}</td>
      <td className="border-x border-gray-500 p-2 w-60">{name}</td>
      <td className="border-x border-gray-500 p-2 w-40">{currentInventory}</td>
      <td className="border-x border-gray-500 p-2 w-40">{UOM}</td>
      <td className="border-x border-gray-500 p-2 w-40">{quantity}</td>
    </tr>
  </tbody>
</table>
  );
}

function ExistingDraft() {

    const [draftitemstoshow, setDraftitemstoshow] = useState([]);
    const [openDraftitems, setOpenDraftitems] = useState(0);
    const navigate = useNavigate();

    const {mvpExistingDraft, mvpRawIngredients, mvpInventoryItems, mvpImage,mvpUom, mvpParlevel} = useAuth();


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

   function handleshowDraft(){
    setOpenDraftitems(0);
   }


    function handleshowPreviewList(){
      setOpenDraftitems(2)
    }

    function handleshowDraftItems(){
        setOpenDraftitems(1);
    }

    function showDraftitems(id) {
        console.log("reach to showing items of draft")
        const item = mvpExistingDraft.find(item => item.id === id);
    
        setDraftitemstoshow(item.items);
        handleshowDraftItems();
    }  

    function getImageSrcById(id) {
        const itemsrc = mvpImage.find(item => item.id === id);
        return itemsrc ? itemsrc: null;
      }
    
      function getUOMById(id) {
        const itemsrc = mvpUom.find(item => item.id === id);
        return itemsrc ? itemsrc : null;
      }
    
      function getRawIngredientById(id) {
        const itemsrc = mvpRawIngredients.find(item => item.id === id);
        return itemsrc ? itemsrc : null;
    
      }
    
      function getInventoryItemById(id) {
        const itemsrc = mvpInventoryItems.find(item => item.id === id);
        return itemsrc ? itemsrc : null;
      }
    
      function getParlevleById(id) {
        const itemsrc = mvpParlevel.find(item => item.id === id);
        return itemsrc ? itemsrc : null;
      }

  return (
    <div>
        <Title Title="Indent/Draft" />
        {(openDraftitems !== 2) &&
        <HeaderCard HeaderCardItems={openDraftitems ? HeaderCardItems1 : HeaderCardItems} />}

        <div class="h-[424px] overflow-y-auto ">
        {(openDraftitems === 0) &&
            <ContentCard content={mvpExistingDraft} handleShowItems={showDraftitems}  />     
        }
        {(openDraftitems === 1) &&
            draftitemstoshow.map((item,index) => (
            
                
                <ItemCard
                   key={index}
                   src={getImageSrcById(getInventoryItemById(item.id).raw_ingredient_id).src}
                   parlevel={getParlevleById(getInventoryItemById(item.id).raw_ingredient_id).current_parlevel}
                   UOM={getUOMById(getInventoryItemById(item.id).raw_ingredient_id).UOM}
                   currentInventory={getInventoryItemById(item.id).aggregate_count}
                   name = {getRawIngredientById(getInventoryItemById(item.id).raw_ingredient_id).name}
                   quantity = {item.quantity}
                   index={index}/>
            ))
            
        }
        {/* {draftitemstoshow} */}
        

        {(openDraftitems === 2) &&
                <PreviewListCard
                  index = {"S.No."}
                   parlevel={"P.L."}
                   UOM={"UOM"}
                   currentInventory={"Current Level"}
                   name = {"Name"}
                   quantity = {"Quantity"} />
        }
        {(openDraftitems === 2) &&
            draftitemstoshow.map((item,index) => (
        
                <PreviewListCard
                   key={index}
                   parlevel={getParlevleById(getInventoryItemById(item.id).raw_ingredient_id).current_parlevel}
                   UOM={getUOMById(getInventoryItemById(item.id).raw_ingredient_id).UOM}
                   currentInventory={getInventoryItemById(item.id).aggregate_count}
                   name = {getRawIngredientById(getInventoryItemById(item.id).raw_ingredient_id).name}
                   quantity = {item.quantity}
                   index={index+1}/>
            ))

        }
        </div>
  
        {(openDraftitems === 0) && <NavLink to="/Indent/AddNewItem">
        <div class=" absolute bottom-4 w-100 h-auto flex z-50">
            <WhiteButton text={"Add New Indent"} />
        </div>
        </NavLink>}

        {(openDraftitems === 1) && <div class="absolute bottom-4 h-auto flex justify-around">
            
            <div class="flex mr-40">
              <NavLink to="/Indent/AddNewItem">
                <WhiteButton text={"Add More"} />
              </NavLink>
            </div>
            <div class="flex gap-4">
              <div onClick={handleshowPreviewList}><WhiteButton text={"Preview"}/></div>
              <NavLink to="">
                    <div onClick={()=>(handleshowDraftItems(),handleOpenModal())}> <BlueButton text={"Confirm"}/></div>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} onOkay={handleOkayModal} noOfItems={21} kitchen={"kitchen"} setShowitems={handleshowDraft}/>
              </NavLink>
            </div>
        </div>}

        {(openDraftitems === 2) && 
          <div class=" absolute bottom-4 h-auto flex z-50 justify-end" onClick={handleshowDraftItems}>
              <BlueButton text={"Done"} />

          </div>}
        
        {console.log(mvpExistingDraft)}
    </div>
  )
}

export default ExistingDraft