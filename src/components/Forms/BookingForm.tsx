import React, { ChangeEvent, useState } from "react";
import InputWithIcon from "../shared/Input-With-Icon";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { BsLuggageFill } from "react-icons/bs";
import VehicleSelector from "../shared/VehicleSelecter";
import { Button } from "../ui/button";

interface FormData {
  pickUp: string;
  via: string;
  dropoff: string;
  date: string;
  time: string;
  noOfPerson: string;
  items: string;
  journey: string;
}


const BookingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    pickUp : "",
    via : "",
    dropoff : "",
    date : "",
    time : "",
    noOfPerson : "",
    items : "",
    journey : "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
    
  };
  return (
    <div className="p-4">
      <div className="">
        <div className="grid grid-cols-3 gap-2">
          <div className="mb-4">
            <InputWithIcon
              placeholder="Pickup"
              icon={<FaLocationDot />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}
              name={"pickUp"}
              value={formData.pickUp}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <InputWithIcon
              placeholder="Via (Optional)"
              icon={<IoMdAdd />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}
              name={"via"}
              value={formData.via}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <InputWithIcon
              placeholder="DropOff"
              icon={<FaLocationDot />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}
              name={"dropoff"}
              value={formData.dropoff}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <div className="mb-4">
            <InputWithIcon
              placeholder="dd/mm/yy"
              type={"date"}
              icon={<FaCalendarAlt />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}
              name={"date"}
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 col-span-2">
            <InputWithIcon
              placeholder="00:00PM"
              type={"time"}
              icon={<CiClock2 />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}
              name={"time"}
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <InputWithIcon
              placeholder="No of Persons"
              icon={<IoPersonAdd />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}
              name={"noOfPerson"}
              value={formData.noOfPerson}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <InputWithIcon
              placeholder="Add items"
              icon={<BsLuggageFill />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}
              name={"items"}
              value={formData.items}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <InputWithIcon
              placeholder="Journey"
              icon={<FaLocationDot />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}

            />
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>

      <Button className="bg-black text-white w-fit p-2">Get Quote</Button>
      </div>
    </div>
  );
};

export default BookingForm;
