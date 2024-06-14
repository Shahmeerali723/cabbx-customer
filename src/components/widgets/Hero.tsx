import React from "react";
import HeroBack from '@/assets/HeroBackground.svg'
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full ">
        <Image className="w-full" width={100} height={100} src={HeroBack} alt=""/>
      <div className="sm:w-[600px] w-full bg-black">
        <h1 className="text-3xl bg-gradient-custom-primary inline-block text-transparent bg-clip-text font-bold">
          CLICK ONCE <br />
          AND YOU’RE ON YOUR WAY
        </h1>
        <p className="text-textprimary-light">
        Welcome to Cabbx, your trusted companion in navigating the bustling streets of the UK. With just a click, embark on seamless journeys that redefine convenience and comfort.
        </p>
      </div>
    </div>
  );
};

export default Hero;
