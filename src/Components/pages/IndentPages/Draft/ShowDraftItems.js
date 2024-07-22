import React,{useEffect} from 'react'
import Title from '../../../UI/Title/Title'
import HeaderCard from '../../../UI/Cards/HeaderCard'
import Counter from '../../../UI/Counter/Counter';
import BlueButton from '../../../UI/Buttons/BlueButton';
import WhiteButton from '../../../UI/Buttons/WhiteButton';
import Modal from "../../../UI/Modal/Modal";
import ScrollBar from "../../../UI/Bar/ScrollBar.css";
import { useAuth } from '../../../../AuthContext';
import { useParams } from 'react-router-dom';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HeaderCardItems = ["Item Name","UOM","Par Level","Current Inventory","Quantity"];

function ItemCard({ src, id, parlevel, UOM, currentInventory, name, index, quantity, setQuantity }) {
    const[count, setCount] = useState((quantity) ? quantity : 1);
    useEffect(() => { 
        setQuantity(id, count);
    }, [count]);

  return (
    <>
    <div className="font-sans">
      <div className={`grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 mt-1 w-full lg:h-[48px] h-[40px] 
           ${ index % 2 ? "bg-indigo-50" : "bg-blue-200"} 
           rounded-lg max-md:max-w-full`}>

        <div class="pl-2 flex justify-start items-center">
          <img src={src} class="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-md"></img>
          <div class="ml-1">{name}</div>
        </div>
        <div className=" pl-2 flex justify-center items-center text-blue-500">
          <span class="text-left w-10">{UOM}</span>
        </div>
        <div className="pl-2 flex justify-center items-center text-blue-500">
              <span className="text-right w-10">{parlevel}</span>
        </div>
        <div className=" pl-2 flex justify-center items-center text-blue-500"> 
        <span class="text-right w-10">{currentInventory}</span> 
        </div>
        <div class="flex justify-center item-center">
        <Counter count={count} setCount={setCount} />
        </div>
      </div>
    </div>
    
    </>
  );
}

function ShowDraftItems() {

    const [itemstoshow, setItemstoshow] = useState([]);
    const {existingdraft, rawIngredients, inventoryItems, image, uom, parlevel, updateDraftToRaised } = useAuth();
    const [kitchen,setKitchen] = useState("");
    const [date,setDate] = useState("");
    const [raisedby,setRaisedby] = useState("");
    const [dbid, setDbid] = useState();
    const [status,setStatus] = useState("");


    const navigate = useNavigate();
    
    const param = useParams();
    console.log("Printing Param")
    console.log(param.id)

    function setQuantity(id, quantity) {
      const updated_item = itemstoshow.find((item) => ( item.id === id ));
      if(updated_item) {
        updated_item.quantity = quantity;
        setItemstoshow([...itemstoshow]);
        console.log("Updated Item Quantity");
        console.log(itemstoshow);
      }
    }
    


    useEffect(() => {
        const fetchDraftItems = () => {  
            if (existingdraft && existingdraft.length > 0) {
                const item = existingdraft.find(item => item.id === parseInt(param.id));
                if (item) {
                    setItemstoshow(item.items);
                    setKitchen(item.kitchen);
                    setDate(item.date);
                    setRaisedby(item.RaisedBy);
                    setDbid(item._id);
                    setStatus(item.status);
                } else {
                    console.log(`No draft item found with id ${param.id}`);
                    setItemstoshow([]);
                }
            } else {
                console.log('existingdraft is undefined or empty');
                setItemstoshow([]);
            }
        };
        fetchDraftItems();
    }, [param.id, existingdraft]);

    
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


  // Navigate through Title function ///////////
  function handleBackToDraft() {
    navigate("/Indent/Drafting");
  }

  function handleBacktoAllIndents() {
    navigate("/Indent");
  }
  /////////////////////////////////////////

  function handleUpdate() {
    updateDraftToRaised(dbid,itemstoshow);
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
    <div>
        <div class="flex">
          <div class="text-xl font-semibold mb-[5px] cursor-pointer" onClick={handleBacktoAllIndents} >{"All Indent "} </div>
          <div class="text-xl font-semibold mb-[5px] cursor-pointer" onClick={handleBackToDraft} > {"/Drafts"} </div>
        <Title Title={`/Indent ID: ${param.id}`} />
        </div>
        <div class="text-sm">
          <span class="">{date}</span>
          <span class="mx-2">{kitchen}</span>
          <span class="mx-2">{raisedby}</span>
          <span class="mx-2">{status}</span>
          <span class="mx-2">{dbid}</span>
        </div>
        
        <HeaderCard HeaderCardItems={HeaderCardItems} columns={5} />

        <div class="max-h-[450px] h-auto overflow-y-auto custom-scrollbar">
        {
        <>
          <div className="md:block hidden cursor-pointer">
          <main className="flex flex-col text-base font-medium font-sans text-black">

       
            {itemstoshow.map((item,index) => (
                <ItemCard
                   key={index}
                   id={item.id}
                   src={getImageSrcById(getInventoryItemById(item.id).raw_ingredient_id).src}
                   parlevel={getParlevleById(getInventoryItemById(item.id).raw_ingredient_id).current_parlevel}
                   UOM={getUOMById(getInventoryItemById(item.id).raw_ingredient_id).UOM}
                   currentInventory={getInventoryItemById(item.id).aggregate_count}
                   name = {getRawIngredientById(getInventoryItemById(item.id).raw_ingredient_id).name}
                   quantity = {item.quantity}
                   setQuantity={setQuantity}
                   index={index}/>
            ))}
        
          </main>
          </div>
        </>
        }
        </div>

        {<div class="h-auto flex justify-between mt-4">
            
            <div class="flex mr-40">
              <NavLink to={`/Indent/AddMoreItems/${param.id}`}>
                <WhiteButton text={"Add More Items"} />
              </NavLink>
            </div>
            <div class="flex gap-4">
              <div onClick={handleBackToDraft} ><WhiteButton text={"Back To Draft"}/></div>
              <div onClick={()=>(handleUpdate(),handleOpenModal())}>
                 <BlueButton text={"Raise Indent"}/>
              </div>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal} onOkay={handleOkayModal} noOfItems={itemstoshow.length} setShowitems={() => (console.log("Hogaya"))} Message={"Indent Raised Successfully"}/>
            </div>
        </div>}
    </div>
  ) 
}

export default ShowDraftItems;