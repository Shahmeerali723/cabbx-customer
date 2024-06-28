"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const vehicles: any = {
  Cab: [
    { name: "Coupe", image: "/image-1@2x.png" },
    { name: "Cadillac", image: "/image-2@2x.png" },
    { name: "Nissan", image: "/image-3@2x.png" },
    { name: "Chevrolet", image: "/image-4@2x.png" },
    { name: "Dodge", image: "/image-5@2x.png" },
    {
      name: "badger bus",
      image: "/image-6@2x.png",
    },
    
    
  ],
  DayHire: [
    { name: "Coupe", image: "/image-1@2x.png" },
    { name: "Cadillac", image: "/image-2@2x.png" },
    { name: "Nissan", image: "/image-3@2x.png" },
    { name: "Chevrolet", image: "/image-4@2x.png" },
    { name: "Dodge", image: "/image-5@2x.png" },
    {
      name: "badger bus",
      image: "/image-6@2x.png",
    },
  ],
};

const VehicleSelector = ({ selectedTab }: any) => {
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  useEffect(() => {
    if (vehicles[selectedTab] && vehicles[selectedTab][0]) {
      setSelectedVehicle(vehicles[selectedTab][0]);
    }
  }, [selectedTab]);

  if (!vehicles[selectedTab]) {
    return <div>No vehicles available</div>;
  }

  return (
    <div className="flex space-x-4 overflow-x-scroll p-4 w-full justify-center scrollBar">
      {vehicles[selectedTab].map((vehicle: any, index: any) => (
        <div key={index} className="flex-shrink-0">
          <Image
          width={100}
          height={100}
            src={vehicle.image}
            alt={vehicle.name}
            className={`w-44 h-20 cursor-pointer ${
              selectedVehicle?.name === vehicle.name
                ? "border-4 border-yellow-500"
                : ""
            }`}
            onClick={() => setSelectedVehicle(vehicle)}
          />
          <p className="text-center font-plus-jakarta font-bold">{vehicle.name}</p>
        </div>
      ))}
    </div>
  );
};

export default VehicleSelector;
