// src/components/LoginModal.jsx
import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
  <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg">
    <h2 className="text-black text-2xl font-bold mb-6 text-center">Login</h2>
    <form className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Login
      </button>
      <button
        type="button"
        onClick={onClose}
        className="mt-1 text-sm text-gray-600 hover:text-red-500 transition"
      >
        Cancel
      </button>
    </form>
  </div>
</div>

  );
};

export default LoginModal;
