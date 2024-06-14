import Link from 'next/link';
import { Button } from "../ui/button";

const VehicleNavbar = () => {
  return (
    <nav className="bg-yellow-50 py-4 flex justify-center">
      <ul className="flex bg-gray-100 rounded-full shadow-lg">
        {['Saloon', 'Estate', 'MPV', 'Transporter', 'Executive', 'Executive Transporter'].map((item, index) => (
          <li key={index} className="list-none">
            <Link href="/" className={`px-4 py-2 block rounded-full ${item === 'Saloon' ? 'bg-orange-500 text-white mb-4 ml-4' : 'hover:bg-gray-200'}`}>
             
                {item}
              
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default VehicleNavbar;
