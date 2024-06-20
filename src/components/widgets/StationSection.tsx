// pages/index.js
import { useState } from "react";
import Image from "next/image";
import StationCard from "../shared/StationCard";

const railwayStations = [
  {
    name: "Euston",
    image: "/Euston.png",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content hereir",
  },
  {
    name: "Waterloo",
    image: "/Waterloo.png",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content hereir",
  },
  {
    name: "London Bridge",
    image: "/London.png",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content hereir",
  },
  {
    name: "Victoria",
    image: "/Victoria.png",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content hereir",
  },
  {
    name: "Paddington",
    image: "/paddington.png",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content hereir",
  },
  
  // Add more railway stations as needed
];

const cruiseStations = [
  {
    name: "Euston",
    image: "/Euston.png",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content hereir",
  },
  {
    name: "Waterloo",
    image: "/Waterloo.png",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content hereir",
  },
  {
    name: "London Bridge",
    image: "/London.png",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content hereir",
  },
  {
    name: "Victoria",
    image: "/Victoria.png",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content hereir",
  },
  {
    name: "Paddington",
    image: "/paddington.png",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content hereir",
  },
  
  // Add more cruise stations as needed
];

export default function StationSection() {
  const [selectedStationType, setSelectedStationType] = useState("railway");
  const [selectedStation, setSelectedStation] = useState(railwayStations[0]);
  const [customArray, setCustomArray] = useState<any>([]);
  let temp: any[] = [];
  const stations =
    selectedStationType === "railway" ? railwayStations : cruiseStations;

  return (
    <div className="flex flex-col items-center justify-center font-plus-jakarta ">
      <div className="w-full flex flex-col gap-8">
        <div>
          <h3 className="text-2xl font-bold text-center mb-1">
            Station Services
          </h3>
        </div>
        <div className="flex justify-center bg-golden bg-opacity-20 w-fit mx-auto p-2 rounded-2xl">
          <button
            className={`px-3 py-2 rounded ${
              selectedStationType === "railway"
                ? "bg-orange text-white relative top-[-30px] border-[6px] rounded-2xl border-white"
                : " text-black"
            }`}
            onClick={() => {
              setSelectedStationType("railway");
              setSelectedStation(railwayStations[0]);
            }}
          >
            Railway Station
          </button>
          <button
            className={`px-3 py-2 rounded ml-2 ${
              selectedStationType === "cruise"
                ? "bg-orange text-white relative top-[-30px] border-[6px] rounded-2xl border-white"
                : " text-black"
            }`}
            onClick={() => {
              setSelectedStationType("cruise");
              setSelectedStation(cruiseStations[0]);
            }}
          >
            Cruise Station
          </button>
        </div>
        <div
          className={`mb-2 grid ${
            selectedStationType === "railway" ? "grid-cols-1" : "grid-cols-5"
          } gap-4`}
        >
          <div
            className={`border-[12px] rounded-2xl ${
              selectedStationType === "railway" ? "col-span-1" : "col-span-4"
            }`}
          >
            <StationCard station={selectedStation} />
          </div>
          <div
            className={`${
              selectedStationType === "railway" ? "col-span-1" : "col-span-1"
            } grid ${
              selectedStationType === "railway"
                ? "grid-cols-5"
                : "grid-cols-1"
            } gap-4`}
          >
            {stations.map((station, index) => {
              if(
                selectedStationType != "railway"
              ){
                if(index < 3){
                  return(
                    <button
                    key={index}
                    className={`p-2 rounded-2xl  relative  ${
                      selectedStation.name === station.name
                        ? "border-[3px] border-orange bg-orange"
                        : "border-[3px] border-gray-300 bg-gray-300"
                    }`}
                    onClick={() => setSelectedStation(station)}
                  >
                    <div className={`absolute bottom-0 left-0 right-0  bg-black bg-opacity-30 ${selectedStation.name === station.name ? "rounded-xl" : "rounded-xl "}`}>
                    </div>
                    <Image
                      src={station.image}
                      alt={station.name}
                      className="w-full h-full object-cover rounded-xl"
                      width={128}
                      height={80}
                    />
                    <span className="absolute bottom-5 left-0 text-center w-full text-white font-semibold">{station.name}</span>
                  </button>
                  )
                }else{
                  temp.push(station)
                }
              }else{
                return(
                <button
                    key={index}
                    className={`rounded-xl relative  ${
                      selectedStation.name === station.name
                      ? "border-[8px] border-orange bg-orange"
                      : "border-[8px] bg-gray-300 border-gray-300"
                    }`}
                    onClick={() => setSelectedStation(station)}
                  >
                     <div className={`absolute bottom-0 left-0 right-0 h-full bg-black bg-opacity-30 ${selectedStation.name === station.name ? "rounded-xl" : "rounded-xl "}`}>
                    </div>
                    <Image
                      src={station.image}
                      alt={station.name}
                      className="w-full rounded-xl h-32  object-cover"
                      width={128}
                      height={80}
                    />
                   
                      
                    <span className="absolute bottom-0 left-0 text-center w-full text-white font-semibold">{station.name}</span>
                  </button>)
              }
              
            }
              
              
            )}
          </div>
          
        </div>
        <div className="grid grid-cols-5 gap-5 mt-[-25px]">
            {temp.map((item, index)=>{
              return(
                <button
                key={index}
                className={`p-2  rounded-2xl  relative  ${
                  selectedStation.name === item.name
                  ? "border-[3px] border-orange bg-orange"
                  : "border-[3px] border-gray-300 bg-gray-300"
                }`}
                onClick={() => setSelectedStation(item)}
              >
                <div className={`absolute bottom-0 left-0 right-0 h-full bg-opacity-30 ${selectedStation.name === item.name ? "rounded-xl" : "rounded-xl "}`}>
                    </div>
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full rounded-xl object-cover"
                  width={128}
                  height={80}
                />
                <span className="absolute bottom-4 left-0 text-center w-full text-white font-semibold">{item.name}</span>
              </button>
              )
            })}
          </div>
      </div>
    </div>
  );
}
