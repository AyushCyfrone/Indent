import { useState } from "react";
import { NavLink } from "react-router-dom";
import IndentRaised from "./IndentRaised";

function ActionButton({ children, className, ...props }) {
    return (
      <button className={`flex gap-2 justify-center py-2.5 pr-6 pl-4 rounded-lg border border-solid ${className}`} {...props}>
        {children}
      </button>
    );
}


function Action(){
  const [openCart, setOpenCart] = useState(false);

  function handleCart() {
    setOpenCart(!openCart);
  }
    return (
        <>
        <section className="flex gap-5 justify-between text-base font-semibold tracking-wide max-md:flex-wrap mt-[35px] mb-[24px]">
      <NavLink to="/DraftAdd">
      <ActionButton className="text-blue-500 border-blue-500 max-md:px-5  hover:bg-indigo-100 hover:text-blue-600">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b14617a2eda350ebc4078674b336a280e80cd30cda782867a7c31bf9c05c41a5?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="" className="shrink-0 w-6 aspect-square" />
        <span className="my-auto">Add More</span>
      </ActionButton>
      </NavLink>
      <div className="flex gap-5 justify-between self-start whitespace-nowrap">
        <ActionButton className="text-blue-500 border-blue-500 max-md:px-5  hover:bg-indigo-100 hover:text-blue-600">
          Cancel
        </ActionButton>
        <ActionButton onClick={handleCart} className="text-white bg-blue-500 max-md:px-5 hover:shadow-lg transition-shadow duration-100">
          Confirm
        </ActionButton>
        {openCart && <IndentRaised handleCart={handleCart}/>}
      </div>
    </section>
        </>
    )
}

export default Action;