import React, { useState } from "react";
import VehicleSelector from "../shared/VehicleSelecter";
import BookingForm from "../Forms/BookingForm";
import DayHireForm from "../Forms/DayHireForm";

const CabHire = () => {
  const [selectedTab, setSelectedTab] = useState("Cab");
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 mt-8 bg-primary-dark bg-opacity-[88%] p-2 rounded-t-xl">
          <button
            className={`px-4 py-2  ${
              selectedTab === "Cab" ? "bg-white rounded-md" : "text-white"
            }`}
            onClick={() => setSelectedTab("Cab")}
          >
            Cab
          </button>
          <button
            className={`px-4 py-2  ${
              selectedTab === "DayHire" ? "bg-white rounded-md" : "text-white"
            }`}
            onClick={() => setSelectedTab("DayHire")}
          >
            Day Hire
          </button>
        </div>
      </div>

      <div className="bg-primary bg-opacity-[85%]">
        <div className="h-14 "></div>
        <VehicleSelector selectedTab={selectedTab} />
        {selectedTab === "Cab" ? <BookingForm /> : <DayHireForm />}
      </div>
    </div>
  );
};

export default CabHire;
