import Image from 'next/image';
import React from 'react';

const AirportServices = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[456px]">
      <div className="relative w-full h-full">
        <Image
        width={100}
        height={100}
          className="absolute inset-0 w-full h-full object-cover rounded-3xs"
          alt=""
          src="/rectangle-85@2x.png"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
          <div className="relative w-[785px] h-[421px] opacity-75">
            <Image
            width={100}
            height={100}
              className="absolute w-full h-full object-contain"
              alt=""
              src="/frame@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[19.71%] left-[23.67%] w-[160px] h-[88px]">
          <Image
          width={100}
          height={100}
            className="w-full h-full"
            alt=""
            src="/group.svg"
          />
        </div>
        <div className="absolute top-[49.63%] left-[0.28%] w-[525px] h-[219px]">
          <Image
          width={100}
          height={100}
            className="w-full h-full"
            alt=""
            src="/group1.svg"
          />
        </div>
        <div className="absolute top-[15.79%] left-[31.2%] w-[528px] h-[252px]">
          <Image
          width={100}
          height={100}
            className="w-full h-full object-cover"
            alt=""
            src="/pngwing-4@2x.png"
          />
        </div>
        <div className="absolute top-[17.11%] left-[12.88%] w-[344px] h-[378px] flex items-center justify-center">
          <div className="relative w-[308px] h-[315px]">
            <Image
            width={100}
            height={100}
              className="absolute w-[90%] h-[97.14%] top-[2.86%] left-[9.89%]"
              alt=""
              src="/rectangle-86.svg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
              <p className="m-0 text-2xl font-extrabold">Airport</p>
              <p className="m-0 text-6xl font-bold">Services</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[78.07%] left-[21.05%] w-[106px] h-[31px] flex items-center justify-center text-center bg-white shadow-lg rounded-xl">
          <i className="text-4xs font-extrabold">AIRPORT DETAILS</i>
          <Image
          width={100}
          height={100}
            className="w-[20px] h-[20px] ml-2"
            alt=""
            src="/forward@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AirportServices;
