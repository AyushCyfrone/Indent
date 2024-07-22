import React, { useEffect } from 'react'
import Title from '../../../UI/Title/Title'
import HeaderCard from '../../../UI/Cards/HeaderCard'
import { useAuth } from '../../../../AuthContext';
import {useState} from 'react';
import WhiteButton from '../../../UI/Buttons/WhiteButton';
import "../../../UI/Bar/ScrollBar.css";
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HeaderCardItems = ["Item","UOM","CU","P.L.","Quantity"];

function ItemCard({ src, parlevel, UOM, currentInventory, name, index, quantity }) {
  return (
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
        <div className=" pl-2 flex justify-center items-center text-blue-500">
          <span class="text-right w-10">{currentInventory}</span> 
        </div>
        <div className=" pl-2 flex justify-center items-center text-blue-500">
          <span class="text-right w-10">{parlevel}</span>
        </div>
        <div className=" pl-2 flex justify-center items-center text-blue-500"> 
            <span class="text-right w-10">{index}</span>
        </div>
      </div>
    </div>
  );
}

function ShowIndentItems() {

    const [draftitemstoshow, setDraftitemstoshow] = useState([]);
    const {existingdraft, rawIngredients, inventoryItems, image, uom, parlevel} = useAuth();
    const [kitchen,setKitchen] = useState("");
    const [date,setDate] = useState("");
    const [raisedby,setRaisedby] = useState(""); 
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
                    setDraftitemstoshow(item.items);
                    setKitchen(item.kitchen);
                    setDate(item.date);
                    setRaisedby(item.RaisedBy);
                    setStatus(item.status);
                } else {
                    console.log(`No draft item found with id ${param.id}`);
                    setDraftitemstoshow([]);
                }
            } else {
                console.log('existingdraft is undefined or empty');
                setDraftitemstoshow([]);
            }
        };
        fetchDraftItems();
    }, [param.id, existingdraft]);

    function handleBack() {
      navigate("/Indent");
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
          <div class="text-xl font-semibold mb-[5px] cursor-pointer" onClick={handleBack} >All Indents </div>
        <Title Title={`/ Indent ID: ${param.id}`} />
        </div>
        <div class="text-sm">
          <span class="">{date}</span>
          <span class="mx-2">{kitchen}</span>
          <span class="mx-2">{raisedby}</span>
          <span class="mx-2">{status}</span>
        </div>

        <HeaderCard HeaderCardItems={ HeaderCardItems} columns={ 5 } />
        <div class="max-h-[450px] h-auto overflow-y-auto custom-scrollbar">
          <div className="md:block hidden cursor-pointer">
          <main className="flex flex-col text-base font-medium font-sans text-black">
        
          {
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
          </main>
          </div>
        </div>


        <div class=" h-auto flex justify-end mt-4">
            
            <div class="flex">
              <Link to="/Indent">
                <div ><WhiteButton text={"Back To Main Page"}/></div>
              </Link>
            </div>
        </div>
        {console.log(existingdraft)}
    </div>
  ) 
}

export default ShowIndentItems;