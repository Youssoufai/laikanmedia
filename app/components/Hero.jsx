"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 });

    return (
        <>
            <section
                ref={ref}
                className="relative h-screen overflow-hidden pt-[80px]" // pt-[80px] matches navbar height
            >
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/laikan.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-transparent z-10"></div>

                {/* Content */}
                <motion.div
                    className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-lg sm:text-2xl font-light uppercase tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Welcome to the official website of
                    </motion.h2>

                    <motion.h1
                        className="text-4xl sm:text-6xl font-extrabold mt-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        LAIKAN <span className="text-red-500">MEDIA</span>
                    </motion.h1>
                </motion.div>
            </section>
        </>
    );
};

export default Hero;
