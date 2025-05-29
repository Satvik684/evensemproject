// src/components/LoginModal.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

const SignUpModal = () => {
  const navigate = useNavigate();

  const {signup,error,isLoading} = useSignup();

  const handleClick = ()=>{
    navigate("/");
  }

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handelSubmit = async (e) =>{
    e.preventDefault();

    await signup(email,password);
  }

  return (
   <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 text-black">
  <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg">
    <h2 className="text-black text-2xl font-bold mb-6 text-center">SignUp</h2>
    <form className="flex flex-col gap-4" onSubmit={handelSubmit}>
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        disabled={isLoading}
      >
        Signup
      </button>
      <button
        type="button"
        onClick={handleClick}
        className="mt-1 text-sm text-gray-600 hover:text-red-500 transition"
      >
        Cancel
      </button>
      
      {error && <div className='error'>{error}</div>}
    </form>
  </div>
</div>

  );
};

export default SignUpModal;