import React from "react";
import cardImage from "../../../public/bg-image.jpeg";
import narutoImage from "../../../public/naruto.png";
import Image from "next/image";

const Card = (props) => {
  return (
    <div
      className={`group flex max-h-[300px] cursor-pointer ${
        props.reverse ? "flex-row-reverse" : ""
      } rounded-md bg-primary-900 bg-opacity-10 text-secondary-200 shadow-2xl backdrop-blur-md`}
    >
      <div className=" max-w-[50%] ">
        {/* <img src="bg-image.jpeg" alt="bg-image" /> */}
        <Image src={narutoImage} className="max-h-full object-cover" />
        {/* <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-primary-900 via-transparent to-transparent"></div> */}
      </div>

      <div className="flex flex-col justify-center px-3 py-2">
        <h1 className="text-2xl font-semibold ">This is a fake title</h1>
        <p className="mt-5 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias animi,
          voluptatum quo beatae aut nihil enim eius autem facere id tempora,
          rerum ipsa obcaecati maxime, illo nostrum ipsum. Eius, ipsa!
        </p>
      </div>
    </div>
  );
};

export default Card;
