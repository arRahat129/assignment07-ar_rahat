import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#214d3e] text-white py-12 px-6 w-100 md:container lg:w-400 mx-auto">
      <div className="mx-auto flex flex-col items-center">
        
        <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
        <p className="text-gray-300 text-center max-w-xl mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center mb-12">
          <span className="text-lg font-medium mb-4">Social Links</span>
          <div className="flex gap-4">
            <a href="#" className="bg-white p-2 rounded-full text-[#214d3e] hover:bg-gray-200 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="bg-white p-2 rounded-full text-[#214d3e] hover:bg-gray-200 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="bg-white p-2 rounded-full text-[#214d3e] hover:bg-gray-200 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;