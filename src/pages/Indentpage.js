import SideBar from "../IndentComponent/Sidebar";
import Main from "../IndentComponent/Main";
import Header from "../Components/Header/Header";
import DraftComponent from "../IndentComponent/DraftComponent";

function IndentPage(){
    return (
        <>
        <div class="flex">
            <SideBar />
            <div class="flex-row w-full ml-[80px] mr-[80px]">
                <Header />
                <DraftComponent />
            </div>
        </div>
        </>
    )
}
export default IndentPage;