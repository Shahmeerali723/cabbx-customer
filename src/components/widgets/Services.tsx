import React from "react";
import coinSvg from "@/assets/coin.svg";
import usertag from "@/assets/usertag.svg";
import smartCar from "@/assets/smartcar.svg";
import clipBoard from "@/assets/clipboardtick.svg";
import Image from "next/image";

const Services = () => {
  return (
    <div className="flex justify-around bg-secondary p-6 rounded-lg text-white">
      <div className="flex flex-col items-center text-center m-4">
        <div className="text-4xl mb-2">
          <Image src={coinSvg} alt="" />
        </div>
        <h3 className="text-xl font-semibold font-plus-jakarta">
          Best Price Guaranteed
        </h3>
        <p className="text-sm font-plus-jakarta w-[60%]">
          Unbeatable Deals Await! Lock in the Best Price - Guaranteed!
        </p>
      </div>
      <div className="flex flex-col items-center text-center m-4">
        <div className="text-4xl mb-2">
          <Image src={usertag} alt="" />
        </div>
        <h3 className="text-xl font-semibold font-plus-jakarta">
          24/7 Customer Care
        </h3>
        <p className="text-sm font-plus-jakarta w-[60%]">
          Round-the-Clock Support. Your Needs, Our Priority!
        </p>
      </div>
      <div className="flex flex-col items-center text-center m-4">
        <div className="text-4xl mb-2">
          <Image src={smartCar} alt="" />
        </div>
        <h3 className="text-xl font-semibold font-plus-jakarta">
          Pickup Service
        </h3>
        <p className="text-sm font-plus-jakarta w-[60%]">
          {"Effortless Pickup Service. We'll Take Care of the Rest!"}
        </p>
      </div>
      <div className="flex flex-col items-center text-center m-4">
        <div className="text-4xl mb-2">
          <Image src={clipBoard} alt="" />
        </div>
        <h3 className="text-xl font-semibold font-plus-jakarta">
          Easy Bookings
        </h3>
        <p className="text-sm font-plus-jakarta w-[60%]">
          Hassle-Free Booking. Your Journey Begins with Ease!
        </p>
      </div>
    </div>
  );
};

export default Services;
