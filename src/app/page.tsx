import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import NavDropDown from "@/components/shared/NavDropDown";
import VehicleNavbar from "@/components/shared/VehicleNav";
import Hero from "@/components/widgets/Hero";
import Image from "next/image";
import { BsAirplaneFill } from "react-icons/bs";
import { IoMdTrain } from "react-icons/io";
import { RiShip2Fill } from "react-icons/ri";


export default function Home() {
  return (
    // <Navbar/>
    <>
    <Hero/>
    <VehicleNavbar/>
 
    <Footer/>
    </>
  );
}
