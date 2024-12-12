'use client'
import { MailIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MemberCardProps {
    name: string;
    image: string;
    intro: string;
    linkedin: string;
    email: string;
    color: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
    name,
    image,
    intro,
    linkedin,
    email,
    color,
}) => {
    // Define the animation variants for the overlay
    const overlayVariants = {
        initial: { y: '100%' },
        hover: { y: 0 },
    };

    return (
        <div>
            {/* Main Card with Hover Effect */}
            <motion.div
                className={`${color} w-96 h-96 rounded-lg relative overflow-hidden`}
                initial="initial"
                whileHover="hover"
            >
                {/* Main Image */}
                <Image
                    src={image}
                    alt={`${name}'s profile`}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg shadow-md"
                />
                {/* Overlay */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-70 flex items-center justify-center"
                    variants={overlayVariants}
                    transition={{ duration: 0.3 }}
                >
                    <motion.p
                        className="text-xl text-black text-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        {intro}
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Footer Section */}
            <div className="flex items-center w-96 mt-3 text-black">
                <h3 className="text-2xl font-semibold mr-auto">
                    {name}
                </h3>
                <div className="flex items-center gap-x-2">
                    {/* Email Icon */}
                    <div className="bg-black rounded-sm w-[32px] h-[32px] flex items-center justify-center">
                        <a 
                            href={`mailto:${email}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <MailIcon className="text-white text-center" />
                        </a>
                    </div>
                    {/* LinkedIn Icon */}
                    <div className=" rounded-sm p-1">
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/linkedin.png"
                                width={32}
                                height={32}
                                alt="LinkedIn link"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
