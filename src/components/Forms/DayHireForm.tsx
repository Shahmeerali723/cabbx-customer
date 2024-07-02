import React, { ChangeEvent, useState } from "react";
import InputWithIcon from "../shared/Input-With-Icon";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { Button } from "../ui/button";

interface FormData {
  pickUp: string;
  days: string;
  dropoffTimeDate: string;
  pickUpoffTimeDate: string;
}

const DayHireForm = () => {
  const [formData, setFormData] = useState<FormData>({
    pickUp: "",
    days: "",
    dropoffTimeDate: "",
    pickUpoffTimeDate: "",
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
    <div className="p-4 w-full">
      <div className="">
        <div className="grid md:grid-cols-2 gap-2">
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
              placeholder="Days"
              icon={<IoMdAdd />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}
              name={"days"}
              value={formData.days}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          <div className="mb-4">
            <InputWithIcon
              placeholder="Dropoff Date & Time"
              type={"datetime-local"}
              icon={<FaLocationDot />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}
              name={"dropoffTimeDate"}
              value={formData.dropoffTimeDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <InputWithIcon
              placeholder="Pickup Date & Time"
              icon={<FaLocationDot />}
              classes={{ icon: "bg-black text-white", div: "border-black" }}
              name={"dropoff"}
              value={formData.pickUpoffTimeDate}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button className="bg-black text-white w-fit p-2">Get Quote</Button>
      </div>
    </div>
  );
};

export default DayHireForm;
