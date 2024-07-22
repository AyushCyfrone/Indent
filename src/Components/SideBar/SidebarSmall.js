import { useState } from "react";
import * as React from "react";
import autoIcon from "../../icons/auto.svg";
import { NavLink} from "react-router-dom";
import SideBar2 from "./SidebarLarge";
import Menu from "../../icons/Menu"


function IconComponent({ handleOpenSideBar,toggleDropdownIndent,toggleDropdownMVP,toggleDropdownPurchaseOrder,dropDownIndent,dropDownMVP,dropDownPurchaseOrder,Alltoggleup }) {
  return (
    <>
    <div class="w-20 h-screen flex flex-col justify-center items-center border-black border-2">
        <div class="w-6 h-6 border-black border-2 m-2 hover:bg-gray-400 flex justify-center items-center" onClick={() => {handleOpenSideBar();Alltoggleup()}}><Menu /></div>
        <div class="w-4 h-4 border-black border-2 m-2 bg-blue-500 hover:bg-gray-400" onClick={() => {handleOpenSideBar();if(!dropDownIndent)toggleDropdownIndent();}}></div>
        <div class="w-4 h-4 border-black border-2 m-2 bg-green-500 hover:bg-gray-400" onClick={() => {handleOpenSideBar();if(!dropDownMVP)toggleDropdownMVP();}}></div>
        <div class="w-4 h-4 border-black border-2 m-2 bg-yellow-400 hover:bg-gray-400" onClick={() => {handleOpenSideBar();if(!dropDownPurchaseOrder)toggleDropdownPurchaseOrder();}}></div>
    </div>
    </>
  );
}

function SideBarTab({handleOpenSideBar,openSideBar,toggleDropdownIndent,toggleDropdownMVP,toggleDropdownPurchaseOrder,
                    dropDownIndent,dropDownMVP,dropDownPurchaseOrder,Alltoggleup}) {

  return (
    <section >

      {!openSideBar &&  <IconComponent handleOpenSideBar={handleOpenSideBar}
                         toggleDropdownIndent={toggleDropdownIndent}
                         toggleDropdownMVP={toggleDropdownMVP}
                         toggleDropdownPurchaseOrder={toggleDropdownPurchaseOrder}
                         dropDownIndent={dropDownIndent}
                         dropDownPurchaseOrder={dropDownPurchaseOrder}
                         dropDownMVP={dropDownMVP}
                         Alltoggleup={Alltoggleup} />}
                         
      {openSideBar && <SideBar2 handleOpenSideBar={handleOpenSideBar}
                        toggleDropdownIndent={toggleDropdownIndent}
                        dropDownIndent={dropDownIndent}
                        toggleDropdownMVP={toggleDropdownMVP}
                        dropDownMVP={dropDownMVP}
                        toggleDropdownPurchaseOrder={toggleDropdownPurchaseOrder}
                        dropDownPurchaseOrder={dropDownPurchaseOrder}/>}
      
    </section>
  );
}

export default SideBarTab;