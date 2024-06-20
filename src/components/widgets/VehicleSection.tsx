import { useState } from 'react';
import VehicleNav from '../shared/VehicleNav';
import VehicleDisplay from '../shared/VehicleDisplay';


export default function VehicleSection() {
    const [selectedVehicle, setSelectedVehicle] = useState<any>('Saloon');

    return (
        <div className='bg-vehicle font-plus-jakarta flex flex-col gap-9 py-3 rounded-lg'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>
                Our Fleet of Vehicles
                </h2>
                <p>
                Experience Luxury on Wheels Explore Our Impressive Fleet Today!
                </p>
            </div>
            <div className='w-[90%] mx-auto rounded-2xl bg-[#BFBFBF] bg-opacity-35'>

            <VehicleNav selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} />
            </div>
            <VehicleDisplay selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} />
        </div>
    );
}
