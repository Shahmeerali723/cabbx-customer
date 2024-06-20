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
import VehicleSection from "@/components/widgets/VehicleSection";
import Testimonials from "@/components/widgets/Testimonial";
import AboutUs from "@/components/widgets/AboutUs";
import StationSection from "@/components/widgets/StationSection";
import ServiceCarousel from "@/components/widgets/ServiceCarousel";
import CoachTravelWidget from "@/components/widgets/CoachTravelWidget";
import AirportServices from "@/components/widgets/AirportServices";
import ContactForm from "@/components/widgets/ContactForm";

export default function Home() {
  return (
    <>
      <div className="w-full mx-auto">
        <div className="container">
          <Navbar />
        </div>
        <hr />
        <div className="container mt-4 flex flex-col gap-10">
          <div>
            <div className="">
              <Hero />
            </div>
            <div className="relative mt-[-160px] z-50">
              <CabHire />
            </div>
          </div>
          <Services />
          <AboutUs />
          <VehicleSection />
          <Testimonials />
          <ServiceCarousel/>
          <CoachTravelWidget/>
          <StationSection />
          <AirportServices/>
          <ContactForm/>
        </div>
      </div>
      <Footer />
    </>
  );
}
