"use client"
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 text-white py-10 px-5 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
                {/* Logo & About */}
                <div>
                    <h2 className="text-2xl font-bold text-red-500">LAIKAN MEDIA</h2>
                    <p className="text-gray-400 mt-2">Member of the Order of the Niger</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-red-400">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="text-gray-300 hover:text-red-400 transition">Home</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-red-400 transition">About</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-red-400 transition">Gallery</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-red-400 transition">News & Updates</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-red-400">Follow Us</h3>
                    <div className="flex justify-center md:justify-start mt-3 space-x-4">
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-blue-500 transition">
                            <FaFacebook size={24} />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-sky-400 transition">
                            <FaTwitter size={24} />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-pink-500 transition">
                            <FaInstagram size={24} />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-blue-700 transition">
                            <FaLinkedin size={24} />
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-6">© {new Date().getFullYear()} Cognitix Development. All rights reserved.</div>
        </motion.footer>
    );
}
