import * as React from "react";
import Logo from "../IndentComponent/Logo";

function LoginPage() {
  return (
    <>
      <div className="grid sm:grid-cols-12 sm:bg-white bg-blue-500">
        <div className="sm:rounded-r-xl bg-blue-500 h-80 sm:min-h-screen sm:col-span-5 flex justify-center items-center">
          <Logo />
        </div>
        <div className=" bg-white h-80 rounded-t-3xl sm:min-h-screen sm:col-span-7 flex flex-col items-center px-10 pb-10">
          <div class="hidden sm:flex justify-end w-full mt-5 font-semibold hover:font-bold cursor-pointer">
            Need help ?
          </div>
          <div class="w-full h-screen mx-10 flex flex-col justify-center items-center px-10">
            <div class="m-2 w-full max-w-60">
              <p class="font-semibold my-1">Employee ID</p>
              <input
                type=""
                class="bg-indigo-50 h-17 w-full focus:outline-none"
              ></input>
            </div>
            <div class="m-2 w-full max-w-60">
              <p class="font-semibold my-1">Password</p>
              <input
                type="password"
                class="bg-indigo-50 h-17 w-full focus:outline-none"
              ></input>
            </div>
            <button class="bg-blue-500 w-full rounded-sm h-10 m-2 text-white font-md font-semibold py-2 max-w-60 hover:shadow-xl hover:border-blue-500 hover:border-2">
              Login
            </button>
            <div class="sm:hidden flex justify-center items-center w-full mt-5 font-semibold hover:font-bold cursor-pointer">
            Need help ?
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
