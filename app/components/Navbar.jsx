"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black shadow-md fixed w-full top-0 z-50 px-8 md:px-12 py-3 lg:px-20">
            <div className="flex items-center justify-between py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo-two.png" alt="Logo" className="h-10" />
                    <span className="text-red-800 font-bold text-lg">LAIKAN MEDIA</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
                    <motion.li whileHover={{ scale: 1.1 }} className="text-red-700 cursor-pointer">Home</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">About</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">Gallery</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">News & Updates</motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer">Blog</motion.li>
                </ul>

                {/* Contact Button */}

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white shadow-md p-4 space-y-4"
                >
                    <ul className="flex flex-col space-y-4 text-gray-600 font-medium">
                        <li className="text-green-700 cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Gallery</li>
                        <li className="cursor-pointer">News & Updates</li>
                        <li className="cursor-pointer">Blogs</li>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
