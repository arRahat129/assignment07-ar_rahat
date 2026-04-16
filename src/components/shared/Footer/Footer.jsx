import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#214d3e] text-white py-10 sm:py-12 px-4 sm:px-6 w-full">

            <div className="container mx-auto flex flex-col items-center text-center">

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
                    KeenKeeper
                </h2>

                <p className="text-gray-300 text-sm sm:text-base max-w-xl mb-6 sm:mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="flex flex-col items-center mb-10 sm:mb-12">
                    <span className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
                        Social Links
                    </span>
                    <div className="flex gap-3 sm:gap-4">
                        <a href="#" className="bg-white p-2 sm:p-3 rounded-full text-[#214d3e] hover:bg-gray-200 transition">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-white p-2 sm:p-3 rounded-full text-[#214d3e] hover:bg-gray-200 transition">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="bg-white p-2 sm:p-3 rounded-full text-[#214d3e] hover:bg-gray-200 transition">
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>

                <div className="w-full border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
                    <p className="text-center md:text-left">
                        © 2026 KeenKeeper. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms</a>
                        <a href="#" className="hover:text-white transition">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;