import Image from "next/image";
import React from "react";
import cardImage from "../../../public/bg-image.jpeg";

function GlassCard() {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-md bg-primary-800 bg-opacity-10 text-secondary-300 shadow-2xl backdrop-blur-sm">
      <div className="relative">
        {/* <img src="bg-image.jpeg" alt="bg-image" /> */}
        <Image src={cardImage} className="" />
        {/* <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-primary-900 via-transparent to-transparent"></div> */}
      </div>

      <div className="flex flex-col px-3 py-2">
        <h1 className="text-lg font-semibold">Title</h1>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias animi,
          voluptatum quo beatae aut nihil enim eius autem facere id tempora,
          rerum ipsa obcaecati maxime, illo nostrum ipsum. Eius, ipsa!
        </p>
      </div>
    </div>
  );
}

export default GlassCard;
