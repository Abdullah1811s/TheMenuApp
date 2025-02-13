'use client'

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black sticky text-white whitespace-nowrap flex items-center justify-between rounded-sm mt-6 w-11/12 md:w-9/12 h-20 px-6 py-3 mx-auto">

            <div className="flex items-center gap-2">
                <Image src="/Logo.png" alt="Logo" width={200} height={200} className="h-10 mr-3" />
            </div>
            <div className="hidden md:flex gap-8 items-center">
                <ul className="flex gap-10 lg:gap-14 text-lg md:text-base">
                    <li className="relative font-semibold text-[#DBC166] after:block after:h-[2px] after:w-full after:bg-[#DBC166] after:scale-x-100 cursor-pointer">
                        Home
                    </li>
                    <li className="hover:text-[#DBC166] transition-colors duration-300 ease-in-out cursor-pointer">Vendor</li>
                    <li className="hover:text-[#DBC166] transition-colors duration-300 ease-in-out cursor-pointer">About us</li>
                    <li className="hover:text-[#DBC166] transition-colors duration-300 ease-in-out cursor-pointer">Contact</li>
                </ul>

                <div className="flex items-center gap-3">
                    <Button className="bg-[#DBC166] text-black px-4 h-8 rounded-full text-md text-center transition-all duration-300 ease-in-out hover:bg-[#C0B060] hover:shadow-lg hover:scale-105 cursor-pointer">
                        SIGN IN
                    </Button>
                    <Button className="bg-[#DBC166] text-black px-4 h-8 rounded-full text-md text-center transition-all duration-300 ease-in-out hover:bg-[#C0B060] hover:shadow-lg hover:scale-105 cursor-pointer">
                        SIGN UP
                    </Button>
                </div>
            </div>
            <button
                className="md:hidden text-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-5 space-y-4 md:hidden">
                    <ul className="flex flex-col items-center gap-4 text-lg">
                        <li className="font-semibold text-[#DBC166] cursor-pointer">Home</li>
                        <li className="hover:text-[#DBC166] transition-colors duration-300 ease-in-out cursor-pointer">Vendor</li>
                        <li className="hover:text-[#DBC166] transition-colors duration-300 ease-in-out cursor-pointer">About us</li>
                        <li className="hover:text-[#DBC166] transition-colors duration-300 ease-in-out cursor-pointer">Contact</li>
                    </ul>

                    <div className="flex flex-col gap-3">
                        <Button className="bg-[#DBC166] text-black px-6 py-2 rounded-full text-md text-center transition-all duration-300 ease-in-out hover:bg-[#C0B060] hover:shadow-lg hover:scale-105 cursor-pointer">
                            SIGN IN
                        </Button>
                        <Button className="bg-[#DBC166] text-black px-6 py-2 rounded-full text-md text-center transition-all duration-300 ease-in-out hover:bg-[#C0B060] hover:shadow-lg hover:scale-105 cursor-pointer">
                            SIGN UP
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarComponent;
