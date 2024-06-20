"use client";

import React, { useState, useEffect } from "react";

const vehicles: any = {
  Cab: [
    { name: "Coupe", image: "https://static.toiimg.com/photo/80387978.cms" },
    { name: "Cadillac", image: "https://static.toiimg.com/photo/80387978.cms" },
    { name: "Cadillac", image: "https://static.toiimg.com/photo/80387978.cms" },
    { name: "Cadillac", image: "https://static.toiimg.com/photo/80387978.cms" },
    { name: "wwwww", image: "https://static.toiimg.com/photo/80387978.cms" },
    { name: "eeeee", image: "https://static.toiimg.com/photo/80387978.cms" },
    {
      name: "Cadiwweellac",
      image: "https://static.toiimg.com/photo/80387978.cms",
    },
    { name: "Cadillac", image: "https://static.toiimg.com/photo/80387978.cms" },
    {
      name: "Cadwwwwillac",
      image: "https://static.toiimg.com/photo/80387978.cms",
    },
    { name: "Cadillac", image: "https://static.toiimg.com/photo/80387978.cms" },
    { name: "aaaa", image: "https://static.toiimg.com/photo/80387978.cms" },
  ],
  DayHire: [
    { name: "wwwww", image: "https://static.toiimg.com/photo/80387978.cms" },
    { name: "eeeee", image: "https://static.toiimg.com/photo/80387978.cms" },
    {
      name: "Cadiwweellac",
      image: "https://static.toiimg.com/photo/80387978.cms",
    },
    { name: "Cadillac", image: "https://static.toiimg.com/photo/80387978.cms" },
    {
      name: "Cadwwwwillac",
      image: "https://static.toiimg.com/photo/80387978.cms",
    },
    { name: "Cadillac", image: "https://static.toiimg.com/photo/80387978.cms" },
    { name: "aaaa", image: "https://static.toiimg.com/photo/80387978.cms" },
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
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className={`w-32 h-20 cursor-pointer ${
              selectedVehicle?.name === vehicle.name
                ? "border-4 border-yellow-500"
                : ""
            }`}
            onClick={() => setSelectedVehicle(vehicle)}
          />
          <p className="text-center ">{vehicle.name}</p>
        </div>
      ))}
    </div>
  );
};

export default VehicleSelector;
