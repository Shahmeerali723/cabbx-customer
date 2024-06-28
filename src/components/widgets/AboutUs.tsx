import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center  font-plus-jakarta w-full">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-3xl">Who we are?</h2>
        <p>
          <b>Experience Excellence with Cabbx: Your Journey Starts Here!</b>
          <br />
          At Cabbx, we redefine transportation by blending reliability, comfort,
          and convenience. With a fleet of top-notch vehicles and a commitment
          to exceptional service, we ensure every ride with us is an
          unforgettable experience. Join us today and let Cabbx elevate your
          travel journey to new heights!
          <br />
          <b>Book Your Ride Now and Discover the Cabbx Difference!</b>
        </p>
        <Link className="font-bold text-orange" href={"/about"}>Read more --- </Link>
      </div>
      <div className="flex w-full justify-end gap-2 p-5">
        
          <Image
          width={100}
          height={100}
            className="rounded-4xs  h-52 "
            alt=""
            src="/rectangle-135@2x.png"
          />
          <Image
          width={100}
          height={100}
            className="rounded-4xs mt-5 h-52 "
            alt=""
            src="/rectangle-137@2x.png"
          />
          <Image
          width={100}
          height={100}
            className="rounded-4xs  h-52 "
            alt=""
            src="/rectangle-136@2x.png"
          />
          <Image
          width={100}
          height={100}
            className="rounded-4xs mt-5 w h-52 "
            alt=""
            src="/rectangle-138@2x.png"
          />
        </div>
     
    </div>
  );
};

export default AboutUs;
