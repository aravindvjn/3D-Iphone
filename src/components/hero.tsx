import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="center h-screen">
      <div className="flex items-center flex-col gap-[10px]">
        <p className="text-3xl font-black">iPhone 12 Pro</p>
        <p>Latest iPhone. Greatest price</p>
        <div className="flex gap-5">
          <button className="rounded-full px-6 py-2 bg-blue-600 border-blue-600 border-2 hover:bg-blue-500 text-white">
            Learn more
          </button>
          <button className="rounded-full px-6 py-2 border-blue-500 border-2 hover:bg-blue-500">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
