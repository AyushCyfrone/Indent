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

const HeaderCardItems = ["Item Name","UOM","Par Level","Current Inventory","Quantity","Remark"];

function ItemCard({src, id, parlevel,UOM,currentInventory,name, index, quantity, SetRemark}) {
   
  const [remark, setRemark] = useState("");

  useEffect(() => {
    SetRemark(id,remark);
  }, [remark]);

  return (
    <>
    <div className="font-sans">
      <div className={`grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 mt-1 w-full lg:h-[48px] h-[40px] 
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
            <span className="text-right w-4">{parlevel}</span>
        </div>
        <div className=" pl-2 flex justify-center items-center text-blue-500">     
            <span class="text-right w-10">{currentInventory}</span>
        </div>

        <div class="flex justify-center items-center text-blue-500" >
          <span class="text-right w-10">{quantity}</span>
        </div>

        <div className=" pl-2 flex justify-center items-center">
          <input class="w-40" value={remark} onChange={(e) => setRemark(e.target.value)}></input>
      </div>
      </div>
      
    </div>
    </>
  );
}

function ShowRaisedIndentItems() {

    const [itemtoshow, setItemtoshow] = useState([]);
    const {existingdraft, rawIngredients, inventoryItems, image, uom, parlevel, updateRaisedtoApprove, updateStatustoDraft} = useAuth();
    const [kitchen,setKitchen] = useState("");
    const [date,setDate] = useState("");
    const [raisedby,setRaisedby] = useState("");
    const [dbid, setDbid] = useState();
    const [role, setRole] = useState("HOD"); //Kitchen //HOD
    const [status,setStatus] = useState("");

    
    const param = useParams(); 
    console.log("Printing Param")
    console.log(param.id)
    const navigate = useNavigate();


    useEffect(() => {
        const fetchDraftItems = () => {  
            if (existingdraft && existingdraft.length > 0) {
                const item = existingdraft.find(item => item.id === parseInt(param.id));
                if (item) {
                    setItemtoshow(item.items);
                    setKitchen(item.kitchen);
                    setDate(item.date);
                    setRaisedby(item.RaisedBy);
                    setDbid(item._id);
                    setStatus(item.status);
                } else {
                    console.log(`No draft item found with id ${param.id}`);
                    setItemtoshow([]);
                }
            } else {
                console.log('existingdraft is undefined or empty');
                setItemtoshow([]);
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

  function handleBack() {
    navigate("/Indent/Raised");
  }

  function handleUpdate() {
    updateRaisedtoApprove(dbid,itemtoshow);
  }

  function handleConvetToDraft() {
    updateStatustoDraft(dbid,itemtoshow);
    navigate("/Indent/Drafting")
  }

  function SetRemark(id,remark) {
    const updated_item = itemtoshow.find((item) => ( item.id === id ));
    if(updated_item) {
      updated_item.remark = remark;
      setItemtoshow([...itemtoshow]);
      console.log("Updated Item Remark");
      console.log(itemtoshow);
    }
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
          <div class="text-xl font-semibold mb-[5px] cursor-pointer" onClick={handleBack} >Raised </div>
        <Title Title={`/ Indent ID: ${param.id}`} />
        </div>
        <div class="text-sm">
          <span class="">{date}</span>
          <span class="mx-2">{kitchen}</span>
          <span class="mx-2">{raisedby}</span>
          <span class="mx-2">{status}</span>
        </div>
        
        <HeaderCard HeaderCardItems={HeaderCardItems} columns={6} />

        <div class="max-h-[450px] h-auto overflow-y-auto custom-scrollbar">
       

        {
        <>
          <div className="md:block hidden cursor-pointer">
          <main className="flex flex-col text-base font-medium font-sans text-black">

       
            {itemtoshow.map((item,index) => (
                <ItemCard
                   key={index}
                   id={item.id}
                   src={getImageSrcById(getInventoryItemById(item.id).raw_ingredient_id).src}
                   parlevel={getParlevleById(getInventoryItemById(item.id).raw_ingredient_id).current_parlevel}
                   UOM={getUOMById(getInventoryItemById(item.id).raw_ingredient_id).UOM}
                   currentInventory={getInventoryItemById(item.id).aggregate_count}
                   name = {getRawIngredientById(getInventoryItemById(item.id).raw_ingredient_id).name}
                   quantity = {item.quantity}
                   SetRemark={SetRemark}
                   index={index}/>
            ))}
        
          </main>
          </div>
        </>
        }
        </div>

        {(role === "HOD") && <div class="h-auto mt-4 pb-4 grid grid-cols-3">
         
            <div class="col-span-1"></div>
            <div class="col-span-1">
            <div class="w-full border border-dashed rounded-lg border-blue-500 flex flex-col items-center h-14">
              <input placeholder='Overall Remark' class="font-thin flex w-full justify-center focus:outline-none" />
              </div>
            </div>

            <div class="col-span-1 flex justify-center items-center">
            <div class="flex gap-4 w-full col-span-1 justify-end">
              <div onClick={handleConvetToDraft} ><WhiteButton text={"Reject"}/></div>
              <div onClick={() => (handleOpenModal(),handleUpdate())}>
                 <BlueButton text={"Approve"}/>
              </div>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal} onOkay={handleOkayModal} noOfItems={itemtoshow.length} kitchen={"kitchen"} setShowitems={() => (console.log("Hogaya"))} Message={"Approved Successfully"}/>
            </div>
            </div>
          
          {/* <div class="col-span-2 w-full border border-dashed rounded-lg border-blue-500 flex items-center justify-"></div>
            
            <div class="flex gap-4 w-full col-span-1 justify-end">
              <div onClick={handleConvetToDraft} ><WhiteButton text={"Reject"}/></div>
              <div onClick={() => (handleOpenModal(),handleUpdate())}>
                 <BlueButton text={"Approve"}/>
              </div>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal} onOkay={handleOkayModal} noOfItems={itemtoshow.length} kitchen={"kitchen"} setShowitems={() => (console.log("Hogaya"))} Message={"Approved Successfully"}/>
            </div> */}
        </div>}

        {(role === "Kitchen") && <div class="h-auto flex justify-end mt-4">
            
            <div class="flex gap-4">
              <div onClick={() => (handleConvetToDraft())}>
                <WhiteButton text={"Convert To Draft"}/>
              </div>
              {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} onOkay={handleOkayModal} noOfItems={21} kitchen={"kitchen"} setShowitems={() => (console.log("Hogaya"))}/> */}
            </div>
        </div>}
    </div>
  ) 
}

export default ShowRaisedIndentItems;




