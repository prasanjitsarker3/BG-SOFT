import { MoveUpRight } from "lucide-react";
import React from "react";
import discountBanner from "../../../public/Photo/discountBanner.png";
import Image from "next/image";

const DiscountBanner = () => {
  return (
    <div className=" w-full container mx-auto ">
      <div>
        <div className=" grid grid-cols-12 secondaryColor">
          <div className=" col-span-12 md:col-span-6 flex flex-col justify-center md:items-start items-center space-y-5 p-10">
            <h1 className=" font-mono text-3xl">Big Deal</h1>
            <h1 className=" vigaRegular md:text-start text-center font-medium text-5xl text-slate-900 space-x-3 ">
              <span className=" primaryColor vigaRegular">30%</span>
              Off for New Customers
            </h1>
            <div className=" flex items-center">
              <button className=" primaryColorBg text-white px-12 py-3 rounded-full">
                Shop Now
              </button>
              <div className=" h-12 w-12 flex justify-center items-center primaryColorBg text-white rounded-full">
                <MoveUpRight />
              </div>
            </div>
          </div>

          <div className=" col-span-12 md:col-span-6 pt-10">
            <div className=" h-96 w-full ">
              <Image
                src={discountBanner}
                alt=""
                width={500}
                height={500}
                className=" w-full h-full flex justify-center items-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
