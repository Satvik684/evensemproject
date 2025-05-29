import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-1000 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* App Info */}
        <div>
          <h2 className="text-xl font-bold text-white">ScholarBuddy</h2>
          <p className="mt-2 text-sm text-gray-400">Helping students discover scholarships that change lives.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white align-text-bottom">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
           <h3 className="text-lg font-semibold text-white ">Connect</h3>
          <div className="flex items-center space-x-4 mt-2">
            <a href="#" className="hover:text-white text-xl"><FaGithub /></a>
            <a href="#" className="hover:text-white text-xl"><FaLinkedin /></a>
            <a href="#" className="hover:text-white text-xl"><FaTwitter /></a>
          </div>
          <p className="mt-4 text-sm text-gray-400">📩 contact Aman;) </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500 w-full">
    © {new Date().getFullYear()} ScholarBuddy. All rights reserved.
  </div>
    </footer>
  );
};

export default Footer;
