import React from 'react';
import ServiceCard from '../shared/ServiceCard';


const services = [
    { image: '/layer-34-2@2x.png', title: 'Cabbx Railways', description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
    { image: '/layer-35-1@2x.png', title: 'Cabbx Airports', description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
    { image: '/layer-37-1@2x.png', title: 'Cabbx Cruise University', description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
    { image: '/layer-34-2@2x.png', title: 'Cabbx Railways', description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
    { image: '/layer-37-1@2x.png', title: 'Cabbx Cruise University', description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
    { image: '/layer-36-1@2x.png', title: 'Cabbx Cruise Seaports', description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
];

const ServiceCarousel = () => {
    return (
        <div className="relative bg-[#241F1C] rounded-lg py-2">
            <h2 className="text-3xl font-bold ml-4 my-5 text-white font-plus-jakarta">Our Services</h2>
            <div className="flex overflow-x-auto serviceCardScroll no-scrollbar space-x-4 px-4 w-[96%] mx-auto">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default ServiceCarousel;
