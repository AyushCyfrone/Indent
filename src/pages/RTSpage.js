import SideBar from "../IndentComponent/Sidebar";
import RTSComponent from "../IndentComponent/RTSComponent";
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";

function RTSpage(){
    return(
        <>
        <div class="flex mb-[40px]">
            <div class="flex-row w-full ml-[80px] mr-[80px]">
                <Header />
                <div class="font-semibold text-2xl mb-4">Indent/Raised to Store</div>
                <div class="overflow-y-scroll h-[500px] mt-[10px]">
                    <RTSComponent />
                </div>
            </div>
        </div>
        </>
    )
}

export default RTSpage;