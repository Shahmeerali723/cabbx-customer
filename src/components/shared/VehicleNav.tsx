import React from 'react';
import PropTypes from 'prop-types';

const VehicleNav = ({ selectedVehicle, setSelectedVehicle }:any) => {
    const vehicleTypes = ['Saloon', 'Estate', 'MPV', 'Transporter', 'Executive', 'Executive Transporter'];

    return (
        <nav className="grid grid-cols-3 md:grid-cols-6 justify-between p-2">
            {vehicleTypes.map((type) => (
                <button
                    key={type}
                    onClick={() => setSelectedVehicle(type)}
                    className={`px-5 font-plus-jakarta font-semibold md:mt-0 mt-3 ${selectedVehicle === type ? 'bg-orange relative top-0 border-0 md:top-[-30px] py-2  md:border-[7px] rounded-3xl border-vehicle ' : ' text-gray-800'}`}
                >
                    {type}
                </button>
            ))}
        </nav>
    );
};

VehicleNav.propTypes = {
    selectedVehicle: PropTypes.string.isRequired,
    setSelectedVehicle: PropTypes.func.isRequired,
};

export default VehicleNav;
