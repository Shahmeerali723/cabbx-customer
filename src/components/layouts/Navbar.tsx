import React from "react";
import NavDropDown from "../shared/NavDropDown";
import { Button } from "../ui/button";
import { BsFillAirplaneFill } from "react-icons/bs";
import { BsTrainFrontFill } from "react-icons/bs";
import { RiShip2Fill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { CgRing } from "react-icons/cg";
import { FaCar } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const data = {
    airportRuns: {
      title: "Airport Runs",
      runs: [
        {name:"Biggin Hill Airport",icon:<BsFillAirplaneFill/>},
        {name:"Birmingham Airport",icon:<BsFillAirplaneFill/>},
        {name:"London City Airport",icon:<BsFillAirplaneFill/>},
        {name:"Farnborough Airport",icon:<BsFillAirplaneFill/>},
        {name:"Gatwick Airport",icon:<BsFillAirplaneFill/>},
        {name:"Heathrow Airport",icon:<BsFillAirplaneFill/>},
        {name:"Luton Airport",icon:<BsFillAirplaneFill/>},
        {name:"Manchester Airport",icon:<BsFillAirplaneFill/>},
        {name:"Southend Airport",icon:<BsFillAirplaneFill/>},
        {name:"Stansted Airport",icon:<BsFillAirplaneFill/>},
      ],
    },
    stationRuns: {
      title: "Station Runs",
      runs: [
        {name:"Paddington Station",icon:<BsTrainFrontFill/>},
        {name:"Euston Station",icon:<BsTrainFrontFill/>},
        {name:"Victoria Station",icon:<BsTrainFrontFill/>},
        {name:"Waterloo Station",icon:<BsTrainFrontFill/>},
        {name:"King's Cross Station",icon:<BsTrainFrontFill/>},
        {name:"Charing Cross Station",icon:<BsTrainFrontFill/>},
        {name:"London Bridge Station",icon:<BsTrainFrontFill/>}
      ],
    },
    cruiseRuns: {
      title: "Cruise Runs",
      runs: [
        {name:"Harwich seaport",icon:<RiShip2Fill/>},
        {name:"Dover seaport",icon:<RiShip2Fill/>},
        {name:"Portsmouth seaport",icon:<RiShip2Fill/>},
        {name:"Southampton seaport",icon:<RiShip2Fill/>},
        {name:"Liverpool seaport",icon:<RiShip2Fill/>},
        {name:"Newcastle seaport",icon:<RiShip2Fill/>},
        {name:"Other listed seaport",icon:<RiShip2Fill/>},
        {name:"Portsmouth seaport",icon:<RiShip2Fill/>},
        {name:"Rosyth seaport",icon:<RiShip2Fill/>},
        {name:"Greenock seaport",icon:<RiShip2Fill/>},
        {name:"Dundee seaport",icon:<RiShip2Fill/>},
        {name:"Hull seaport",icon:<RiShip2Fill/>},
        {name:"Cardiff seaport",icon:<RiShip2Fill/>},
        {name:"Poole seaport",icon:<RiShip2Fill/>}
      ],
    },
    specialOffers: {
      title: "Special Offers",
      runs: [
        { name: "Cabbi Schools", icon: <FaBookOpen/> },
        { name: "Cabbi University", icon: <FaUniversity/> },
        { name: "Cabbi Wedding", icon: <CgRing/> },
        { name: "Cabbi Day Hire", icon: <FaCar/> },
        { name: "Cabbi Roadshow", icon: <FaRoad/> },
        { name: "Cabbi Executive", icon: "" },
        { name: "Cabbi Corporate Events", icon: "" },
        { name: "Cabbi FlyBus", icon: "" },
        { name: "Cabbi Cruises", icon: "" },
        { name: "Cabbi BusHire", icon: "" },
      ],
    },
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center p-3">
        <div>
          <Image src={'/layer-2-1@2x.png'} alt="" width={128} height={20} />
        </div>
        <div>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
            <li><Link href={"/"}> Home</Link></li>
            <li>
              <NavDropDown data={data.airportRuns} />
            </li>
            <li>
              <NavDropDown data={data.stationRuns} />
            </li>
            <li>
              <NavDropDown data={data.cruiseRuns} />
            </li>
            <li>
              <NavDropDown data={data.specialOffers} />
            </li>
            <li>Cover Areas</li>
            <li>Blog</li>
            <Button className="bg-orange text-white"><Link href={"/signup"}>Signup</Link></Button>
          </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
