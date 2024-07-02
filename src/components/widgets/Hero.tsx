import React from "react";
import HeroBack from "@/assets/HeroBackground.svg";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative w-full">
      <Image height={300} src={"/mainpage3.gif"} width={100} className="w-full " alt="Hero Background" />
      <div className="absolute inset-y-0 left-0 flex items-center   ml-8">
        <div className="text-left w-[90%] md:w-[60%] flex flex-col gap-3">
          <h1 className="text-2xl md:text-5xl bg-gradient-custom-primary inline-block text-transparent bg-clip-text font-plus-jakarta font-extrabold">
            CLICK ONCE <br />
            AND YOU’RE ON YOUR WAY
          </h1>
          <p className=" text-sm sm:text-md text-textprimary-light font-plus-jakarta">
            Welcome to Cabbx, your trusted companion in navigating the bustling
            streets of the UK. With just a click, embark on seamless journeys
            that redefine convenience and comfort.
          </p>
          <Button className="bg-orange text-white w-fit">Book now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
