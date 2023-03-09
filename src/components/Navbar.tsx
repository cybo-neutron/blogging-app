import React, { useCallback, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import LoginRegister from "./Modals/LoginRegister";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = menuVisible ? "hidden" : "auto";
  }, [menuVisible]);

  return (
    <div className="flex w-full justify-between px-5 pt-5 text-lg  text-secondary-200 ">
      <div className="text-2xl font-bold">Logo</div>

      {/* Hamburger menu  */}
      <div className="md:hidden" onClick={toggleMenu}>
        <GiHamburgerMenu className="text-secondary-200" />
      </div>

      {/* Menu Items */}
      <div
        className={`absolute top-0 left-0 ${
          menuVisible ? "flex" : "hidden"
        } z-10 h-screen w-screen flex-col items-center justify-center bg-primary-900 bg-opacity-50 text-secondary-200 backdrop-blur-sm  md:static   md:flex md:h-full md:w-full md:flex-row md:justify-between md:bg-transparent`}
      >
        <div className="mx-auto flex flex-col items-center justify-center gap-2 md:flex-row md:gap-8">
          <div className="border-b-2">Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>

        {/* Auth buttons  */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-primary-300 md:my-auto md:mt-0 md:flex-row">
          <button className="w-32 border-[0.5px] bg-ternary-200 bg-opacity-10 uppercase shadow-lg  backdrop-blur-lg hover:bg-ternary-800">
            Sign In
          </button>
          <button className="w-32 border-[0.5px] border-ternary-400 bg-ternary-200 bg-opacity-10 uppercase  text-ternary-400 shadow-lg backdrop-blur-lg  hover:bg-ternary-800 hover:text-ternary-200">
            Sign Up
          </button>
        </div>

        {/* close button */}
        <div
          className="absolute top-5 right-5 cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <AiOutlineClose className="text-2xl font-bold text-white" />
        </div>
      </div>
      <LoginRegister />
    </div>
  );
}

export default Navbar;
