"use client";
import BookingForm from "@/components/Forms/BookingForm";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import NavDropDown from "@/components/shared/NavDropDown";
import VehicleNavbar from "@/components/shared/VehicleNav";
import VehicleSelector from "@/components/shared/VehicleSelecter";
import Hero from "@/components/widgets/Hero";
import Image from "next/image";
import { BsAirplaneFill } from "react-icons/bs";
import { IoMdTrain } from "react-icons/io";
import { RiShip2Fill } from "react-icons/ri";
import { useState } from "react";
import DayHireForm from "@/components/Forms/DayHireForm";
import CabHire from "@/components/widgets/CabHire";
import Services from "@/components/widgets/Services";

export default function Home() {
  return (
    <>
    <div className="w-[80%] mx-auto">
      <div className="">
        <Hero />
      </div>
      <div className="relative mt-[-160px] z-50">
        <CabHire />
      </div>
      <Services/>
    </div>
    <Footer/>
    </>
  );
}
