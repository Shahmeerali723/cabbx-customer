// components/CarCard.js
import Image from "next/image";
import { Button } from "../ui/button";

const CarCard = () => {
  return (
    <div className="w-fit rounded-lg overflow-hidden shadow-lg bg-white border border-gray-300">
      <div className="relative bg-orange p-4">
        <h2 className="text-white text-xl font-bold">Estate</h2>
        <Image
          className="w-[80%] mx-auto h-auto mt-4 z-50 relative"
          src="/images/MVPCar.png"
          width={80}
          height={80}
          alt="Car"
        />
        <div className="text-center text-2xl font-bold text-red-500 z-50 relative">
          $200 <span className="text-sm text-gray-600">from</span>
        </div>
        <div className="absolute bottom-0 right-0 transform translate-x-1.5/2 translate-y-1.5/2 w-full h-6 border-r-[395px] border-orange bg-white border-r-transparent border-t-[150px] "></div>
      </div>
      <hr />
      <div className="px-4 py-4">
        <div className="flex items-center gap-4 my-4 text-gray-700">
          <div className="text-center flex items-center gap-2 bg-gray-200 p-1 rounded-xl">
            <Image
              className="w-6 border-r-2 border-gray-500 px-1"
              src={"/user-account@2x.png"}
              alt=""
              width={100}
              height={100}
            />
            <span className="text-sm">1</span>
          </div>
          <div className="text-center flex items-center gap-2 bg-gray-200 p-1 rounded-xl">
            <Image
              className="w-6 border-r-2 border-gray-500 px-1"
              src={"/user-account@2x.png"}
              alt=""
              width={100}
              height={100}
            />
            <span className="block text-sm">1</span>
          </div>
          <div className="text-center flex items-center gap-2 bg-gray-200 p-1 rounded-xl">
            <Image
              className="w-6 border-r-2 border-gray-500 px-1"
              src={"/user-account@2x.png"}
              alt=""
              width={100}
              height={100}
            />
            <span className="block text-sm">6</span>
          </div>
          <div className="text-center flex items-center gap-2 bg-gray-200 p-1 rounded-xl">
            <Image
              className="w-6 border-r-2 border-gray-500 px-1"
              src={"/user-account@2x.png"}
              alt=""
              width={100}
              height={100}
            />
            <span className="block text-sm">1</span>
          </div>
        </div>
        <div className="text-center mb-4 text-gray-700">
          <div className="grid grid-cols-2 text-start font-plus-jakarta text-sm">
            <div className="">

              <span>1 x Estate</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="w-5" src={'/tracking@2x.png'} alt="" width={100} height={100} /> <span>Lorem, US</span>
            </div>
          </div>
          <div className="grid grid-cols-2 text-start font-plus-jakarta text-sm">
            <div className="flex gap-2 items-center">
              <Image className="w-5" src={'/company@2x.png'} alt="" width={100} height={100} />
              <span>Linkagecars</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="w-5" src={'/user-account@2x.png'} alt="" width={100} height={100} /> <span>4.0</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button className="bg-[#3D5B1E] text-white py-2 px-4 rounded-full">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
