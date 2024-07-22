import React, { useState, useEffect, useRef } from "react";
import Header from "./Components/Header/Header";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ApprovedByHOD from "./Components/pages/IndentPages/ApprovedByHOD/ApprovedByHOD";
import History from "./Components/pages/IndentPages/History/History";
import SideBarMain from "./Components/SideBar/SideBar";
import ItemsCard from "./Components/UI/Cards/ItemsCard";
import {AuthProvider} from "./AuthContext";
import AddNewIndent from "./Components/pages/AddIndent/AddNewIndent";
import InactiveCheckbox from "./Components/UI/Checkboxes/InactiveCheckbox";
import ExistingDraft from "./Components/pages/IndentPages/Draft/ExistingDraft";
import Indents from "./Components/pages/IndentPages/Landing/Indents";
import ShowCopiedItems from "./Components/pages/AddIndent/sub-pages/ShowCopiedItems";
import Raised from "./Components/pages/IndentPages/RaisedToStore/Raised";
import IssuedByStore from "./Components/pages/IndentPages/IssuedByStores/IssuedByStore";
import OrderRequestRaisedDraft from "./pages/OrderRequestPages/Draft/RaisedDraft";
import OrderRequestExistingDraft from "./pages/OrderRequestPages/Draft/ExistingDraft";
import OrderRequestRaisedToStore from "./pages/OrderRequestPages/RaisedToStore/RaisedToStore";
import PurchaseOrderRaisedDraft from "./pages/PurchaseOrderPages/Draft/RaisedDraft";
import ExistingDraftItemsbyID from "./Components/pages/AddIndent/ExistingDraftItemsbyID";
import AddMoreItembyID from "./Components/pages/AddIndent/AddNewItemsbyID";
import ShowIndentItems from "./Components/pages/IndentPages/Landing/ShowIndentItems";
import ShowDraftItems from "./Components/pages/IndentPages/Draft/ShowDraftItems";
import ShowRaisedIndentItems from "./Components/pages/IndentPages/RaisedToStore/ShowRaisedIndentItems";
import ShowApprovedIndentItems from "./Components/pages/IndentPages/ApprovedByHOD/ShowingApprovedByHODitems";
import ShowIssuedIndentItems from "./Components/pages/IndentPages/IssuedByStores/ShowIssuedByStoresItems";
import ShowHistoryItems from "./Components/pages/IndentPages/History/ShowHistoryItems";

function App() {
  const [color, setColor] = useState(1);
  const [openSideBar, setOpenSideBar] = useState(0);

  function handleOpenSideBar() {
    setOpenSideBar(1 - openSideBar);
    console.log("Sidebar Handle cliked ...");
  }

  return (
    <>
    <AuthProvider>
    
      {/* <Navbar />
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/RTS" element={<RTSpage/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes> */}
      <div className="relative w-full h-screen">
        <div className="absolute top-0 left-0 z-50">
          <SideBarMain handleOpenSideBar={handleOpenSideBar} openSideBar={openSideBar} />
        </div>

        <div class="lg:block" >
        <div className="flex h-screen lg:ml-[280px] ml-[64px]" onClick={openSideBar ? handleOpenSideBar : undefined}>
          <div className="flex-col w-full lg:mx-[64px] ml-[36px] mx-4">
            <Header />
            <Routes>
              <Route path="/" />
              <Route path="/Indent" element={<Indents />} />
              <Route path="/Indent/ShowItems/:id" element={<ShowIndentItems />}  />
              <Route path="/Indent/Drafting" element={<ExistingDraft />} />
              <Route path="/Indent/ShowDraftItems/:id" element={<ShowDraftItems />} />
              <Route path="/Indent/Raised" element={<Raised />} /> 
              <Route path="/Indent/ShowRaisedIndentItems/:id" element={<ShowRaisedIndentItems />} />
              <Route path="/Indent/ApproveByHOD" element={<ApprovedByHOD />} />
              <Route path="/Indent/ShowApprovedIndentItems/:id" element={<ShowApprovedIndentItems />} />
              <Route path="/Indent/IssuedByStore" element={<IssuedByStore />} />
              <Route path="/Indent/ShowIssuedIndentItems/:id" element={<ShowIssuedIndentItems />} />
              <Route path="/Indent/History" element={<History />} />
              <Route path="/Indent/ShowHistoryItems/:id" element={<ShowHistoryItems />} />

              <Route path="/Indent/ExistingDraftItemsbyID/:id" element={<ExistingDraftItemsbyID />} />
              <Route path="/Indent/AddNewIndent" element={<AddNewIndent />} />
              <Route path="/Indent/AddMoreItems/:id" element={<AddMoreItembyID />} />
              <Route path="/Indent/AddNewItem/CopiedItems" element={<ShowCopiedItems />} />
              <Route path="/OrderRequest" element={<OrderRequestRaisedDraft />} />
              <Route path="/OrderRequest/Draft" element={<OrderRequestExistingDraft />} />
              <Route path="/OrderRequest/Auto" />
              <Route path="/OrderRequest/RaisedToStore" element={<OrderRequestRaisedToStore />}  />
              <Route path="/OrderRequest/History" element={<OrderRequestRaisedDraft />} />
              <Route path="/PurchaseOrder/Draft" element={<PurchaseOrderRaisedDraft />} />
            </Routes>
          </div>
        </div>
        </div>
        
      </div>

{/* <div class="flex flex-col max-h-screen h-screen w-full">
  <header class="bg-gray-400 py-4 container h-20 ">
  </header>

  <div class="flex-1 container overflow-auto">



   
        
        
  </div>

  <footer class="bg-gray-300 py-4 container h-20 ">
  <div className="fixed bottom-0 left-0 right-0  w-full h-[36px] flex justify-end mb-10 gap-4 px-10">
                
            </div>
  </footer>
</div> */}

      {/* <AddNewItems /> */}
      {/* <InactiveCheckbox /> */}
      {/* <ExistingDraft /> */}
      {/* <Contact /> */}
      {/* <DraftLarge /> */}
      {/* <RaisedToStore /> */}
      {/* <ExistingDraftItemsbyID /> */}
      {/* <AddMoreItembyID /> */}

     

      </AuthProvider>
    </>
  );
}

export default App;
