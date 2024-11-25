/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { RiMenu2Fill } from "react-icons/ri";
import { getCartLength } from "../UtlitiFunction/getCartLength";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartLength());
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    const intervalId = setInterval(updateCartCount, 1000);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <motion.header
      className={`${
        scrolling
          ? "bg-[#eeecfb] fixed dark:bg-slate-800 w-full z-40"
          : "w-full z-40 fixed bg-[#eeecfb]"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full container mx-auto py-3 flex justify-between items-center md:px-0 px-0">
        <div className="w-full flex justify-between items-center md:px-0 px-2">
          {/* First Div */}
          <button className="md:hidden text-slate-800" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <RiMenu2Fill size={24} />}
          </button>
          <div className="flex-1 flex justify-start items-center md:pl-0 pl-3">
            <div className="flex items-center gap-3">
              <Link
                href={"/"}
                className="text-2xl md:text-3xl font-bold vigaRegular text-slate-800"
              >
                We
                <span className="font-bold vigaRegular primaryColor">5</span>
                ive
              </Link>
            </div>
          </div>

          {/* Second Div */}
          <div className=" hidden md:block flex-1 flex justify-center items-center">
            <div className="flex justify-center items-center text-center gap-3">
              <h1 className="text-lg primaryColor cursor-pointer">Home</h1>
              <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#8f71e1]">
                Shop
              </h1>
              <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#8f71e1]">
                Deals
              </h1>
              <h1 className="text-lg text-slate-700 cursor-pointer hover:text-[#8f71e1]">
                What's New
              </h1>
            </div>
          </div>

          {/* Third Div */}
          <div className="flex-1 flex items-center gap-5 justify-end">
            <div className="flex items-center bg-none md:bg-gray-100 rounded-full px-2 md:px-6 py-2 ">
              <button className="text-gray-500 hover:text-gray-700">
                <Search className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none w-48 px-2 text-sm text-gray-700 hidden sm:block"
              />
            </div>

            <div className="relative flex items-center">
              <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-gray-900" />
              <span className="absolute -top-1 -right-2 bg-gray-600 text-white text-xs font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </div>

            <div className="cursor-pointer">
              <UserRound />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden"
      >
        <div className="flex flex-col items-center bg-white dark:bg-slate-800 pb-32 space-y-3">
          <h1 className="text-lg text-slate-700  hover:text-[#8f71e1] cursor-pointer">
            Home
          </h1>
          <h1 className="text-lg text-slate-700  hover:text-[#8f71e1] cursor-pointer">
            Shop
          </h1>
          <h1 className="text-lg text-slate-700  hover:text-[#8f71e1] cursor-pointer">
            Deals
          </h1>
          <h1 className="text-lg text-slate-700  hover:text-[#8f71e1] cursor-pointer">
            What's New
          </h1>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
