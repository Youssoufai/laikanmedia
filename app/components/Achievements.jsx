"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Briefcase, Globe, Target } from "lucide-react";

export default function Achievements() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

    return (
        <motion.section
            ref={sectionRef}
            className="py-16 px-6 bg-white overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-red-600 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    <span className="text-black">Achievements &</span> Impact
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-700 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: false }}
                >
                    We harness the power of storytelling, design, and digital media to drive real-world impact across Nigeria’s youth, brands, and communities.
                </motion.p>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Award, title: "Award-Winning Campaigns", text: "Produced media campaigns that gained national attention and recognition for transforming youth engagement." },
                        { icon: Users, title: "Youth-Centric Strategies", text: "Executed strategies that amplified youth voices and mobilized over 50,000 Nigerians through social media." },
                        { icon: Briefcase, title: "Creative Advocacy", text: "Crafted compelling digital content that pushed forward policies and narratives for social change." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-2xl shadow-lg text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <item.icon className="w-12 h-12 text-red-600 mx-auto mb-3" />
                            <h3 className="text-2xl font-semibold text-red-600 mb-3">{item.title}</h3>
                            <p className="text-gray-700">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Impact Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-red-600 mb-6">Impact in Numbers</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Users, number: "50K+", label: "Youth Reached" },
                            { icon: Briefcase, number: "120+", label: "Campaigns Executed" },
                            { icon: Globe, number: "15+", label: "Regions Covered" },
                            { icon: Target, number: "10+", label: "Years Driving Change" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-red-600 text-white p-6 rounded-2xl shadow-lg text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                viewport={{ once: false }}
                            >
                                <item.icon className="w-12 h-12 mx-auto mb-3" />
                                <h4 className="text-4xl font-bold">{item.number}</h4>
                                <p className="text-lg">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
