import React from "react";
import PropTypes from "prop-types";
import { CgBriefcase } from "react-icons/cg";
import { IoPersonAdd } from "react-icons/io5";
import { BsLuggageFill } from "react-icons/bs";
import Image from "next/image";

const vehicleData: any = {
  Saloon: {
    description:
      "Get around the UK in comfort and style with Cabox's reliable saloon cars for taxi service. Book now!",
    image: "/images/SaloonCar.png",
    capacity: {
      persons: 4,
      briefcases: 2,
      luggage: 2,
    },
  },
  Estate: {
    description:
      "Experience spacious rides across the UK with Cabbx's estate cars for taxi service. Comfort, reliability, and room for all your luggage!",
    image: "/images/EstateCar.png",
    capacity: {
      persons: 4,
      briefcases: 2,
      luggage: 2,
    },
  },
  MPV: {
    description:
      "Travel hassle-free with Cabbx's MPV cars for taxi service in the UK. Spacious, versatile, and perfect for group trips. Book now!",
    image: "/images/MVPCar.png",
    capacity: {
      persons: 4,
      briefcases: 2,
      luggage: 2,
    },
  },
  Transporter: {
    description:
      "Experience luxurious group travel with Cabbx's transporter cars for airport transfers or group trips in the UK taxi service. Enjoy comfort, style, and reliability throughout your journey.",
    image: "/images/TransporterCar.png",
    capacity: {
      persons: 8,
      briefcases: 6,
      luggage: 5,
    },
  },
  Executive: {
    description:
      "Experience luxury travel across the UK with Cabbx's executive cars for taxi service. Style, comfort, and professionalism at your service. Book now!",
    image: "/images/ExecutiveCar.png",
    capacity: {
      persons: 4,
      briefcases: 2,
      luggage: 1,
    },
  },
  ExecutiveTransporter: {
    description:
      "Indulge in luxury group trips with Cabbx's executive transporter cars for UK taxi service. Comfort, style, and reliability for your journey.",
    image: "/images/ExecutiveTransportCar.png",
    capacity: {
      persons: 8,
      briefcases: 6,
      luggage: 5,
    },
  },
};

const getVehicleIndex = (selectedVehicle: any) => {
  const vehicleTypes = [
    "Saloon",
    "Estate",
    "MPV",
    "Transporter",
    "Executive",
    "ExecutiveTransporter",
  ];
  return vehicleTypes.indexOf(selectedVehicle.replace(" ", ""));
};

const VehicleDisplay = ({ selectedVehicle, setSelectedVehicle }: any) => {
  const vehicle = vehicleData[selectedVehicle.replace(" ", "")];
  const vehicleTypes = Object.keys(vehicleData);
  const currentIndex = getVehicleIndex(selectedVehicle);

  const prevVehicle =
    vehicleTypes[
      (currentIndex - 1 + vehicleTypes.length) % vehicleTypes.length
    ];
  const nextVehicle = vehicleTypes[(currentIndex + 1) % vehicleTypes.length];

  if (!vehicle) return <div>Please select a vehicle type.</div>;

  return (
    <div className="p-8 grid grid-cols-1 lg:grid-cols-5 gap-4 items-center relative">
      {/* <img
          src={vehicleData[prevVehicle].image}
          alt={prevVehicle}
          className="absolute left-  w-1/4 opacity-50 hover:opacity-75 cursor-pointer z-10"
          onClick={() => setSelectedVehicle(prevVehicle)}
        /> */}
      <div className="lg:col-span-2">
        <h2 className="text-3xl font-bold italic">{selectedVehicle}</h2>
        <p className="mt-1">{vehicle.description}</p>
      </div>
      <div className="relative col-span-2 flex justify-center items-center">
        <div className="relative z-20">
          <Image
          width={100}
          height={100}
            src={vehicle.image}
            alt={selectedVehicle}
            className="w-[300px]"
          />
          <div
            style={{ zIndex: -1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-4 skew-y-[230deg] rotate-[110deg] scale-90 mt-10  border-secondary rounded-[90%]"
          ></div>
        </div>
        {/* <img
          src={vehicleData[nextVehicle].image}
          alt={nextVehicle}
          className="absolute right-[-12.5%] w-1/2 opacity-50 hover:opacity-75 cursor-pointer z-10"
          onClick={() => setSelectedVehicle(nextVehicle)}
        /> */}
      </div>
      <div className="flex justify-around items-center mt-4 flex-col gap-3 font-bold">
        <div className="flex flex-col bg-white items-center text-golden border-2 w-[120px] h-[120px] justify-center border-t-golden border-r-golden  p-2  rounded-full">
          <IoPersonAdd size={30} />

          <div className="text-center flex gap-2 items-center text-black text-sm">
            <p className="">{vehicle.capacity.persons}</p>
            <p>Persons</p>
          </div>
        </div>

        <div className="flex flex-col bg-white items-center text-secondary border-2 w-[120px] h-[120px] justify-center p-2  rounded-full border-t-secondary border-r-secondary">
          <CgBriefcase size={30} />
          <div className="text-center flex gap-2 items-center text-black text-sm ">
            <p className="">{vehicle.capacity.briefcases}</p>
            <p>Briefcases</p>
          </div>
        </div>
        <div className="flex flex-col bg-white items-center text-orange  border-2 w-[120px] h-[120px] justify-center p-2  rounded-full border-t-orange border-r-orange">
          <BsLuggageFill size={30} />
          <div className="text-center flex gap-2 items-center text-black text-sm ">
            <p className="">{vehicle.capacity.luggage}</p>
            <p>Luggage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

VehicleDisplay.propTypes = {
  selectedVehicle: PropTypes.string.isRequired,
  setSelectedVehicle: PropTypes.func.isRequired,
};

export default VehicleDisplay;
