"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/capture.jpg",
    "/abdool.jpg",
    "/boys.jpg",
];

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="p-11 bg-gray-100 overflow-hidden pt-24">
            {/* Title */}
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-black">
                    About <span className="text-red-600">LAIKAN MEDIA</span>
                </h1>
            </div>

            {/* Slideshow Section */}
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === 0 ? images.length - 1 : prevIndex - 1
                        )
                    }
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === images.length - 1 ? 0 : prevIndex + 1
                        )
                    }
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* About Text */}
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mt-6">
                <p className="mb-4">
                    We’re a team driven by creativity and innovation. With a mission to empower businesses with top notch commercial videos and Social Media contents. We currently work with clients like WellCare Stores, Calido Rooftop, iTel Nigeria, Zazu Restaurant, Tahir Guest Palace Hotels, Porto Golf Hotels, Bells Nigeria, The GlitzFair, and others.
                </p>
            </div>
        </section>
    );
}
