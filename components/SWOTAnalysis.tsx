"use client";
import { motion } from "framer-motion";
import { CheckIcon, ChevronsUpIcon, ShieldXIcon, XIcon } from "lucide-react";

interface SWOTAnalysisProps {
    name: string;
    strengths: string[];
    weaknesses: string[];
    opportunitites: string[];
    threats: string[];
}

const SWOTAnalysis: React.FC<SWOTAnalysisProps> = ({
    name,
    strengths,
    weaknesses,
    opportunitites,
    threats,
}) => {
    return (
        <div>
            {/* Title */}
            <div className="text-black text-center mb-10 text-3xl font-bold">
                {`${name}'s SWOT Analysis`}
            </div>

            <div className="flex items-center gap-x-5 justify-center">
                {/* Strengths */}
                <motion.div
                    className="h-[30vh] w-[20vw] bg-transparent border-4 border-green-500 rounded-xl shadow-lg p-5 text-black bg-white"
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        backgroundColor: "#22c55e", // Tailwind green-500
                        color: "#ffffff", // White text
                        borderColor: "#22c55e", // Match bg color
                    }}
                    transition={{ duration: 0.25 }}
                >
                    <h2 className="font-semibold text-2xl mb-4">Strengths</h2>
                    {strengths.map((strength) => (
                        <div className="flex items-start mb-2">
                            <div className="bg-zinc-400/10 rounded-md mr-1">
                                <CheckIcon className="text-green-500" />
                            </div>
                            <p>{strength}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Weaknesses */}
                <motion.div
                    className="h-[35vh] w-[20vw] bg-transparent border-4 border-blue-500 rounded-xl shadow-lg p-5 text-black bg-white"
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        backgroundColor: "#3b82f6", // Tailwind blue-500
                        color: "#ffffff", // White text
                        borderColor: "#3b82f6", // Match bg color
                    }}
                    transition={{ duration: 0.25 }}
                >
                    <h2 className="font-semibold text-2xl mb-4">Weaknesses</h2>
                    {weaknesses.map((weakness) => (
                        <div className="flex items-start mb-2">
                            <div className="bg-zinc-400/10 rounded-md mr-1">
                                <ShieldXIcon className="text-blue-500" />
                            </div>
                            <p>{weakness}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Opportunities */}
                <motion.div
                    className="h-[35vh] w-[20vw] bg-transparent border-4 border-yellow-500 rounded-xl shadow-lg p-5 text-black bg-white"
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        backgroundColor: "#f59e0b", // Tailwind yellow-500
                        color: "#ffffff", // White text
                        borderColor: "#f59e0b", // Match bg color
                    }}
                    transition={{ duration: 0.25 }}
                >
                    <h2 className="font-semibold text-2xl mb-4">Opportunities</h2>
                    {opportunitites.map((opportunity) => (
                        <div className="flex items-start mb-2">
                            <div className="bg-zinc-400/10 rounded-md mr-1">
                                <ChevronsUpIcon className="text-yellow-500" />
                            </div>
                            <p>{opportunity}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Threats */}
                <motion.div
                    className="h-[30vh] w-[20vw] bg-transparent border-4 border-red-500 rounded-xl shadow-lg p-5 text-black bg-white"
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        backgroundColor: "#ef4444", // Tailwind red-500
                        color: "#ffffff", // White text
                        borderColor: "#ef4444", // Match bg color
                    }}
                    transition={{ duration: 0.25 }}
                >
                    <h2 className="font-semibold text-2xl mb-4">Threats</h2>
                    {threats.map((threat) => (
                        <div className="flex items-start mb-2">
                            <div className="bg-zinc-400/10 rounded-md mr-1">
                                <XIcon className="text-red-500" />
                            </div>
                            <p>{threat}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default SWOTAnalysis;
