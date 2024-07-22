import ContentCard from "../../ContentCard";
import { useAuth } from "../../../AuthContext";
import { useState } from "react";
import ShowingRaisedDraft from "./ShowingRaisedDraftItems";

function RaisedDraft (){

    const {mvpAlreadyRaisedDraft} = useAuth();
    const HeaderCardItems =["ID","Date","Kitchen","No. of Items","Raiseby","Status"];

    const [kitchen, setKitchen] = useState(""); 
    const [showitems, setShowItems] = useState(false); 
    const [approvedItems , setApprovedItems] = useState([]);     //{ id: "#ZUID008", date: "22/04/2024 9:15 am", kitchen: "Hot Kitchen", noOfItems: 51, raisedBy: "Srikanth", status: "Raised",
    // items: [{id: 1, requested_quantity: 10, received_quantity:10}


    function toggleShowItems() {
        setShowItems(!showitems);
    }

    function handleShowItems(id) {
        console.log("Show Approved Items");
        const item = mvpAlreadyRaisedDraft.find((item) => item.id === id);
        console.log(item);

        setApprovedItems(item.items);
        // console.log(item)
        setKitchen(item.kitchen);
        toggleShowItems();
    }


    return (
        <>
        {!showitems && <div>
            <ContentCard content={mvpAlreadyRaisedDraft} HeaderCardItems={HeaderCardItems} handleShowItems={handleShowItems} />
        </div>}

        {showitems && <ShowingRaisedDraft items={approvedItems} setShowitems={setShowItems} kitchen={kitchen} />}
        {console.log("Before Sending ... + " + approvedItems)}
        </> 
    )
}

export default RaisedDraft;
