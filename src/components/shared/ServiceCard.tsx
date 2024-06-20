import React from 'react';

const ServiceCard = ({ image, title, description }:any) => {
    return (
        <div className="bg-[#171310] font-plus-jakarta text-white rounded-lg p-4 m-2 flex-shrink-0 w-60 h-80">
            <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img src={image} alt={title} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-center">{title}</h3>
            <p className="text-center text-[14px] text-textprimary">{description}</p>
        </div>
    );
};

export default ServiceCard;
