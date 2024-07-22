import React, { useEffect } from 'react'
import Title from '../../../UI/Title/Title'
import HeaderCard from '../../../UI/Cards/HeaderCard'
import { useAuth } from '../../../../AuthContext';
import ContentCard from '../../../UI/Cards/ContentCard';
import WhiteButton from '../../../UI/Buttons/WhiteButton';
import "../../UI/Bar/ScrollBar.css";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeaderCardItems = ["Id","Date","Kitchen","No of Items","Raised By","Status"];

function Indent() {
    const [draftitems, setDraftitems] = useState([]);
    const { alreadyraiseddraft } = useAuth();
    const navigate = useNavigate();


    function showDraftitems(id) {
        console.log("reach to showing items of draft")
        
        navigate(`/Indent/ShowItems/${id}`);
    } 
    
    useEffect(() => {
        const raisedItems = alreadyraiseddraft.filter(item => item.status === "Raised");
        console.log("Consoling Raised Items ...");
        console.log(raisedItems);
        setDraftitems(raisedItems);
    }, [alreadyraiseddraft]);

    


  return (
    <div>
        <Title Title="All Live Indents" />
        <HeaderCard HeaderCardItems={ HeaderCardItems} columns={6} />

        <div class="max-h-[450px] h-auto overflow-y-auto custom-scrollbar">
        {
           <ContentCard content={draftitems} handleShowItems={showDraftitems} />  
        }
        </div>
  
        <NavLink to="/Indent/AddNewIndent">
          <div class=" absolute bottom-4 w-100 h-auto flex z-50">
            <WhiteButton text={"Create New Indent"} />
          </div>
        </NavLink>

    </div>
  ) 
}

export default Indent;