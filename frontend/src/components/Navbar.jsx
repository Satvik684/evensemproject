// src/components/Navbar.jsx
import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-10 py-5 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold">Aman</h2>
        <div className="flex items-center gap-10">
          <h2 className="text-xl hover:text-blue-400 cursor-pointer">List</h2>
          <h2 className="text-xl hover:text-blue-400 cursor-pointer">Home</h2>
          <h2 className="text-xl hover:text-blue-400 cursor-pointer">About</h2>
          <button onClick={() => setModalOpen(true)} className="text-xl hover:text-blue-400 cursor-pointer">
            Login
          </button>
        </div>
      </nav>

      <LoginModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
