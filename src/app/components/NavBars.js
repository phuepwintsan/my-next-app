"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-black text-white text-sm px-6 py-2 w-full ">
        <div className="flex items-center justify-end gap-4">
          <span>Contact with us:</span>
          <div className="flex items-center gap-4">

            <a className="bg-green-500 p-2 rounded-full">
              <Image src="/whatsapp.svg" alt="WhatsApp" width={10} height={10} />
            </a>

            <a className="bg-green-500 p-2 rounded-full">
              <Image src="/line.svg" alt="LINE" width={10} height={10} />
            </a>

            <a className="bg-green-500 p-2 rounded-full">
              <Image src="/wechat.svg" alt="WeChat" width={10} height={10} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center">
              <Image src="/logo_Tour.jpg" alt="dropdown" width={108} height={108} />
              {/* Brand Name */}
              {/* <span className="text-xl font-semibold text-black tracking-wide">
                ThaiSGolf
              </span> */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600 text-black flex items-center">Home</Link>
              <Link href="/services" className="hover:text-blue-600 text-black flex items-center">Our Services
                <Image src="/dropdown.svg" alt="dropdown" width={30} height={30} />
              </Link>
              <Link href="/transportation" className="hover:text-blue-600 text-black flex items-center">Transportation Service</Link>
              <Link href="/gallery" className="hover:text-blue-600 text-black flex items-center">Review & Gallery</Link>
              <Link href="/about-us" className="hover:text-blue-600 text-black flex items-center">About Us</Link>
            </div>

            {/* Right Menu */}
            <div className="hidden md:flex space-x-4 text-sm font-medium">
              <Link href="/register" className="hover:text-blue-600 text-black flex items-center">
                Member Registration
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center 
             bg-green-500 hover:bg-green-600 
             text-white font-semibold 
             px-6 py-2.5 rounded-lg 
             shadow-md hover:shadow-lg 
             transition duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              <Image src="/3line.svg" alt="3line" width={30} height={30} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-sm">
            <Link href="/" className="block text-black hover:text-blue-600">Home</Link>
            <Link href="/services" className="text-black hover:text-blue-600 flex items-center">Our Services <Image src="/dropdown.svg" alt="dropdown" width={30} height={30} /></Link>
            <Link href="/transportation" className="block text-black hover:text-blue-600">Transportation Service</Link>
            <Link href="/gallery" className="block text-black hover:text-blue-600">Review & Gallery</Link>
            <Link href="/about-us" className="block text-black hover:text-blue-600">About Us</Link>
            <Link href="/register" className="block text-black hover:text-blue-600">Member Registration</Link>
            <Link
                href="/contact-us"
                className="inline-flex items-center justify-center 
             bg-green-500 hover:bg-green-600 
             text-white font-semibold 
             px-6 py-2.5 rounded-lg 
             shadow-md hover:shadow-lg 
             transition duration-300"
              >
                Contact Us
              </Link>
          </div>
        )}
      </nav>
    </>
  );
}
