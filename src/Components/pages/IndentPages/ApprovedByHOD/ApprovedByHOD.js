import { useAuth } from "../../../../AuthContext";
import { useState } from "react";
import ContentCard from "../../../UI/Cards/ContentCard";
import HeaderCard from "../../../UI/Cards/HeaderCard";
import { useNavigate } from "react-router-dom";
import Title from "../../../UI/Title/Title";
import { useEffect } from "react";

const HeaderCardItems =["ID","Date","Kitchen","No. of Items","Raiseby","Status"];


function ApprovedByHOD(){

    const {existingdraft} = useAuth();
    const [raisedIndents, setRaisedIndents] = useState([]);
    const navigate = useNavigate();
    const HeaderCardItems =["ID","Date","Kitchen","No. of Items","Raiseby","Status"];

    function handleShowItems(id) {
        navigate(`/Indent/ShowApprovedIndentItems/${id}`);
    }

    useEffect(() => {
        const raisedItems = existingdraft.filter(item => item.status === "Approved");
        console.log("Consoling Raised Items ...");
        console.log(raisedItems);
        setRaisedIndents(raisedItems);
    }, [existingdraft]);


    return (
        <div>
        <Title Title="Indent/ApprovedByHOD" />
        
        <HeaderCard HeaderCardItems={HeaderCardItems} columns={6} />

        <div class="max-h-[450px] h-auto overflow-y-auto custom-scrollbar">
            <ContentCard content={raisedIndents} handleShowItems={handleShowItems} />  
        </div>

    </div>
    )
}

export default ApprovedByHOD;
