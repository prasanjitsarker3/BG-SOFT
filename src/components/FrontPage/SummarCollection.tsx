"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rating } from "@smastrom/react-rating";
import { customStyles } from "../Common/ViewProductInformation";
import { productData } from "../UtlitiFunction/ProductData";
import Link from "next/link";
import ProductCart from "../Common/ProductCart";

const SummerCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < productData.length - 8) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className=" w-full container mx-auto md:px-0 px-8 pb-12">
      <div className=" flex justify-between items-center">
        <div>
          <h1 className=" font-medium text-xl md:text-3xl primaryColor">
            SUMMER
          </h1>
          <h1 className=" vigaRegular font-semibold text-xl md:text-3xl text-slate-900">
            Big Deal
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="h-12 w-12 flex justify-center items-center border border-[#8f71e1] hover:bg-[#8f71e1] hover:text-white primaryColor text-white rounded-full"
            onClick={handlePrev}
          >
            <ArrowLeft />
          </button>
          <button
            className="h-12 w-12 flex justify-center items-center border border-[#8f71e1] hover:bg-[#8f71e1] hover:text-white primaryColor text-white rounded-full"
            onClick={handleNext}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10"
        key={currentIndex}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        transition={{ duration: 2 }}
      >
        {productData?.slice(currentIndex, currentIndex + 8).map((item) => (
          <ProductCart item={item} key={item.id} discount={true} />
        ))}
      </motion.div>

      <div className="w-full mx-auto text-center py-8">
        <button className="px-8 py-2 bg-[#8f71e1] text-white rounded-lg">
          See More
        </button>
      </div>
    </div>
  );
};

export default SummerCollection;