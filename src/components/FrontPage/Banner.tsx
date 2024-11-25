import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  const img =
    "https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid";

  return (
    <div className="relative w-full h-[100vh]">
      <div className="absolute inset-0 ">
        <Image src={img} alt="Banner Image" layout="fill" quality={100} />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 space-y-5 flex flex-col items-center justify-center z-10 md:px-0 px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white">
          Elevate Your Everyday Style
        </h1>
        <p className=" text-white text-2xl text-center">
          Discover the Latest Trends in Sustainable Fashion
        </p>
        <div className=" flex items-center">
          <button className=" primaryColorBg text-white px-12 py-3 rounded-full">
            Shop Now
          </button>
          <div className=" h-12 w-12 flex justify-center items-center primaryColorBg text-white rounded-full">
            <MoveUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
