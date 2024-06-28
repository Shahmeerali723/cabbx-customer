// components/CoachTravelWidget.js
import Image from "next/image";

const CoachTravelWidget = () => {
  return (
    <div className="bg-gray-100 flex relative  h-[400px] rounded-lg   font-plus-jakarta z-20">
        <Image width={100} height={100} src={"/image-10@2x.png"} className="absolute flex h-[400px] w-full rounded-lg -z-20 opacity-10" alt="" />
      <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between p-8">
        <div className="flex flex-col mb-6 md:mb-0 w-[400px]  bg-">
          <h2 className="text-3xl font-bold text-secondary">NEED TO GO BIG</h2>
          <p className="mt-2 text-sm">
            To book your coach travel, please email us your requirements and we
            will respond promptly.
          </p>
          <button className="mt-4 px-4 py-2 w-[140px] bg-secondary text-white rounded-lg">
            Contact Us
          </button>
        </div>
        <div className="flex space-x-4">
          <div className="">
            <div className="flex flex-col items-center  bg-white rounded-lg">
              <div className="relative top-[-20px]">
                <Image
                  src="/image-11@2x.png"
                  alt="14 seater minibus"
                  width={150}
                  height={100}
                  className="rounded-lg "
                />
              </div>
              <span className="mt-[-9px] mb-1 text-sm font-plus-jakarta font-bold">
                12 seater minibus
              </span>
            </div>
            <div className="w-[90%] mx-auto h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-b-lg"></div>
          </div>
          <div className="">
            <div className="flex flex-col items-center  bg-white rounded-lg">
              <div className="relative top-[-20px]">
                <Image
                  src="/image-11@2x.png"
                  alt="14 seater minibus"
                  width={150}
                  height={100}
                  className="rounded-lg "
                />
              </div>
              <span className="mt-[-9px] mb-1 text-sm font-plus-jakarta font-bold">
                14 seater minibus
              </span>
            </div>
            <div className="w-[90%] mx-auto h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-b-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachTravelWidget;
