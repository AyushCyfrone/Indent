import React from 'react'
import Title from '../../../UI/Title/Title'
import HeaderCard from '../../../UI/Cards/HeaderCard'
import { useAuth } from '../../../../AuthContext';
import ContentCard from '../../../UI/Cards/ContentCard';

import WhiteButton from '../../../UI/Buttons/WhiteButton';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeaderCardItems = ["Id","Date","Kitchen","No of Items","Raised By","Status"];


function ExistingDraft() {

    const navigate = useNavigate();
    const {existingdraft } = useAuth();
    const [draftitems, setDraftitems] = useState([]);


    function showDraftitems(id) {
      console.log("reach to showing items of draft")
      navigate(`/Indent/ShowDraftItems/${id}`);
    } 
    
    function handleBack() {
      navigate("/Indent");
    }

    useEffect(() => {
      const raisedItems = existingdraft.filter(item => item.status === "Draft");
      console.log("Consoling Raised Items ...");
      console.log(raisedItems);
      setDraftitems(raisedItems);
  }, [existingdraft]);

  return (
    <div>
        <div class="flex">
          <div class="text-xl font-semibold mb-[5px] cursor-pointer" onClick={handleBack} >All Indent</div>
        <Title Title={`/Draft`} />
        </div>

        <div class="text-xl font-sans">
          
        </div>
        
        <HeaderCard HeaderCardItems={HeaderCardItems} columns={6} />

        <div class="max-h-[450px] h-auto overflow-y-auto custom-scrollbar">
            <ContentCard content={draftitems} handleShowItems={showDraftitems} />  
        </div>
  
        {<NavLink to="/Indent/AddNewIndent/">
          <div class=" absolute bottom-4 w-100 h-auto flex z-50">
              <WhiteButton text={"Create New Indent"} />
          </div>
        </NavLink>}

    </div>
  ) 
}

export default ExistingDraft;