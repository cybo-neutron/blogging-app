import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function LoginRegister() {
  const [loginVisible, setLoginVisible] = useState(true);

  function handleLoginChange() {
    setLoginVisible((prev) => !prev);
  }

  return (
    <div className=" fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center overflow-hidden bg-primary-500 bg-opacity-30 backdrop-blur-[2px]">
      <div
        style={{
          // backgroundImage: `url('bg-image.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // opacity: 0.2,
          zIndex: 0,
        }}
        className="relative h-full w-full overflow-hidden rounded-lg bg-primary-800 bg-opacity-70 shadow-xl backdrop-blur-md md:h-4/5 md:w-3/5"
      >
        <div className="absolute -z-10 h-full w-full bg-opacity-70 bg-gradient-to-t from-[#100f10a9] to-[#2d0a327f]"></div>
        {/* <div className="absolute -z-10 h-full w-full bg-opacity-70 bg-gradient-to-t from-primary-900 to-ternary-900"></div> */}
        {loginVisible && (
          <motion.form
            action=""
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
            transition={{ type: "spring", stiffness: 100 }}
            className=" z-50 ml-auto flex h-full w-3/5 flex-col gap-4 rounded-lg bg-primary-900 bg-opacity-90 px-10 text-primary-400"
          >
            <div className="mt-32 text-center text-4xl font-bold ">
              Enter the WORLD of MAGIC
            </div>
            <input
              type="text"
              placeholder="username"
              className="z-10 rounded-full border-0 bg-primary-800 bg-opacity-60 px-4 py-2 text-primary-400 outline-none placeholder:text-primary-500 focus:shadow-xl"
            />
            <input
              type="text"
              placeholder="password"
              className="z-10 rounded-full border-0 bg-primary-800 bg-opacity-60 px-4 py-2 text-primary-400 outline-none placeholder:text-primary-500 focus:shadow-xl"
            />

            <div className="self-end text-sm font-light">
              Dont have an account?{" "}
              <span
                className=" cursor-pointer text-lg font-semibold text-ternary-900 underline"
                onClick={handleLoginChange}
              >
                Create One
              </span>
            </div>
            <button
              className="text-md cursor-pointer rounded-full bg-primary-800 py-2 text-primary-400 shadow-xl"
              type="button"
            >
              Login
            </button>
          </motion.form>
        )}

        <AnimatePresence>
          {!loginVisible && (
            <motion.form
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              action=""
              className=" z-50 flex h-full w-3/5 flex-col gap-4 rounded-lg bg-primary-900 bg-opacity-90 px-10 text-primary-400"
            >
              <div className="mt-32 text-center text-4xl font-bold ">
                Enter the WORLD of HAPPINESS
              </div>
              <input
                type="text"
                placeholder="username"
                className="z-10 rounded-full border-0 bg-primary-800 bg-opacity-60 px-4 py-2 text-primary-400 outline-none focus:shadow-xl"
              />
              <input
                type="text"
                placeholder="password"
                className="z-10 rounded-full border-0 bg-primary-800 bg-opacity-60 px-4 py-2 text-primary-400 outline-none focus:shadow-xl"
              />

              <div className="self-end text-sm font-light">
                Already have an account?{" "}
                <span
                  className=" cursor-pointer font-semibold text-ternary-900 underline"
                  onClick={handleLoginChange}
                >
                  Login
                </span>
              </div>

              <button
                className="cursor-pointer rounded-full bg-primary-800 py-1 text-2xl text-primary-400 shadow-xl"
                type="button"
              >
                Register
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LoginRegister;
