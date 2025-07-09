import React from "react"; // ✅ Make sure this is present
import Link from "next/link";
import ClientScrollEffect from "../client-side/ClientScrollEffect";

export default function About(){


  return (
    <div id="about" className="my-4 md:my-[2.5%] flex flex-col justify-start items-center">
      <Link href="/about">
        <h2 className="hover:cursor-pointer hover:underline hover:text-[#006400] md:my-[2.5%] text-[#0A0A23] inter-text font-bold text-3xl">About Us</h2>
      </Link>
      <p className="text-center text-xl merriweather-text text-[#333333] flex flex-col gap-4">
        Based in Calexico, Imperial Web Experts proudly serves the Imperial Valley and Mexicali, combining technical expertise with local insight to deliver tailored web solutions. We craft seamless user experiences, optimize site performance, and ensure every website reflects each business’s unique identity. Our mission is to equip small businesses with reliable, professional digital tools that help them stand out and succeed in a competitive market.
      </p>    
    </div>
  );
}
