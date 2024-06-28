// components/StationCard.js
import Image from "next/image";

const StationCard = ({ station }: any) => {
  return (
    <div className="relative font-plus-jakarta w-full rounded-xl">
      <Image
      width={100}
      height={100}
        src={station.image}
        alt={station.name}
        className="w-full h-[700px] rounded-xl"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black rounded-xl h-full bg-opacity-50 p-4 text-white">
        <div className="absolute bottom-16 p-4 rounded-xl">
          <h2 className="text-3xl font-bold">{station.name}</h2>
        <p className="mt-2">{station.description}</p>
        <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
          Learn more
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default StationCard;
