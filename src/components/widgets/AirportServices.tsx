import Image from 'next/image';
import React from 'react';

const AirportServices = () => {
  return (
    <div className='w-full '>
      <Image src={"/airport-section.gif"} className='w-full' alt='' width={600} height={300}/>
    </div>
  );
};

export default AirportServices;
