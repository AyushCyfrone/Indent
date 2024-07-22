import React, { useState, useEffect, useRef } from "react";
import SideBar from "./IndentComponent/Sidebar";
import Draft from "./IndentComponent/DDraft";
import Header from "./IndentComponent/Header";
import Action from "./IndentComponent/Action";
import SideBar2 from "./IndentComponent/Sidebar2";
import "./temp.css";
import DraftContent from "./IndentComponent/DraftContent";
import Main from "./IndentComponent/Main";
import DraftComponent from "./IndentComponent/DraftComponent";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import IndentPage from "./pages/Indentpage";
import RTSpage from "./pages/RTSpage";
import Navbar from "./pages/Navbar";
import { About } from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Store } from "./pages/Store";
import RTSComponent from "./MainComponent/RaisedToStoreMain";
import ApprovedByHOD from "./MainComponent/ApprovedByHODMain";
import IssuedByStore from "./Components/LargeScreen/IssuedByStore";
import History from "./MainComponent/HistoryMain";
import DraftAdd from "./IndentComponent/DraftAdd";
import BlueHomeButton from "./Components/Buttons/BlueHomeButton";
import BlueButton from "./Components/Buttons/BlueButton";
import WhiteButton from "./Components/Buttons/WhiteButton";
import WhiteHomeButton from "./Components/Buttons/WhiteHomeButton";
import Checkbox from "./Components/Checkboxes/checkbox";
import Radio from "./Components/Checkboxes/Radio";
import MVPRTSComponent from "./MVPComponents/MVPRTSComponent";
import MVPHistoryComponent from "./MVPComponents/MVPHistoryComponent";
import Counter from "./Components/Counter/Counter";
import Order from "./icons/Order.svg";
import SideBarTab from "./Components/MediumScreen/SidebarTab";
import SideBarFull from "./pages/SideBarFull";
import SideBarMain from "./MainComponent/SideBar";
import IssuedByStoreMain from "./MainComponent/IssuedByStoreMain";
import ItemsCard from "./Components/Cards/ItemsCard";
import {AuthProvider} from "./AuthContext";
import DraftLarge from "./pages/IndentPages/Draft/DraftLarge";
import AddNewItems from "./pages/AddIndentDraft/AddNewItems";
import InactiveCheckbox from "./Components/Checkboxes/InactiveCheckbox";
import ExistingDraft from "./pages/IndentPages/ExistingDraft"
import Contact from "./pages/Contact";
import Indents from "./pages/IndentPages/Indents";
import ShowCopiedItems from "./pages/AddIndentDraft/ShowCopiedItems";
import RaisedToStore from "./pages/IndentPages/RaisedToStore/RaisedToStore";

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
              <Route path="/Indent/Drafting" element={<ExistingDraft />} />
              <Route path="/Indent/RaisedToStore" element={<RaisedToStore />} />
              <Route path="/Indent/AddNewItem" element={<AddNewItems />} />
              <Route path="/Indent/AddNewItem/CopiedItems" element={<ShowCopiedItems />} />
              <Route path="/ApproveByHOD" element={<ApprovedByHOD />} />
              <Route path="/IssuedByStore" element={<IssuedByStoreMain />} />
              <Route path="/History" element={<History />} />
              <Route path="/DraftAdd" element={<DraftAdd />} />
              <Route path="/MVPRaisedToStore" element={<MVPRTSComponent />} />
              <Route path="/MVPHistory" element={<MVPHistoryComponent />} />
              <Route path="/SideBarFull" element={<SideBarFull />} />
            </Routes>
          </div>
        </div>
        </div>
        
      </div>

{/* <div class="flex flex-col h-screen">
  <header class="bg-black py-4 container">
    
  </header>

  <div class="flex-1 container">
   
  </div>

  <footer class="bg-black py-4 container">
   
  </footer>
</div> */}

      {/* <AddNewItems /> */}
      {/* <InactiveCheckbox /> */}
      {/* <ExistingDraft /> */}
      {/* <Contact /> */}
      {/* <DraftLarge /> */}
      {/* <RaisedToStore /> */}

     

      </AuthProvider>
    </>
  );
}

export default App;
