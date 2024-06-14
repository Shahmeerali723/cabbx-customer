import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import creditCard from "@/assets/creditcard.svg";
import UKFlag from "@/assets/UKFlag.svg";
import USFlag from "@/assets/USFlag.svg";
import UAEFlag from "@/assets/UAEFlag.svg";
import AusFlag from "@/assets/AusFlag.svg";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";

const Footer = () => {
  const useFulLink: any = [
    {
      name: "Blog",
      path: "/",
    },
    {
      name: "Contact",
      path: "/",
    },
    {
      name: "Became a Partner",
      path: "/",
    },
    {
      name: "Became a Driver",
      path: "/",
    },
    {
      name: "About Us",
      path: "/",
    },
    {
      name: "FAQ",
      path: "/",
    },
  ];
  const reading: any = [
    {
      name: "Privacy Policy",
      path: "/",
    },
    {
      name: "Term & Condition",
      path: "/",
    },
    {
      name: "Customer Funds",
      path: "/",
    },
    {
      name: "Partner Funds",
      path: "/",
    },
    {
      name: "Driver Funds",
      path: "/",
    },
  ];
  const customer: any = [
    {
      name: "Customer Login",
      path: "/",
    },
    {
      name: "Partner Login",
      path: "/",
    },
    {
      name: "Integrate our API",
      path: "/",
    },
    {
      name: "Dispatch",
      path: "/",
    },
    {
      name: "Support",
      path: "/",
    },
  ];
  const icons : any = [
    <FaYoutube/>,
    <FaFacebookF/>,
    <FaTwitter/>,
    <FaInstagram/>,
    <FaLinkedinIn/>,
    <TbWorld/>
  ]

  return (
    <div className="w-full text-textprimary">
      <div className="w-[90%] mx-auto h-5 bg-gradient-custom-primary roun rounded-tl-3xl rounded-tr-3xl"></div>

      <div className="w-[full] bg-secondary roun rounded-tl-2xl rounded-tr-2xl">
        <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-8 w-[80%] py-4">
            <div className="bg-secondary-darkest w-[140px] h-[40px] flex justify-center items-center rounded-lg">
              <Image src={logo} alt="logo" width={100} height={100} />
            </div>
            <p>
              Cabbx is a reliable cab facilitator that has partnered with
              numerous reliable cab services. Cabbx offers two types of
              services: B2B & B2C. The services include a web-based dashboard
              for managing bookings, real-time tracking of vehicles, & detailed
              reporting. These services are aimed at streamlining transportation
              needs, saving time and money for businesses.
            </p>
            <p>Working Hours : Mon - Sun 24h</p>
            <div>
              <Button>AppStore</Button>
            <Button>Play Store</Button>
            </div>
            
          </div>
          <div className="flex flex-col gap-8 ml-auto  py-4">
            <div>

            </div>
            <div>
            <p>
              Know more about our Privacy Policy - you can easily unsubscribe
              any time!
            </p>
            <div className="relative w-full mt-4">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Enter your email address here"
              />
              <Button className="absolute inset-y-0 right-0 flex items-center px-4 mt-1.5 mr-1 bg-secondary text-white rounded-r-md  hover:bg-secondary-dark ">
                Subscribe
              </Button>
            </div>
            </div>
            
            <div>
              <h1>OFFICE</h1>
              <p className="text-textprimary-dark">
                82 Harrow Dene Road, Wembley, Middlesex, London. HA0 2JF, United
                Kingdom
              </p>
            </div>
            <div>
              <h1>Phone number</h1>
              <p className="text-textprimary-dark">+44 3300 4331 85</p>
            </div>
            <div>
              <Image src={creditCard} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2 p-2">
          <div className="grid grid-cols-3 w-[90%] mx-auto">
            <div>
              <ul>
                <li className="font-bold text-lg text-white">Useful Links</li>
                {useFulLink?.map((item: any) => {
                  return (
                    <li>
                      <Link className="text-sm font-light" href={item?.path}>{item?.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold text-lg text-white">Important Reading</li>
                {reading?.map((item: any) => {
                  return (
                    <li>
                      <Link className="text-sm font-light" href={item?.path}>{item?.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul>
                <li className="font-bold text-lg text-white">Customer Support</li>

                {customer?.map((item: any) => {
                  return (
                    <li>
                      <Link className="text-sm font-light" href={item?.path}>{item?.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Locations</h3>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex gap-3 items-center">
                <Image src={UKFlag} alt="" />
                <p>UK : Harrowdene Road, Wembley, England, HA0 2JF</p>
              </div>
              <div className="flex gap-3 items-center">
                <Image src={USFlag} alt="" />
                <p>US : Ste 400 San Francisco, CA Coming Soon</p>
              </div>
              <div className="flex gap-3 items-center">
                <Image src={AusFlag} alt="" />
                <p>
                  AUS : George St Sydney, New SOUTH WALES, 2000 coming soon{" "}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Image src={UAEFlag} alt="" />
                <p>UAE : Abdullah Omran Taryam street, Dubai Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="grid grid-cols-2 py-4 items-center">
          <div>
          © 2024 Copyright CABBX. All Right Reserved
          </div>
          <div className="ml-auto">
            <ul className="flex gap-4 ">
              {icons?.map((item:any)=>{
                return <li>{item}</li>
              })}
            </ul>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
