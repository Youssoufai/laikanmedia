"use client";
import { motion } from "framer-motion";

export default function ReviewForm() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }} // Ensures animation happens every time on scroll
        >
            {/* Logo */}
            <motion.div
                className="mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img src="/logo.jpg" alt="Logo" className="h-16" />
            </motion.div>

            {/* Header */}
            <h2 className="text-3xl font-bold text-red-700 text-center">We would love to hear from you!</h2>
            <p className="text-gray-600 text-center mt-2">
                Let us know how we are performing and share your concerns on topical issues.
            </p>

            {/* Review Input */}
            <motion.div
                className="mt-6 w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <textarea
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter a review"
                    aria-label="Review Input"
                ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
                className="mt-4 bg-red-600 text-white px-6 py-3 rounded-lg w-full max-w-md font-semibold hover:bg-green-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                Send
            </motion.button>
        </motion.div>
    );
}
