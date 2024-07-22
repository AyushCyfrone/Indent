import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [image, setImage] = useState([]);
    const [uom,setUom] = useState([]);
    const [inventoryItems, setInvertoryItems] = useState([]);
    const [rawIngredients, setRawIngredients] = useState([]);
    const [indentdraftdata,setIndentdraftdata] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [parlevel, setParlevel] = useState([]);
    const [existingdraft,setExistingDraft] = useState([{}]);
    const [alreadyraiseddraft, setAlreadyRaisedDraft] = useState([{}]);
    const [raisedtostore, setRaisedtoStore] = useState([{}]);
    const [approvedbyhod, setApprovedbyHOD] = useState([{}]);
    const [existingIndents, setExistingIndents] = useState([{}]);

  const fetchDraftitems = async () => {
    console.log("fetching indentdraftitems ...");
    const { data } = await axios.get("http://localhost:4000" + "/draftitems");
    console.log(data);
    setIndentdraftdata(data);

  };

  const fetchimage = async () => {
    console.log("fetching Image ...");
    const { data } = await axios.get("http://localhost:4000" + "/image");
    console.log(data);
    setImage(data);
  };

  const fetchuom = async () => {
    console.log("fetching UOM ...");
    const { data } = await axios.get("http://localhost:4000" + "/uom");
    console.log(data);
    setUom(data);
  };

  const fetchinvertoryItems = async () => {
    console.log("fetching Inventory Item ...");
    const { data } = await axios.get("http://localhost:4000" + "/inventoryItems");
    console.log(data);
    setInvertoryItems(data);
  };

  const fetchrawingredients = async () => {
    console.log("fetching Raw Ingredient ...");
    const { data } = await axios.get("http://localhost:4000" + "/rawitem");
    console.log(data);
    setRawIngredients(data);
  };

  const fetchsubcategory = async () => {
    try {
      console.log("fetching SubCategory ...");
      const { data } = await axios.get("http://localhost:4000" + "/subcategory");
      console.log(data);
      setSubcategory(data);
    } catch (error) {
      console.log("Error in fetching subcategory");
    }
  };

  const fetchparlevel = async () => {
    try{
      console.log("fetching Parlevel ...");
      const { data } = await axios.get("http://localhost:4000" + "/parlevel");
      console.log(data);
      setParlevel(data);
    } catch (error) { 
      console.log("Error in fetching parlevel");
    }
  };

  const fetchexistingdraft = async () => {
    try {
      console.log("fetching Existing Draft ...");
      const { data } = await axios.get("http://localhost:4000" + "/existingdraft");
      console.log(data);
      setExistingDraft(data);
    }catch (error) { 
      console.log("Error in fetching existingdraft");
    }
  };

  async function updateDraftToRaised(id,items) {
    try {
      console.log(`Updating draft status for ID: ${id}`);
      const response = await axios.put(`http://localhost:4000/updateDraft/${id}`, {
        status: "Raised", // Assuming you want to set the status to "Raised"
        items: items
      });
      console.log("Update response:", response.data);
      // you refetch the indents after updating
      await fetchexistingdraft();
    } catch (error) {
      console.log("Error updating draft status:", error);
    }
  };


  async function updateRaisedtoApprove(id,items) {
    try {
      console.log(`Updating draft status for ID: ${id}`);
      const response = await axios.put(`http://localhost:4000/updateRaised/${id}`, {
        status: "Approved", // Assuming you want to set the status to "Raised"
        items: items
      });
      console.log("Update response:", response.data);
      // Optionally, you can refetch the indents after updating
      await fetchexistingdraft();
    } catch (error) {
      console.log("Error updating draft status:", error); 
    }
  };

  async function updateStatustoDraft(id,items) {
    try {
      console.log(`Updating draft status for ID: ${id}`);
      const response = await axios.put(`http://localhost:4000/convertToDraft/${id}`, {
        status: "Draft", // Assuming you want to set the status to "Raised"
        items: items
      });
      console.log("Update response:", response.data);
      // Optionally, you can refetch the indents after updating
      await fetchexistingdraft();
    } catch (error) {
      console.log("Error updating draft status:", error);
    }
  };

  async function updateToIssued(id) {
    try {
      console.log(`Updating draft status for ID: ${id}`);
      const response = await axios.put(`http://localhost:4000/updatetoIssued/${id}`, {
        status: "Issued" // Assuming you want to set the status to "Raised"
      });
      console.log("Update response:", response.data);
      // Optionally, you can refetch the indents after updating
      await fetchexistingdraft();
    } catch (error) {
      console.log("Error updating draft status:", error);
    }
  };

  async function updatetoDelivered(id) {
    try {
      console.log(`Updating draft status for ID: ${id}`);
      const response = await axios.put(`http://localhost:4000/updatetoReceived/${id}`, {
        status: "Delivered" // Assuming you want to set the status to "Raised"
      });
      console.log("Update response:", response.data);
      // Optionally, you can refetch the indents after updating
      await fetchexistingdraft();
    } catch (error) {
      console.log("Error updating draft status:", error);
    }
  };

  const fetchexistingIndent = async () => {
    try {
      console.log("fetching Existing Draft ...");
      const { data } = await axios.get("http://localhost:4000" + "/existingIndents");
      console.log(data);
      setExistingIndents(data);
    }catch (error) { 
      console.log("Error in fetching existingdraft");
    }  
  };



  const fetchalreadyraiseddraft = async () => {
    try {
      console.log("fetching ALREADY EXISTING INDENTS ...");
      const { data } = await axios.get("http://localhost:4000" + "/existingIndents");     
      console.log(data); 
      setAlreadyRaisedDraft(data);
    } catch (error) {
      console.log("Error in fetching alreadyraiseddraft");
    }
  };


















  const fetchraisedtostore = async () => {
    try {
      console.log("fetching Raised to Store ...");
      const { data } = await axios.get("http://localhost:4000" + "/raisedtostore");
      console.log(data);
      setRaisedtoStore(data);
    } catch (error) {
      console.log("Error in fetching Raised to Store");
    }
  };

  const fetchapprovedbyhod = async () => {
    try { 
      console.log("fetching Approved By HOD ...");
      const { data } = await axios.get("http://localhost:4000" + "/approvedbyhod");
      console.log(data);
      setApprovedbyHOD(data);
    } catch (error) {
      console.log("Error in Approved By HOD");
    }
  };

  const postDraft = async (draftData) => {
    try {
      const response = await fetch("http://localhost:4000" + '/existingdraft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(draftData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      await fetchexistingdraft();
    } catch (error) {
      console.error('Error posting draft:', error);
    }
  };

  const updateDraft = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:4000/updatedraft/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error updating draft:', error);
    }
  };
  

  useEffect(() => {
    fetchDraftitems();
    fetchimage();
    fetchuom();
    fetchinvertoryItems();
    fetchrawingredients();
    fetchsubcategory();
    fetchparlevel();
    fetchexistingdraft();
    fetchalreadyraiseddraft();
    fetchraisedtostore();
    fetchapprovedbyhod();
    fetchexistingIndent();
  }, []);



  // useEffect(() => {
  //   fetchDraftitems();
  // }, []);

  return (
    <AuthContext.Provider value={{ 
         indentdraftdata,
         image,
         uom,
         inventoryItems,
         rawIngredients,
         subcategory,
         parlevel,
         existingdraft,
         alreadyraiseddraft,
         raisedtostore,
         approvedbyhod,
          postDraft,
          setExistingDraft, 
          updateDraft,
          existingIndents,
          updateDraftToRaised,
          updateRaisedtoApprove,
          updateStatustoDraft,
          updateToIssued, 
          updatetoDelivered
          
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
