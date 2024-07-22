function Checkbox({state,clicked,setClicked}) {

  function handleClick() {
    setClicked(!clicked);
    state();
  }

  return (
    <>
      <div
        class={`m-1 flex items-center justify-center w-10 h-10 rounded-full ${
          clicked ? "hover:bg-blue-100" : "hover:bg-gray-200"
        } active:bg-blue-200`}
      >
        <div
          class={` h-[18px] w-[19px] flex justify-center items-center ${
            clicked
              ? "border-blue-500 border-2 bg-blue-500"
              : "border-gray-900 bg-gray-900 border-2"
          }`}
        >
          <input
            id="checkbox"
            type="checkbox"
            checked={clicked}
            class={`items-center w-4 h-4 text-blue-500 bg-white border-black border-2`}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default Checkbox;
