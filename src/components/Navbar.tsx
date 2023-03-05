import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="flex w-full justify-between px-5 pt-5 text-lg font-bold text-secondary-200">
      <div className="text-2xl">Logo</div>

      <div className="md:hidden">
        <GiHamburgerMenu className="text-secondary-200" />
      </div>

      <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-primary-900 text-secondary-200 md:static   md:h-full md:w-full md:flex-row md:justify-between md:bg-transparent">
        <div className="mx-auto flex flex-col items-center justify-center gap-2 md:flex-row md:gap-8">
          <div className="border-b-2">Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-secondary-300 md:my-auto md:mt-0 md:flex-row">
          <button className="w-32 rounded-full bg-ternary-700 bg-opacity-50 hover:bg-ternary-800">
            Sign In
          </button>
          <button className="w-32 rounded-full bg-ternary-700  hover:bg-ternary-800">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
