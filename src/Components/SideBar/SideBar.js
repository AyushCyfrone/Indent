import SideBarTab from "./SidebarSmall";
import SideBar2 from "./SidebarLarge";
import { useState,useContext } from "react";

function SideBarMain({handleOpenSideBar,openSideBar}) {

  const [dropDownIndent, setdropDownIndent] = useState(false);
  const [dropDownMVP, setdropDownMVP] = useState(false);
  const [dropDownPurchaseOrder, setdropDownPurchaseOrder] = useState(false);

  function Alltoggleup(){
    setdropDownIndent(false);
    setdropDownMVP(false);
    setdropDownPurchaseOrder(false);
  }

  const toggleDropdownIndent = () => {
    setdropDownIndent(!dropDownIndent);
    setdropDownMVP(false);
    setdropDownPurchaseOrder(false);
  };

  const toggleDropdownMVP = () => {
    setdropDownMVP(!dropDownMVP);
    setdropDownIndent(false);
    setdropDownPurchaseOrder(false);
  };

  const toggleDropdownPurchaseOrder = () => {
    setdropDownPurchaseOrder(!dropDownPurchaseOrder);
    setdropDownIndent(false);
    setdropDownMVP(false);
  };

  

  return (
    <>
      <div class="h-screen">
        <div class="lg:hidden z-20">
          <SideBarTab
            handleOpenSideBar={handleOpenSideBar}
            openSideBar={openSideBar}
            toggleDropdownIndent={toggleDropdownIndent}
            toggleDropdownMVP={toggleDropdownMVP}
            toggleDropdownPurchaseOrder={toggleDropdownPurchaseOrder}
            dropDownIndent={dropDownIndent}
            dropDownMVP={dropDownMVP}
            dropDownPurchaseOrder={dropDownPurchaseOrder}
            Alltoggleup={Alltoggleup}
          />
        </div>
        <div class="lg:block hidden">
          <SideBar2
            toggleDropdownIndent={toggleDropdownIndent}
            dropDownIndent={dropDownIndent}
            toggleDropdownMVP={toggleDropdownMVP}
            dropDownMVP={dropDownMVP}
            toggleDropdownPurchaseOrder={toggleDropdownPurchaseOrder}
            dropDownPurchaseOrder={dropDownPurchaseOrder}
          />
        </div>
      </div>
    </>
  );
}
export default SideBarMain;
