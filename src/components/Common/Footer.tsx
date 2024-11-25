import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1D1D1D]">
      <div className="w-full container mx-auto text-white p-6 md:p-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8">
          {/* Left Section */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <Link
                href={"/"}
                className="text-2xl md:text-4xl font-bold vigaRegular"
              >
                We
                <span className="font-bold vigaRegular primaryColor">5</span>
                ive
              </Link>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Saepe quo
              suscipit vitae quia. Repudiandae nobis quis suscipit saepe quo
              vitae quia.
            </p>
          </div>
          {/* Right Section */}
          <div className="md:col-span-6 space-y-4">
            <h1 className="text-xl md:text-2xl font-semibold">
              Sign Up For Our Newsletter!
            </h1>
            <p className="text-sm md:text-base">
              Get notified about updates and be the first to access new Podcast
              episodes.
            </p>
            <div className="flex  items-stretch md:items-center">
              <input
                placeholder="Your Email Address"
                className="py-3 px-4 w-full md:w-auto md:flex-1 rounded-l-lg"
              />
              <button className="py-3 px-6 primaryColorBg text-white rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Links and Social Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
          <div className="md:col-span-3 space-y-2">
            <h1 className="text-lg font-semibold">Contact Us</h1>
            <p className="text-sm md:text-base">support@we5ive.com</p>
          </div>
          <div className="md:col-span-3 space-y-2">
            <h1 className="text-lg font-semibold">About Us</h1>
            <p className="text-sm md:text-base">Contact Us</p>
          </div>
          <div className="md:col-span-3 space-y-2">
            <h1 className="text-lg font-semibold">Privacy Policy</h1>
            <p className="text-sm md:text-base">Terms & Conditions</p>
          </div>
          <div className="md:col-span-3 space-y-2">
            <h1 className="text-lg font-semibold">Social Links</h1>
            <div className="flex gap-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-gray-400" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-gray-400" />
              <Linkedin className="h-6 w-6 cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="primaryColorBg py-4 text-center text-white text-sm">
        <p>© 2024 | We5ive</p>
      </div>
    </div>
  );
};

export default Footer;
